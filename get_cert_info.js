/**
 * TLS Dashboard by Craine Runton
 * Source: https://github.com/cmrunton/tls-dashboard
 * 
 * See /LICENSE for licensing details
 */

var https = require('https');
const fs = require('fs');
const config = require('./config');
const monitored_hosts = require('./monitored_hosts');

const run_date = new Date().toDateString();
var output = {},
  iteration = 1,
  errors = 0;

// Run the module
monitored_hosts.forEach(get_cert_parameters)

/**  
 * Creates a connection to the host, and then reads the resulting peer certificate to extract the desired info
 * 
 * @param {string} element The 
 * @param {int} index 
 * @param {array} array The 
 */
function get_cert_parameters(element, index, array) {
  var options = {
    host: element,
    port: 443,
    method: 'GET'
  };
  var req = https.request(options, function(res) {
    var cert = res.connection.getPeerCertificate();
    var parsed = {
      'server': element,
      'subject': {
        'org': cert.subject.O,
        'common_name': cert.subject.CN,
        'sans': cert.subjectaltname
      }, 
      'issuer': {
        'org': cert.issuer.O,
        'common_name': cert.issuer.CN
      },
      'info': {
        'valid_from': parse_date(cert.valid_from),
        'valid_to': parse_date(cert.valid_to),
        'days_left': get_days_left(cert.valid_to)
      }
    }
    add_cert_details(parsed, iteration);
    check_iterations();
  });
  req.end();
};

/**
 * Parses the date string passed to it and returs a new date object
 *
 * @param {string} date_string The human readble date string that needs to be parsed
 */
function parse_date(date_string) {
  var date = new Date(Date.parse(date_string));
  return date;
};

/** 
 * Takes a date string and returns the nuumber of days between now and the future date
 * 
 * @param {string} date_string The human readble date string that needs to be parsed
 */
function get_days_left(date_string) {
  var now = Date.now();
  var then = new Date(Date.parse(date_string));
  var days_left = Math.round((then - now)/86400000);
  return days_left;
};

/**
 * Helper function to put the resolved/parsed cert info into the module output object
 * 
 * @param {object} object Contains the parsed certificate info
 * @param {string} host The name of the host that the certificate info is taken from
 */
function add_cert_details(object, host) {
  output[host] = object;
};

/**
 * Checks the iteration count. If the forEach has iterated over all the hosts, then call the write_results function, 
 *   otherwise log the iteration to the console and increment the count
 */
function check_iterations() {
  if (iteration === monitored_hosts.length) {
    write_results();
    assert(true, iteration+' of '+host_list.length+' urls complete.');
  } else {
    iteration++;
  }
};

/**
 * Writes out the final object to a file, along with the run date to be used by the HTML page later
 */
function write_results() {
  fs.writeFile(config.output_file.path+config.output_file.name, 'var run_date = \''+run_date+'\'; \nvar cert_info = '+JSON.stringify(output, null, 2), function(err) {
    // If the write errored out, notify
    if (err) { 
      console.log('Error writing file. \n');
    }
  })
};

/**
 * Test function and used to write out the final iteration in green
 */
function assert(value, desc) {
  if (value) {
    console.log("\033[32m "+desc+"\033[0m");
  } else {
    console.log("\033[31m "+desc+"\033[0m");
  }
};