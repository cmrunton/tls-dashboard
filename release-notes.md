# Release notes

# 2.0.0
**Aug 26, 2016**
* Added Typeahead search box to narrow the selection to a single hostnames
* Added filtering checkboxes to show/hide specific types of responses
* Added a dark theme for people who like that (it's default now to)
* No longer tracking the `node_app/config.js`, `node_app/monitored_hosts.js`, or `web_service/js/tls-dashboard/certificates.js` files in Git. This prevents your files from being overwritten when pulling changes from the origin
* `node_app/monitored_hosts.js` now takes an array of objects instead of an array of strings. Each object must have a `hostname` parameter defined, and optionally may have a `port` parameter defined
* Updated jQuery to version 3.1.0
* Probably other stuff that I forgot to include.


# 1.0.0
Initial release
