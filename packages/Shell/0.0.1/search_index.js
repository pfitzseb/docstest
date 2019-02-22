var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Shell-1",
    "page": "Readme",
    "title": "Shell",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)WARN:The implementation basically put the string into a script file and run that file. So it is error prone because you have to deal with all the subtle stuff like escaping spaces, quotes, etc. This tool is good for running simple things like ls, echo, etc. But do not use this in your serious scripts unless you have double checked its correctness.Now you can run string commands!Supports cmd, powershell and wsl in Windows!"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.clone(\"https://github.com/innerlee/Shell.jl\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using Shell\n\njulia> Shell.run(raw\"echo $SHELL\", capture=true)\n\"/bin/zsh\"\n\njulia> Shell.run(raw\"for i in dust junk; do echo $i; done\")\ndust\njunk\n\njulia> files = [\"temp file 1\", \"temp file 2\"]\n2-element Array{String,1}:\n \"temp file 1\"\n \"temp file 2\"\n\njulia> filelist = esc`$files.txt`\n\"\'temp file 1.txt\' \'temp file 2.txt\'\"\n\njulia> Shell.run(\"touch $filelist\")\n\njulia> Shell.run(\"touch $(esc`$files.$[\"txt\",\"md\"]`)\", dryrun=true)\ntouch \'temp file 1.txt\' \'temp file 1.md\' \'temp file 2.txt\' \'temp file 2.md\'\n\njulia> Shell.run(\"ls > \'temp file 0.txt\'\")\n\njulia> Shell.run(\"cat \'temp file 0.txt\' | grep temp\")\ntemp file 0.txt\ntemp file 1.txt\ntemp file 2.txt\n\njulia> Shell.run(\"rm \'temp file\'*\")"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "use escyour string to help you escape (not working for cmd in Windows).\nuse dryrun=true to check the command to be run without actually running.\nChange default shell by calling Shell.setshell(\"powershell\").\nThe output chomps by default. Change this by calling Shell.setchomp(false).\nIn Windows, the code page may be changed to 65001 after running."
},

{
    "location": "#More-Notes-1",
    "page": "Readme",
    "title": "More Notes",
    "category": "section",
    "text": "See the discussions here. (You can use escyour argmuments to take advantage of the built-in escaping of Cmd objects, though.) A \"better\" way is to learn the Cmd object and perhaps the Glob.jl package as pointed out here."
},

{
    "location": "autodocs/#Shell.@esc_cmd",
    "page": "Docstrings",
    "title": "Shell.@esc_cmd",
    "category": "macro",
    "text": "@esc_str -> String\n\nHelp you escape special characters for the shell.\n\nExamples\n\njulia> files = [\"temp file 1\", \"temp file 2\"]\n2-element Array{String,1}:\n \"temp file 1\"\n \"temp file 2\"\n\njulia> filelist = esc`$files.txt`\n\"\'temp file 1.txt\' \'temp file 2.txt\'\"\n\njulia> Shell.run(\"touch $filelist\")\n\njulia> Shell.run(\"rm $filelist\")\n\nBe careful, the escape treat space separated terms individually. Put them into a varible to get properly escaped.\n\nExamples\n\njulia> esc`temp file 0.txt`\n\"temp file 0.txt\"\n\njulia> file = \"temp file 0.txt\"\n\"temp file 0.txt\"\n\njulia> esc`$file`\n\"\'temp file 0.txt\'\"\n\nNot working for cmd in Windows because it treats single quotes differently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Shell.run",
    "page": "Docstrings",
    "title": "Shell.run",
    "category": "function",
    "text": "run(cmd::AbstractString; shell=SHELL, capture=CAPTURE, chomp=CHOMP,\n    dryrun=DRYRUN, source=SOURCE)\n\nRun your command string in shell.\n\nExamples\n\njulia> using Shell\n\njulia> Shell.run(raw\"echo $SHELL\", capture=true)\n\"/bin/zsh\"\n\njulia> Shell.run(raw\"for i in bu fan; do echo $i; done\")\nbu\nfan\n\njulia> files = [\"temp file 1\", \"temp file 2\"]\n2-element Array{String,1}:\n \"temp file 1\"\n \"temp file 2\"\n\njulia> filelist = esc`$files.txt`\n\"\'temp file 1.txt\' \'temp file 2.txt\'\"\n\njulia> Shell.run(\"touch $filelist\")\n\njulia> Shell.run(\"ls > \'temp file 0.txt\'\")\n\njulia> Shell.run(\"cat \'temp file 0.txt\' | grep temp\")\ntemp file 0.txt\ntemp file 1.txt\ntemp file 2.txt\n\njulia> Shell.run(\"rm \'temp file\'*\")\n\nYou should properly escape all special characters manually.\nuse dryrun=true to check the command to be run without actually running.\nTo capture output, set capture=true.\nTo avoid escaping $ everytime, you can use raw string, like raw\"echo $PATH\"\nYou can change the default shell (zsh in linux and cmd in windows) using setshell(\"other_shell\").\nIn Windows, shell should be cmd or powershell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Shell.setchomp",
    "page": "Docstrings",
    "title": "Shell.setchomp",
    "category": "function",
    "text": "setchomp(chomp::Bool)\n\nSet whether chomp the output (default is true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Shell.setiscapture",
    "page": "Docstrings",
    "title": "Shell.setiscapture",
    "category": "function",
    "text": "setiscapture(capture::Bool)\n\nWhether capture the rc file (e.g. .zshrc) before run script (default is true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Shell.setisdryrun",
    "page": "Docstrings",
    "title": "Shell.setisdryrun",
    "category": "function",
    "text": "setisdryrun(dryrun::Bool)\n\nWhether dryrun the rc file (e.g. .zshrc) before run script (default is true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Shell.setissource",
    "page": "Docstrings",
    "title": "Shell.setissource",
    "category": "function",
    "text": "setissource(source::Bool)\n\nWhether source the rc file (e.g. .zshrc) before run script (default is true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Shell.setshell",
    "page": "Docstrings",
    "title": "Shell.setshell",
    "category": "function",
    "text": "setshell(shell::AbstractString)\n\nSpecify which shell to use (Windows defaults to cmd, and zsh otherwise).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Shell.@esc_cmdShell.CAPTUREShell.CHOMPShell.DRYRUNShell.SHELLShell.SOURCEShell.ShellShell.evalShell.includeShell.runShell.setchompShell.setiscaptureShell.setisdryrunShell.setissourceShell.setshellShell.shell_source"
},

]}
