var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ViZDoom-1",
    "page": "Readme",
    "title": "ViZDoom",
    "category": "section",
    "text": "(Image: Build Status)This package provides a wrapper around the ViZDoom and also some typical scenarios. Enjoy it!"
},

{
    "location": "#How-to-install-1",
    "page": "Readme",
    "title": "How to install",
    "category": "section",
    "text": "This package has only been tested on Ubuntu and Arch Linux with Julia 0.7/1.0 (and nightly). You need to install the necessary dependencies first (or, you can also check the packages in the .travis.yml file). Then just add this package as usual:(v0.7) pkg> add ViZDoom"
},

{
    "location": "#How-to-use-1",
    "page": "Readme",
    "title": "How to use",
    "category": "section",
    "text": "Most of the functions\' name are kept same with Python. So you\'ll find it pretty easy to port the Python example code into Julia. To easily access the state of a game, The following functions are added:get_screen_buffer(game). Array<UInt8, 1> is returned with size of width * height * channels. (You need to reshape this array to show it).\nget_depth_buffer(game).Array<UInt8, 1> is returned with size of width * height, which provides the depth info.\nget_label_buffer(game).Array<UInt8, 1> is returned with size of width * height, which provides the label info.\nget_automap_buffer(game).Array<UInt8, 1> is returned with size of width * height * channels, which provides the map info from the top view.Beyond that, some helper functions are also provided:get_scenario_path(\"basic.wad\") can be used to get the absolute path of basic.wad files.\nset_game(game; kw...). It\'s really verbose to set the game line by line. This function comes to simplify the process. The name of the argument should be the same with the original method without the set_ or add_ prefix. For example, we can use set(game; doom_map=\"map01, mode=PLAYER\") to replace the original methods likeViZDoom.set_doom_map(game, \"map01\"); ViZDoom.set_mode(game, \"PLAYER\"). You can checkout the detailed examples in the src/gamesfolder. Following are some special arguments:\navailable_buttons The original method name is add_available_button. Here you can set available_buttons=[MOVE_LEFT, MOVE_RIGHT, ATTACK].\nbasic_game(;kw...). A simple game with default config is returned. (More default configs are coming soon.)"
},

]}
