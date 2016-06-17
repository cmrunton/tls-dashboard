
# Expired Certificate
## Object keys
    [ 'code' ]
    e.code => CERT_HAS_EXPIRED
## Console output
    { Error: certificate has expired
        at Error (native)
        at TLSSocket.<anonymous> (_tls_wrap.js:1055:38)
        at emitNone (events.js:86:13)
        at TLSSocket.emit (events.js:185:7)
        at TLSSocket._finishInit (_tls_wrap.js:580:8)
        at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:412:38) code: 'CERT_HAS_EXPIRED' }

# Host Timeout
## Object keys
    [ 'code' ]
    e.code => ECONNRESET
## Console output
    { Error: socket hang up
        at createHangUpError (_http_client.js:250:15)
        at TLSSocket.socketCloseListener (_http_client.js:282:23)
        at emitOne (events.js:101:20)
        at TLSSocket.emit (events.js:188:7)
        at TCP._handle.close [as _onclose] (net.js:492:12) code: 'ECONNRESET' }

# Connection refused
## Object keys
    [ 'code', 'errno', 'syscall', 'address', 'port' ]
    e.code => ECONNREFUSED
## Console output
    { Error: connect ECONNREFUSED 10.7.29.195:443
        at Object.exports._errnoException (util.js:949:11)
        at exports._exceptionWithHostPort (util.js:972:20)
        at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1080:14)
      code: 'ECONNREFUSED',
      errno: 'ECONNREFUSED',
      syscall: 'connect',
      address: '10.7.29.195',
      port: 443 }

# Self-signed Certificate
## Object keys
    [ 'code' ]
    e.code => UNABLE_TO_VERIFY_LEAF_SIGNATURE
## Console output
    { Error: unable to verify the first certificate
        at Error (native)
        at TLSSocket.<anonymous> (_tls_wrap.js:1055:38)
        at emitNone (events.js:86:13)
        at TLSSocket.emit (events.js:185:7)
        at TLSSocket._finishInit (_tls_wrap.js:580:8)
        at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:412:38) code: 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' }

# Incomplete Certificate Chain
## Object Keys
    [ 'code' ]
    e.code => UNABLE_TO_VERIFY_LEAF_SIGNATURE
## Console output
    { Error: unable to verify the first certificate
        at Error (native)
        at TLSSocket.<anonymous> (_tls_wrap.js:1055:38)
        at emitNone (events.js:86:13)
        at TLSSocket.emit (events.js:185:7)
        at TLSSocket._finishInit (_tls_wrap.js:580:8)
        at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:412:38) code: 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' }


# Hostname Mismatch
## Object keys
    [ 'reason', 'host', 'cert' ]
    e.reason => Host: wrong.host.badssl.com. is not in the cert's altnames: DNS:*.badssl.com, DNS:badssl.com
## Console output
    { Error: Hostname/IP doesn't match certificate's altnames: "Host: wrong.host.badssl.com. is not in the cert's altnames: DNS:*.badssl.com, DNS:badssl.com"
        at Object.checkServerIdentity (tls.js:203:15)
        at TLSSocket.<anonymous> (_tls_wrap.js:1061:29)
        at emitNone (events.js:86:13)
        at TLSSocket.emit (events.js:185:7)
        at TLSSocket._finishInit (_tls_wrap.js:580:8)
        at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:412:38)
      reason: 'Host: wrong.host.badssl.com. is not in the cert\'s altnames: DNS:*.badssl.com, DNS:badssl.com',
      host: 'wrong.host.badssl.com.',
      cert: 
       { subject: { OU: [Object], CN: '*.badssl.com' },
         issuer: 
          { C: 'GB',
            ST: 'Greater Manchester',
            L: 'Salford',
            O: 'COMODO CA Limited',
            CN: 'COMODO RSA Domain Validation Secure Server CA' },
         subjectaltname: 'DNS:*.badssl.com, DNS:badssl.com',
         infoAccess: { 'CA Issuers - URI': [Object], 'OCSP - URI': [Object] },
         modulus: 'C204ECF88CEE04C2B3D850D57058CC9318EB5CA86849B022B5F9959EB12B2C763E6CC04B604C4CEAB2B4C00F80B6B0F972C98602F95C415D132B7F71C44BBCE9942E5037A6671C618CF64142C546D31687279F74EB0A9D11522621736C844C7955E4D16BE8063D481552ADB328DBAAFF6EFF60954A776B39F124D131B6DD4DC0C4FC53B96D42ADB57CFEAEF515D23348E72271C7C2147A6C28EA374ADFEA6CB572B47E5AA216DC69B15744DB0A12ABDEC30F47745C4122E19AF91B93E6AD2206292EB1BA491C0C279EA3FB8BF7407200AC9208D98C5784538105CBE6FE6B5498402785C710BB7370EF6918410745557CF9643F3D2CC3A97CEB931A4C86D1CA85',
         exponent: '0x10001',
         valid_from: 'Apr  9 00:00:00 2015 GMT',
         valid_to: 'Jul  7 23:59:59 2016 GMT',
         fingerprint: 'C8:67:8E:DB:FD:BB:30:B5:3F:2D:7B:F9:66:B8:14:C6:2E:95:92:CE',
         ext_key_usage: [ '1.3.6.1.5.5.7.3.1', '1.3.6.1.5.5.7.3.2' ],
         serialNumber: '2FEB1825187C1A5086407B44E5B785A5',
         raw: <Buffer 30 82 05 4b 30 82 04 33 a0 03 02 01 02 02 10 2f eb 18 25 18 7c 1a 50 86 40 7b 44 e5 b7 85 a5 30 0d 06 09 2a 86 48 86 f7 0d 01 01 0b 05 00 30 81 90 31 ... > } }

