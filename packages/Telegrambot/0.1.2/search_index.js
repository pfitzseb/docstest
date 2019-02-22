var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Telegrambot.jl-1",
    "page": "Readme",
    "title": "Telegrambot.jl",
    "category": "section",
    "text": "A julia wrapper for telegram api (mostly replying commands consists text).Build Status\n(Image: Build Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and can be installed with Pkg.add, or in REPL by pressing ] add Telegrambot.julia> Pkg.add(\"Telegrambot\")"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "For guide on telegram bot creation and api, check this out.using Telegrambot\nbotApi = \"bot<your_api_key>\"\n\nwelcomeMsg(incoming::AbstractString) = \"Welcome to my awesome bot\"\n\necho(incoming::AbstractString) = incoming\n\ntxtCmds = Dict()\ntxtCmds[\"repeat_msg\"] = echo #this will respond to \'/repeat_msg <any thing>\'\ntxtCmds[\"start\"] = welcomeMsg # this will respond to \'/start\'\n\ninlineOpts = Dict() #Title, result pair\ninlineOpts[\"Make Uppercase\"] = uppercase #this will generate an pop-up named Make Uppercase and upon tapping return uppercase(<user_input>)\n\n#uppercase is a function that takes a string and return the uppercase version of that string\n\nstartBot(botApi; textHandle = txtCmds, inlineQueryHandle=inlineOpts)"
},

{
    "location": "#To-Do-1",
    "page": "Readme",
    "title": "To-Do",
    "category": "section",
    "text": "[x] Add Inline query respond \n[ ] Add function to quote reply to a message\n[ ] Add function to reply with a file/image\n[ ] Add function to serve as a IRC-Tg bot"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Telegrambot.ArticleListtoJSONTelegrambot.InlineQueryResultArticleTelegrambot.TelegrambotTelegrambot.answerInlineQueryTelegrambot.evalTelegrambot.getUpdatesTelegrambot.includeTelegrambot.sendTextTelegrambot.startBot"
},

]}
