var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SecretSanta.jl-1",
    "page": "Readme",
    "title": "SecretSanta.jl",
    "category": "section",
    "text": "SecretSanta.jl is a Julia package for generating Secret Santa matchings and emailing participants."
},

{
    "location": "#Build-status-1",
    "page": "Readme",
    "title": "Build status",
    "category": "section",
    "text": "[Linux][ci-link] [OSX][ci-link] [Codecov][cov-link]\n![ci-badge] ![ci-badge] ![cov-badge][ci-badge]: https://travis-ci.com/tasseff/SecretSanta.jl.svg?branch=master \"Travis build status\" [ci-link]: https://travis-ci.com/tasseff/SecretSanta.jl \"Travis build status\" [cov-badge]: https://codecov.io/gh/tasseff/SecretSanta.jl/branch/master/graph/badge.svg [cov-link]: https://codecov.io/gh/tasseff/SecretSanta.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#JSON-Schema-1",
    "page": "Readme",
    "title": "JSON Schema",
    "category": "section",
    "text": "Setup is controlled via a JSON document, an example of which can be found here. First, email settings are controlled via the email block:\"email\": {\n    \"smtp_server\": \"smtp.example.com\",\n    \"smtp_port\": 465,\n    \"username\": \"user@example.com\",\n    \"password\": \"123456\",\n    \"subject\": \"Your Secret Santa recipient is {recipient}!\",\n    \"message\": \"Hello, {sender}! Your Secret Santa recipient is {recipient} ({recipient_email}). The maximum spending limit is $100.00. Merry Christmas!\"\n}When using the email option, the package assumes the user has access to an SMTP email server. If using Gmail, you will need to allow less secure apps to access your account. Within this JSON block, smtp_server and smtp_port are the address and port of the SMTP server; username and password are the credentials for the corresponding email account; and subject and message define the email template that will be used when emailing participants. Here, {recipient} and {recipient_email} correspond to the giftee, and {sender} corresponds to the gifter.The participants block defines information relevant to Secret Santa participants. Each participant is defined as an object with a name, email, and list of participants to exclude from the participant\'s possible matchings (e.g., husband and wife). Here is an example participant object: {\n    \"email\": \"olstnick@example.com\",\n    \"name\": \"Saint Nicholas\",\n    \"exclude\": [\n        \"lovedafather@example.com\"\n     ]\n}This is a participant entry for Saint Nicholas, whose email is olstnick@example.com. This email serves as his unique identifier. The exclude field will prevent him from gifting Arius, whose email is lovedafather@example.com. Other participant entries can be defined similarly."
},

{
    "location": "#Performing-a-Test-Run-1",
    "page": "Readme",
    "title": "Performing a Test Run",
    "category": "section",
    "text": "Performing a test run can be completed via the Julia interface, e.g.,using SecretSanta\nSecretSanta.run(\"/path/to/input.json\", test = true)"
},

{
    "location": "#Sending-the-Emails-1",
    "page": "Readme",
    "title": "Sending the Emails",
    "category": "section",
    "text": "Performing a live run can be completed via the Julia interface, e.g.,using SecretSanta\nSecretSanta.run(\"/path/to/input.json\", test = false)Note that matchings will be hidden from the user that executes the command."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SecretSanta.SecretSantaSecretSanta.SecretSantaModelSecretSanta.build_modelSecretSanta.evalSecretSanta.includeSecretSanta.runSecretSanta.send_emailSecretSanta.send_matchingsSecretSanta.solve_model"
},

]}
