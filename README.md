# tls-dashboard
A dashboard written in JavaScript &amp; HTML to check the remaining time before a TLS certificate expires. A combination of a Node script and an HTML/CSS/JS webpage to display the info. 

## Usage
### `get_cert_info.js`
This is the node script that establishes a connection to the sites that you want/need to monitor, and reads info about the peer certificate. It then parses the certificate, and dumps the relevant data into another .js file (`certificates.js`) for use on the status page. 

To setup the module, go to line 7, and switch out the contents of the array with all the hosts you're wanting to monitor:

    var host_list = [
      'www.google.com',
      'www.twitter.com',
      'www.github.com',
      'www.bitbucket.com',
      'news.ycombinator.com',
      'barnacl.es'
      ];



## Example
Take a look at a live example page [here on GitLab][1]. Screenshot is below. 

![Example dashboard](https://raw.githubusercontent.com/cmrunton/tls-dashboard/master/screenshot.png)  
![Example dashboard](https://raw.githubusercontent.com/cmrunton/tls-dashboard/master/screenshot_2.png)  

## TODO
1. Database integration?


[1]:https://craine.gitlab.io/tls-dashboard/