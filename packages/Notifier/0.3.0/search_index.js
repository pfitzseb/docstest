var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Notifier-1",
    "page": "Readme",
    "title": "Notifier",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package is notification tools for Julialang.using Notifier\nnotify(\"Task completed\")(Image: Screenshot of a Notification)"
},

{
    "location": "#Features:-1",
    "page": "Readme",
    "title": "Features:",
    "category": "section",
    "text": "Linux and macOS\npopup notification (desktop notification)\nsound notification\nsay notification (Read a given massage aloud)\nemail notification\ncount up and count down timer\nWindows (Experimental)\npopup notification (desktop notification)\nsound notification\nsay notification (Read a given massage aloud)\ncount up and count down timer"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Notifier\")"
},

{
    "location": "#Setup-for-Linux-user-1",
    "page": "Readme",
    "title": "Setup for Linux user",
    "category": "section",
    "text": "Before using Notifier.jl, you need to install following softwares in your Linux system.libnotify for a desktop notification\nmail for an e-mail notification\naplay (Advanced Linux Sound Architecture) for a sound notification\nespeak for reading a given massage aloud$ sudo apt install libnotify-bin alsa-utils espeak mailutils heirloom-mailx bsd-mailxThis package uses mail command to notify by e-mail. You may need some settings in advance. If following command works correctly, you don\'t need further setting.$ echo test | mail -s foo yourmail@example.com"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#popup-notification-1",
    "page": "Readme",
    "title": "popup notification",
    "category": "section",
    "text": "using Notifier\nnotify(\"Task completed\")\n# defalut title is \"Julia\".\n# You can change the title by title option.\nnotify(\"Task completed\", title=\"foofoo\")\nnotify(\"Task completed\", sound=true) # with sound\nnotify(\"Task completed\", sound=\"foo.wav\") # Specify a sound file (for Linux and Windows)Linux   (Image: Screenshot of a Notification)macOS   (Image: Screenshot of a Notification)Windows   (Image: Screenshot of a Notification)"
},

{
    "location": "#sound-and-say-notification-1",
    "page": "Readme",
    "title": "sound and say notification",
    "category": "section",
    "text": "alarm() # only sound. You can specify a sound file, alarm(sound=\"foo.wav\")\nsay(\"Finish calculation!\") # Read aloud"
},

{
    "location": "#e-mail-notification-1",
    "page": "Readme",
    "title": "e-mail notification",
    "category": "section",
    "text": "email(\"message\", To=\"foo@example.com\") # default subject is set by date.\nemail(\"message\", subject=\"result\", To=\"foo@example.com\")If you use email function frequently, I recommend you to register your email address by register_email function.julia> register_email()\nType your desired recipient e-mail address to receive a notification.\ne-mail: foo@example.com\n\nRecipient e-mail address is saved at /path/to/.julia/v0.6/Notifier/email/address.txt.\nIf you want to change the address, modify /path/to/.julia/v0.6/Notifier/email/address.txt directly or run register_email() againAfter you registered, you don\'t need to specify e-mail address.email(\"message\")"
},

{
    "location": "#Timer-1",
    "page": "Readme",
    "title": "Timer",
    "category": "section",
    "text": "When the specified time limit has been reached, notify by sound.h,m,s = 1,2,3\ncountup(h,m,s) # Hour, Minute, Second\ncountdown(h,m,s)"
},

{
    "location": "#Acknowledgement-1",
    "page": "Readme",
    "title": "Acknowledgement",
    "category": "section",
    "text": "Inspired by OSXNotifier.jl."
},

{
    "location": "autodocs/#Notifier.alarm",
    "page": "Docstrings",
    "title": "Notifier.alarm",
    "category": "function",
    "text": "Notifier.alarm(;sound=\"default.wav\")\n\nNotify by sound. If you choose a specific sound WAV file, you can play it instead of the default sound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Notifier.countdown",
    "page": "Docstrings",
    "title": "Notifier.countdown",
    "category": "function",
    "text": "countdown(hour::T, minute::T, second::T) where T <: Integer\n\ncountdown(t::Time)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Notifier.countup",
    "page": "Docstrings",
    "title": "Notifier.countup",
    "category": "function",
    "text": "countup(hour::T, min::T, sec::T) where T <: Integer\n\ncountup(t::Time)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Notifier.email",
    "page": "Docstrings",
    "title": "Notifier.email",
    "category": "function",
    "text": "Notifier.email(message; subject, To)\n\nSend email to specific email address.\n\nArguments\n\nTo::AbstractString: recipient email adress.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.notify",
    "page": "Docstrings",
    "title": "Base.notify",
    "category": "function",
    "text": "\n\nNotifier.notify(message; title=\"Julia\", sound=false, time=4, logo)\n\nNotify by desktop notification.\n\nArguments\n\nsound::Union{Bool, AbstractString}: Play default sound or specific sound.\ntime::Real: display time.\nlogo: Default is Julia logo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Notifier.register_email",
    "page": "Docstrings",
    "title": "Notifier.register_email",
    "category": "function",
    "text": "Notifier.register_email()\n\nRegister a recipient e-mail address.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Notifier.s2hms",
    "page": "Docstrings",
    "title": "Notifier.s2hms",
    "category": "function",
    "text": "s2hms(tsec::Int)\n\nConvert seconds to (hour, minute, second)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Notifier.say",
    "page": "Docstrings",
    "title": "Notifier.say",
    "category": "function",
    "text": "Notifier.say(message::AbstractString)\n\nRead a given message aloud.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Notifier.NotifierNotifier.alarmNotifier.countdownNotifier.countupNotifier.emailNotifier.evalNotifier.includeNotifier.notifyNotifier.print_timeNotifier.register_emailNotifier.s2hmsNotifier.sayNotifier.update_printtimeNotifier.updatetime"
},

]}
