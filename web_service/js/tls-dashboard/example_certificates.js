var run_date = 'Fri Jun 17 2016';
var cert_info = {
  "1": {
    "server": {
      "hostname":"http-only.runtondev.com"
    },
    "subject": {
      "org": "Unknown",
      "common_name": "The connection was refused by the remote server",
      "sans": "Unknown"
    },
    "issuer": {
      "org": "Unknown",
      "common_name": "ECONNREFUSED"
    },
    "info": {
      "days_left": "--",
      "sort_order": 100000,
      "background_class": "info"
    }
  },
  "2": {
    "server": {
      "hostname":"www.google.com"
    },
    "subject": {
      "org": "Google Inc",
      "common_name": "www.google.com",
      "sans": "DNS:www.google.com"
    },
    "issuer": {
      "org": "Google Inc",
      "common_name": "Google Internet Authority G2"
    },
    "info": {
      "valid_from": "2016-06-08T12:37:29.000Z",
      "valid_to": "2016-08-31T12:30:00.000Z",
      "days_left": 75,
      "sort_order": 75,
      "background_class": "success"
    }
  },
  "3": {
    "server": {
      "hostname":"expired.badssl.com"
    },
    "subject": {
      "org": "Unknown",
      "common_name": "The certificate has expired",
      "sans": "Unknown"
    },
    "issuer": {
      "org": "Unknown",
      "common_name": "CERT_HAS_EXPIRED"
    },
    "info": {
      "days_left": "0",
      "sort_order": 0,
      "background_class": "danger"
    }
  },
  "4": {
    "server": {
      "hostname":"incomplete-chain.badssl.com"
    },
    "subject": {
      "org": "Unknown",
      "common_name": "The server provided a self-signed certificate or the provided certificate chain was incomplete",
      "sans": "Unknown"
    },
    "issuer": {
      "org": "Unknown",
      "common_name": "UNABLE_TO_VERIFY_LEAF_SIGNATURE"
    },
    "info": {
      "days_left": "--",
      "sort_order": 100000,
      "background_class": "info"
    }
  },
  "5": {
    "server": {
      "hostname":"wrong.host.badssl.com"
    },
    "subject": {
      "org": "Unknown",
      "common_name": "There was mismatch between the requested hostname and the certificate presented by the server",
      "sans": "Unknown"
    },
    "issuer": {
      "org": "Unknown",
      "common_name": "HOSTNAME_MISMATCH"
    },
    "info": {
      "days_left": "--",
      "sort_order": 100000,
      "background_class": "info"
    }
  },
  "6": {
    "server": {
      "hostname":"self-signed.badssl.com"
    },
    "subject": {
      "org": "Unknown",
      "common_name": "The server provided a self-signed certificate or the provided certificate chain was incomplete",
      "sans": "Unknown"
    },
    "issuer": {
      "org": "Unknown",
      "common_name": "UNABLE_TO_VERIFY_LEAF_SIGNATURE"
    },
    "info": {
      "days_left": "--",
      "sort_order": 100000,
      "background_class": "info"
    }
  },
  "7": {
    "server": {
      "hostname":"sha256.badssl.com"
    },
    "subject": {
      "common_name": "*.badssl.com",
      "sans": "DNS:*.badssl.com, DNS:badssl.com"
    },
    "issuer": {
      "org": "COMODO CA Limited",
      "common_name": "COMODO RSA Domain Validation Secure Server CA"
    },
    "info": {
      "valid_from": "2015-04-09T00:00:00.000Z",
      "valid_to": "2016-07-07T23:59:59.000Z",
      "days_left": 20,
      "sort_order": 20,
      "background_class": "danger"
    }
  },
  "8": {
    "server": {
      "hostname":"www.twitter.com"
    },
    "subject": {
      "org": "Twitter, Inc.",
      "common_name": "twitter.com",
      "sans": "DNS:twitter.com, DNS:www.twitter.com"
    },
    "issuer": {
      "org": "DigiCert Inc",
      "common_name": "DigiCert SHA2 Extended Validation Server CA"
    },
    "info": {
      "valid_from": "2016-03-09T00:00:00.000Z",
      "valid_to": "2018-03-14T12:00:00.000Z",
      "days_left": 635,
      "sort_order": 635,
      "background_class": "success"
    }
  },
  "9": {
    "server": {
      "hostname":"nonexistent.runtondev.com"
    },
    "subject": {
      "org": "Unknown",
      "common_name": "The connection was reset by the server or timed out",
      "sans": "Unknown"
    },
    "issuer": {
      "org": "Unknown",
      "common_name": "ECONNRESET"
    },
    "info": {
      "days_left": "--",
      "sort_order": 100000,
      "background_class": "info"
    }
  },
  "10": {
    "server": {
      "hostname":"warning.runtondev.com"
    },
    "subject": {
      "common_name": "warning.runtondev.com",
      "sans": ""
    },
    "issuer": {
      "org": "Madeup CA",
      "common_name": "CA that doesn't exist"
    },
    "info": {
      "valid_from": "2015-04-09T00:00:00.000Z",
      "valid_to": "2016-07-07T23:59:59.000Z",
      "days_left": 45,
      "sort_order": 45,
      "background_class": "warning"
    }
  },
  "11": {
    "server": {
      "hostname":"danger.runtondev.com"
    },
    "subject": {
      "common_name": "danger.runtondev.com",
      "sans": ""
    },
    "issuer": {
      "org": "Madeup CA",
      "common_name": "CA that doesn't exist"
    },
    "info": {
      "valid_from": "2015-04-09T00:00:00.000Z",
      "valid_to": "2016-07-07T23:59:59.000Z",
      "days_left": 1,
      "sort_order": 1,
      "background_class": "danger"
    }
  },
}
