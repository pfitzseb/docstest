var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PiCraft-1",
    "page": "Readme",
    "title": "PiCraft",
    "category": "section",
    "text": ""
},

{
    "location": "#Control-a-Minecraft-world-on-the-Minecraft:-Pi-or-Java-edition-from-Julia-1",
    "page": "Readme",
    "title": "Control a Minecraft world on the Minecraft: Pi or Java edition from Julia",
    "category": "section",
    "text": "PiCraft is a Julia package which allows control over the Minecraft World using code. It is compatible with the Minecraft: Pi Edition and the Java Edition with the help of RaspberryJamMod or RaspberryJuice.With this package you will be able to :Write scripts to teleport and walk over Water and Lava.\nConstruct multi-storey skyscrapers within seconds.\nDraw fractals and shapes using a 3-D turtle.\nImport and export .schematic models without external software.  "
},

{
    "location": "#Installation-and-Usage-1",
    "page": "Readme",
    "title": "Installation and Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Get-Minecraft-1",
    "page": "Readme",
    "title": "Get Minecraft",
    "category": "section",
    "text": "The Minecraft: Pi edition is pre-installed on all Rasbian since September 2014. Launch it by navigating to Menu > Games or typing minecraft-pi in the terminal. However, if you are running an older version of Raspbian get it here.\nGet the Minecraft: Java edition(MacOS, Linux and Windows) here."
},

{
    "location": "#Get-RaspberryJuice-or-RaspberryJamMod-(for-Minecraft:-Java-edition)-1",
    "page": "Readme",
    "title": "Get RaspberryJuice or RaspberryJamMod (for Minecraft: Java edition)",
    "category": "section",
    "text": "Officially the ability to communicate with the Minecraft world is only available for the Minecraft: Pi edition. To get this to work on the Java edition we need to install a Mod.\"RaspberryJamMod\" is a Forge Mod, if you wish to use this along with other Forge mods then this is recommended. Installation instructions are available here.\n\"RaspberryJuice\" is a Bukkit server plugin, recommended if you wish to work on a Bukkit Minecraft server. Get it here."
},

{
    "location": "#Get-Julia-1",
    "page": "Readme",
    "title": "Get Julia",
    "category": "section",
    "text": "Download the appropriate Julia version for your system from here."
},

{
    "location": "#Install-the-PiCraft-package-1",
    "page": "Readme",
    "title": "Install the PiCraft package",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"https://github.com/JuliaBerry/PiCraft.jl\")"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation for this package can be accessed at https://juliaberry.github.io/PiCraft.jl/"
},

{
    "location": "#Quick-Start-Guide-1",
    "page": "Readme",
    "title": "Quick Start Guide",
    "category": "section",
    "text": "Load the PiCraft package on the Julia console:using PiCraftOn load, the library will attempt to connect to a running Minecraft world on localhost. If Minecraft is not running, an error message will be printed. Subsequently, once Minecraft has been started,  a connection can be forced by calling connectToWorld().A 3-D coordinate system is used to describe the Minecraft world. Every position in the Minecraft World can be described with the help of 3 numbers. The X, Y and Z coordinates. These coordinates can be viewed by opening the Debug screen using F3.(Image: debug-screen)"
},

{
    "location": "#Player-1",
    "page": "Readme",
    "title": "Player",
    "category": "section",
    "text": "You can find and set your player\'s location:Find Player position: getPos()\nReturns a Tuple{Float64, Float64, Float64} which contains the player\'s current coordinates.\nSet Player position: setPos(pos::Tuple{Float64, Float64, Float64})\nTeleports the player to the specified coordinates.For example : setPos(getPos .+ (0, 10, 0)) will teleport you 10m above you current position."
},

{
    "location": "#Blocks-1",
    "page": "Readme",
    "title": "Blocks",
    "category": "section",
    "text": "Blocks are the heart of Minecraft. The package provides the ability to modify blocks at specified coordinates. Block is an immutable datatype defined in src/blocks.jl.struct Block\n    id::Int\n    data::Int\nendThe id defines the type of block (like cobblestone, wool, wood,.etc) and the data attribute defines additional characteristics of the block, on default every block has it data set to 0. For example, Wool\'s block id is 35, Block(35,0) refers to a block of white wool. Different wool colors can be accessed by changing the data attribute. Red Wool is Block(35, 14), Pink Wool is Block(35,6) and so on. A complete reference can be found here in the documentation.Place Block: setBlock(Tuple{Int, Int, Int}, block::Block)\nPlace the specified Block at the specified coordinates.\nPlace Blocks: setBlocks(p1::Tuple{Real, Real, Real}, p2::Tuple{Real, Real, Real}, block::Block)\nSet an entire region to the specified block type defined by corners.\nGet Block information: getBlock(Tuple{Int,Int,Int})\nReturns the block present at the specified coordinates.While the getBlock and setBlock functions will accept Float64 as arguments these will be rounded and set to Int as a block cannot be placed on non-integer coordinates."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "\ngetBlock(Tuple{Int,Int,Int}) # retrive a Block object at the specified coordinates\nsetBlock(Tuple{Int,Int,Int}, block::Picraft.Block) #set the specified Block to these coordinates\nsetBlocks(pos::Tuple{UnitRange{Int}, UnitRange{Int}, UnitRange{Int}}, block::PiCraft.Block) #set a block to an entire region\ngetHeight(x::Int, z::Int) #Get the height of the world at the specified `x` and `z` coordinates.\ngetPlayerIds() # Return an array of all Player Id\'s connected to the server.\nsetting(name, status) #Change a setting\nsave() #save the current world state\nrestore() #restore the world to the previously saved world state\npost(s::string) #send string s to chat\ngetTile() # return a tuple of integers (x, y, z),  for the tile on which the player is placed\nsetTile(pos::Tuple{Real, Real, Real}) # move the player to the tile specified by the integer coordinates\ngetPos() # return a tuple of floats (x, y, z) with the player\'s position\nsetPos(pos::Tuple{Real, Real, Real}) # move the player to the specified coordinates\npollBlockHits() #Return an Array of hit events. ((x,y,z), faceId, entityId)"
},

{
    "location": "autodocs/#PiCraft.buildModel",
    "page": "Docstrings",
    "title": "PiCraft.buildModel",
    "category": "function",
    "text": "buildModel(m::Array{Block, 3}, pos::Tuple{Real, Real, Real})\n\nBuild a model from a 3-D block array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.clearEvents",
    "page": "Docstrings",
    "title": "PiCraft.clearEvents",
    "category": "function",
    "text": "Clear all events in the buffer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.connectToWorld",
    "page": "Docstrings",
    "title": "PiCraft.connectToWorld",
    "category": "function",
    "text": "connectToWorld(address = \"localhost\", port = 4711)\n\nConnect to the Minecraft API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.copyModel",
    "page": "Docstrings",
    "title": "PiCraft.copyModel",
    "category": "function",
    "text": "copyModel(p1::Tuple{Real, Real, Real}, p2::Tuple{Real, Real, Real})\n\nCopy the Blocks between the diagonally opposite blocks and store in a 3-D Block Array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.cutModel",
    "page": "Docstrings",
    "title": "PiCraft.cutModel",
    "category": "function",
    "text": "cutModel(p1::Tuple{Real, Real, Real}, p2::Tuple{Real, Real, Real}, block::Block)\n\nCopy blocks between diagonally opposite blocks and fill the space with block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.drawLine",
    "page": "Docstrings",
    "title": "PiCraft.drawLine",
    "category": "function",
    "text": "drawLine(p1::Tuple{Real,Real,Real}, p2::Tuple{Real,Real,Real}, block::PiCraft.Block = PiCraft.GOLD_BLOCK, width::Real = 1)\n\nDraw a line from point p1 to point p2 using block. block is gold block by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.flip",
    "page": "Docstrings",
    "title": "PiCraft.flip",
    "category": "function",
    "text": "flip(A::Array{Block, 3}, dim::Symbol)\n\nFlip a 3-D Block Array in a particular dimension. Dimensions are x, y and z\n\nExample\n\njulia> A = reshape(Block.(collect(1:8)), (2,2,2))\n2×2×2 Array{PiCraft.Block,3}:\n[:, :, 1] =\n PiCraft.Block(1, 0)  PiCraft.Block(3, 0)\n PiCraft.Block(2, 0)  PiCraft.Block(4, 0)\n\n[:, :, 2] =\n PiCraft.Block(5, 0)  PiCraft.Block(7, 0)\n PiCraft.Block(6, 0)  PiCraft.Block(8, 0)\n\njulia> flip(A, :z)\n2×2×2 Array{PiCraft.Block,3}:\n[:, :, 1] =\n PiCraft.Block(5, 0)  PiCraft.Block(7, 0)\n PiCraft.Block(6, 0)  PiCraft.Block(8, 0)\n\n[:, :, 2] =\n PiCraft.Block(1, 0)  PiCraft.Block(3, 0)\n PiCraft.Block(2, 0)  PiCraft.Block(4, 0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.getBlock",
    "page": "Docstrings",
    "title": "PiCraft.getBlock",
    "category": "function",
    "text": "getBlock(pos::Tuple{Real, Real, Real})\n\nGet the Block information from the specified coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.getHeight",
    "page": "Docstrings",
    "title": "PiCraft.getHeight",
    "category": "function",
    "text": "getHeight(x::Int, z::Int)\n\nGet the height of the world at the specified x and z coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.getPlayerIds",
    "page": "Docstrings",
    "title": "PiCraft.getPlayerIds",
    "category": "function",
    "text": "getPlayerIds()\n\nReturn an array of all Player Id\'s connected to the server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.getPos",
    "page": "Docstrings",
    "title": "PiCraft.getPos",
    "category": "function",
    "text": "getPos()\n\nReturn the player\'s coordinates.\n\n\n\n\n\ngetPos(entityId::Int)\n\nGet the position of the specified entity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.getTile",
    "page": "Docstrings",
    "title": "PiCraft.getTile",
    "category": "function",
    "text": "getTile()\n\nReturn the tile\'s coordinates on which the player is standing.\n\n\n\n\n\ngetTile(entityId::Int)\n\nGet the tile on which the specified entity is.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.importSchematic",
    "page": "Docstrings",
    "title": "PiCraft.importSchematic",
    "category": "function",
    "text": "importSchematic(filename::AbstractString)\n\nReads a .schematic file and return a 3 - D matrix of type Array{Block, 3}(model) which represents the schematic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.mc_send",
    "page": "Docstrings",
    "title": "PiCraft.mc_send",
    "category": "function",
    "text": "mc_send(cmd, output=true)\n\nCommunicate with the Minecraft API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.move",
    "page": "Docstrings",
    "title": "PiCraft.move",
    "category": "function",
    "text": "move(t::turtle, s::Int)\n\nMove the turtle t forward s units.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.parseNBT",
    "page": "Docstrings",
    "title": "PiCraft.parseNBT",
    "category": "function",
    "text": "parseNBT(filename::AbstractString, ostream::IO = stdout)\n\nParse a Named Binary tag file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.pitch",
    "page": "Docstrings",
    "title": "PiCraft.pitch",
    "category": "function",
    "text": "pitch(t::turtle, θ::Real)\n\nPitch the turtle t by θ degrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.pollBlockHits",
    "page": "Docstrings",
    "title": "PiCraft.pollBlockHits",
    "category": "function",
    "text": "pollBlockHits()\n\nReturns an array of all the events which have occurred since the last time the function was called. Each event is described with a tuple ((x, y, z), face, entityId). x, y and z are the coordinates of the block. face is the block\'s face number which was hit and entityId identifies the player who hit the block using a sword.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.post",
    "page": "Docstrings",
    "title": "PiCraft.post",
    "category": "function",
    "text": "post(m...)\n\nPost a message to chat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.readTAG",
    "page": "Docstrings",
    "title": "PiCraft.readTAG",
    "category": "function",
    "text": "readTag(stream::IO, tagId = -1)\n\nRead a single Binary Tag from stream. tagId is the type of nameless Tag tagId is -1 for Named Binary Tag.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.restoreWorld",
    "page": "Docstrings",
    "title": "PiCraft.restoreWorld",
    "category": "function",
    "text": "Restore the world to the previous savepoint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.roll",
    "page": "Docstrings",
    "title": "PiCraft.roll",
    "category": "function",
    "text": "roll(t::turtle, θ::Real)\n\nRoll the turtle t by θ degrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.rotate",
    "page": "Docstrings",
    "title": "PiCraft.rotate",
    "category": "function",
    "text": "rotate(A::Array{Block, 3}; dir::Symbol = :l, dim::Symbol = :x)\n\nRotate a 3-D Block Array 90 degrees in a dimension and direction. Dimensions are x, y and z. Directions are l & r.\n\nExample\n\njulia> A = reshape(Block.(collect(1:8)), (2,2,2))\n2×2×2 Array{PiCraft.Block,3}:\n[:, :, 1] =\n PiCraft.Block(1, 0)  PiCraft.Block(3, 0)\n PiCraft.Block(2, 0)  PiCraft.Block(4, 0)\n\n[:, :, 2] =\n PiCraft.Block(5, 0)  PiCraft.Block(7, 0)\n PiCraft.Block(6, 0)  PiCraft.Block(8, 0)\n\njulia> rotate(A, dir = :r, dim = :y)\n 2×2×2 Array{PiCraft.Block,3}:\n [:, :, 1] =\n  PiCraft.Block(3, 0)  PiCraft.Block(7, 0)\n  PiCraft.Block(4, 0)  PiCraft.Block(8, 0)\n\n [:, :, 2] =\n  PiCraft.Block(1, 0)  PiCraft.Block(5, 0)\n  PiCraft.Block(2, 0)  PiCraft.Block(6, 0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.saveWorld",
    "page": "Docstrings",
    "title": "PiCraft.saveWorld",
    "category": "function",
    "text": "Save the World\'s progress\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.setBlock",
    "page": "Docstrings",
    "title": "PiCraft.setBlock",
    "category": "function",
    "text": "setBlock(pos::Tuple{Real, Real, Real}, block::Block)\n\nPlace the specified Block at the given coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.setBlocks",
    "page": "Docstrings",
    "title": "PiCraft.setBlocks",
    "category": "function",
    "text": "setBlocks(p1::Tuple{Real, Real, Real}, p2::Tuple{Real, Real, Real}, block::Block)\n\nSet an entire region to the specified block type defined by the corners p1 and p2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.setPos",
    "page": "Docstrings",
    "title": "PiCraft.setPos",
    "category": "function",
    "text": "setPos(pos::Tuple{Real, Real, Real})\n\nTeleport the player to the specified coordinates\n\n\n\n\n\nsetPos(entityId::Int, pos::Tuple{Real, Real, Real})\n\nSet the position of the specified entity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.setTile",
    "page": "Docstrings",
    "title": "PiCraft.setTile",
    "category": "function",
    "text": "setTile(pos::Tuple{Real, Real, Real})\n\nTeleport the player on top of the specified tile\n\n\n\n\n\nsetTile(entityId::Int)\n\nTeleport the entity on the specified tile.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.turtle",
    "page": "Docstrings",
    "title": "PiCraft.turtle",
    "category": "type",
    "text": "turtle\n\nA graphics turtle meant to move in all 3-Dimensions. It contains the following fields:\n\npos : The coordinates of the turtle.\ndirection : The Roll Axis - direction in which the turtle is facing.\nnormal : The Yaw axis - direction normal to the turtle\'s body.\npenBlock : The block which will be used to draw.\nstepSize : The size of a turtle\'s step.\npenDown : Activation state of penBlock.\n\nThe default constructor initializes the turtle at the player\'s position,roll axis is the positive x-direction, with the yaw axis pointing downwards. penBlock is gold by default and is activated with the stepSize = 0.5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PiCraft.yaw",
    "page": "Docstrings",
    "title": "PiCraft.yaw",
    "category": "function",
    "text": "yaw(t::turtle, θ::Real)\n\nYaw the turtle t by θ degrees.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PiCraft.AIRPiCraft.BEDPiCraft.BEDROCKPiCraft.BEDROCK_INVISIBLEPiCraft.BOOKSHELFPiCraft.BRICK_BLOCKPiCraft.BlockPiCraft.CACTUSPiCraft.CHESTPiCraft.CLAYPiCraft.COAL_OREPiCraft.COBBLESTONEPiCraft.COBWEBPiCraft.CRAFTING_TABLEPiCraft.DIAMOND_BLOCKPiCraft.DIAMOND_OREPiCraft.DIRTPiCraft.DOOR_IRONPiCraft.DOOR_WOODPiCraft.FARMLANDPiCraft.FENCEPiCraft.FENCE_GATEPiCraft.FIREPiCraft.FLOWER_CYANPiCraft.FLOWER_YELLOWPiCraft.FURNACE_ACTIVEPiCraft.FURNACE_INACTIVEPiCraft.GLASSPiCraft.GLASS_PANEPiCraft.GLOWING_OBSIDIANPiCraft.GLOWSTONE_BLOCKPiCraft.GOLD_BLOCKPiCraft.GOLD_OREPiCraft.GRASSPiCraft.GRASS_TALLPiCraft.GRAVELPiCraft.ICEPiCraft.IRON_BLOCKPiCraft.IRON_OREPiCraft.LADDERPiCraft.LAPIS_LAZULI_BLOCKPiCraft.LAPIS_LAZULI_OREPiCraft.LAVAPiCraft.LAVA_FLOWINGPiCraft.LAVA_STATIONARYPiCraft.LEAVESPiCraft.MELONPiCraft.MOSS_STONEPiCraft.MUSHROOM_BROWNPiCraft.MUSHROOM_REDPiCraft.NBTagPiCraft.NETHER_REACTOR_COREPiCraft.OBSIDIANPiCraft.PiCraftPiCraft.REDSTONE_OREPiCraft.SANDPiCraft.SANDSTONEPiCraft.SAPLINGPiCraft.SNOWPiCraft.SNOW_BLOCKPiCraft.STAIRS_COBBLESTONEPiCraft.STAIRS_WOODPiCraft.STONEPiCraft.STONE_BRICKPiCraft.STONE_SLABPiCraft.STONE_SLAB_DOUBLEPiCraft.SUGAR_CANEPiCraft.TAG_BytePiCraft.TAG_Byte_ArrayPiCraft.TAG_CompoundPiCraft.TAG_DoublePiCraft.TAG_EndPiCraft.TAG_FloatPiCraft.TAG_IntPiCraft.TAG_Int_ArrayPiCraft.TAG_ListPiCraft.TAG_LongPiCraft.TAG_Long_ArrayPiCraft.TAG_ShortPiCraft.TAG_StringPiCraft.TNTPiCraft.TORCHPiCraft.WATERPiCraft.WATER_FLOWINGPiCraft.WATER_STATIONARYPiCraft.WOODPiCraft.WOOD_PLANKSPiCraft.WOOLPiCraft.WorldPiCraft.__init__PiCraft.buildModelPiCraft.cameraPiCraft.clearEventsPiCraft.connectToWorldPiCraft.copyModelPiCraft.cutModelPiCraft.drawLinePiCraft.evalPiCraft.exportSchematicPiCraft.find_itemPiCraft.flipPiCraft.getBlockPiCraft.getChatEventsPiCraft.getHeightPiCraft.getPlayerIdsPiCraft.getPosPiCraft.getTilePiCraft.importSchematicPiCraft.includePiCraft.mc_itemsPiCraft.mc_sendPiCraft.minecraftWorldPiCraft.movePiCraft.parseNBTPiCraft.pitchPiCraft.pollBlockHitsPiCraft.postPiCraft.printTAGPiCraft.readTAGPiCraft.restoreWorldPiCraft.rollPiCraft.rotatePiCraft.rotate!PiCraft.saveWorldPiCraft.setBlockPiCraft.setBlocksPiCraft.setPosPiCraft.setTilePiCraft.settingPiCraft.tagDictPiCraft.tagKeyDictPiCraft.turtlePiCraft.writeTAGPiCraft.yaw"
},

]}
