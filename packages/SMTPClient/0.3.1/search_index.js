var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SMTPClient-1",
    "page": "Readme",
    "title": "SMTPClient",
    "category": "section",
    "text": "(Image: Build Status)(Image: SMTPClient)A CURL based SMTP client with fairly low level API. It is useful for sending emails from within Julia code. Depends on LibCURL.jl.SMTPClient requires Julia 0.7 or higher."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"SMTPClient\")The libCurl native library must be available. It is usually installed with the base system in most Unix variants."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using SMTPClient\n\nopt = SendOptions(\n  isSSL = true,\n  username = \"you@gmail.com\",\n  passwd = \"yourgmailpassword\")\n#Provide the message body as RFC5322 within an IO\nbody = IOBuffer(\n  \"Date: Fri, 18 Oct 2013 21:44:29 +0100\\n\" *\n  \"From: You <you@gmail.com>\\n\" *\n  \"To: me@test.com\\n\" *\n  \"Subject: Julia Test\\n\" *\n  \"\\n\" *\n  \"Test Message\\n\")\nurl = \"smtps://smtp.gmail.com:465\"\nrcpt = [\"<me@test.com>\", \"<foo@test.com>\"]\nfrom = \"<you@gmail.com>\"\nresp = send(url, rcpt, from, body, opt)Sending from file IOStream is supported:\nbody = open(\"/path/to/mail\")"
},

{
    "location": "#Gmail-Notes-1",
    "page": "Readme",
    "title": "Gmail Notes",
    "category": "section",
    "text": "Due to the security policy of Gmail, you need to \"allow less secure apps into your account\":https://myaccount.google.com/lesssecureapps"
},

{
    "location": "#Function-Reference-1",
    "page": "Readme",
    "title": "Function Reference",
    "category": "section",
    "text": "send(url, to-addresses, from-address, message-body, options)Send an email.url should be of the form smtp://server:port or smtps://....\nto-address is a vector of String.\nfrom-address is a String. All addresses must be enclosed in angle brackets.\nmessage-body must be a RFC5322 formatted message body provided via an IO.\noptions is an object of type SendOptions. It contains authentication information, as well as the option of whether the server requires TLS.SendOptions(; isSSL = false, verbose = false, username = \"\", passwd = \"\")Options are passed via the SendOptions constructor that takes keyword arguments. The defaults are shown above.verbose: enable libcurl verbose mode or not.\nIf the username is blank, the passwd is not sent even if present.Note that no keepalive is implemented. New connections to the SMTP server are created for each message."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SMTPClient.@ce_curlSMTPClient.@ce_curlmSMTPClient.ConnContextSMTPClient.ReadDataSMTPClient.SMTPClientSMTPClient.SendOptionsSMTPClient.SendResponseSMTPClient.__init__SMTPClient.c_curl_read_cbSMTPClient.c_curl_write_cbSMTPClient.cleanup!SMTPClient.connectSMTPClient.curl_read_cbSMTPClient.curl_write_cbSMTPClient.do_sendSMTPClient.evalSMTPClient.getresponse!SMTPClient.includeSMTPClient.sendSMTPClient.setmail_from!SMTPClient.setmail_rcpt!SMTPClient.setopt!SMTPClient.writeptr"
},

]}
