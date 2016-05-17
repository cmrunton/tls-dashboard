var https = require('https');
const fs = require('fs');

const directory = process.argv[2]+'/';
const file_name = 'certificates.js';
const run_date = new Date().toDateString();
var host_list = [
  'www.google.com',
  'www.twitter.com',
  'www.github.com',
  'www.bitbucket.com',
  'news.ycombinator.com',
  'barnacl.es'
  ];
var output = {};
var iteration = 1;

host_list.forEach(get_cert_parameters)

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
function parse_date(date_string) {
  var date = new Date(Date.parse(date_string));
  return date;
};
function get_days_left(date_string) {
  var now = Date.now();
  var then = new Date(Date.parse(date_string));
  var days_left = Math.round((then - now)/86400000);
  return days_left;
};
function add_cert_details(object, host) {
  output[host] = object;
};
function check_iterations() {
  if (iteration === host_list.length) {
    write_results();
    assert(true, iteration+' of '+host_list.length+' urls complete.');
  } else {
    console.log(iteration+' of '+host_list.length+' urls complete.');
    iteration++;
  }
};
function write_results() {
  fs.writeFile(directory+file_name, 'var run_date = \''+run_date+'\'; \nvar cert_info = '+JSON.stringify(output, null, 2), function(err) {
    // If the write errored out, notify
    if (err) { 
      console.log('Error writing file. \n'+stats);
    }
  })
};