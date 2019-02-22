var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OpenStreetMapPlotter.jl-1",
    "page": "Readme",
    "title": "OpenStreetMapPlotter.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#About-1",
    "page": "Readme",
    "title": "About",
    "category": "section",
    "text": "This package was created to be an improvement on OpenStreetMap.jl\'s plotting capabilities. As opposed to OpenStreetMap2.jl or OpenStreetMapX.jl it is focused primarily on creating beautiful plots using Winston.jl from OpenStreetMap data, and additionally exporting those plots to other formats such as GeoJSON."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "It can parse OpenStreetMap maps from either a bounding box (which then fetches the map from the Overpass API) or from a .osm file.  It uses three functions to create arrays of either the nodes, the ways, or the relations in the map. These are defined by structs in the library, and have all the attributes that OSM objects do, just in an easier format to work with in Julia. In addition, it has a plotting function which uses Winston.jl to create beautiful renderings of the maps. The main ways in which this package improves on OpenStreetMap.jl:The graphing function is able to draw buildings and other OSM objects like parks, rivers, etc, as polygons rather than just as outlines.\nBecause this package is primarily focused on extracting data from the OSM objects, rather than on geometry, the structs are much easier to understand because everything is in WGS84 projection. \nIn OpenStreetMap.jl, smaller streets that adjoin a larger street will sometimes be drawn over the larger street. This package delays the drawing of motorways, trunks, and primary through tertiary ways so that they display correctly when plotted.The styling for all the different object types is defined in styles.jl, which is composed of a few dictionaries that map OSM tags to Style objects. These dicts are accessible to the user, so you can easily change the styling as you wish."
},

{
    "location": "#Planned-Features-1",
    "page": "Readme",
    "title": "Planned Features",
    "category": "section",
    "text": "Ability to export to QGIS\nBetter theming options"
},

{
    "location": "#MapCSS-Support-1",
    "page": "Readme",
    "title": "MapCSS Support",
    "category": "section",
    "text": "Currently, OpenStreetMapPlotter.jl supports a subset of MapCSS features. The only attributes which can be set are width and color, but ways can be filtered by what tags they have and also by the values of those tags. Example:way[highway]\n{width: 2; color:black;}\nway[highway!=motorway]\n{ width:2; color:green;}Supported operators are: !=, =, <=, >=, >, <. Note: the statements in the CSS file are executed sequentially, so later statements will override earlier statements"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "#open a file from bounding box...\njulia> bbox = (-75.2262,39.9365,-75.1327, 39.9821)\njulia> xml = open_bbox(bbox)\n#or from a file\njulia> xml, bbox = open_file(\"map2.osm\")\n\n#parse the ways\njulia> way_arr = parse_ways(xml)\n\n#plot it\njulia> plot_ways(way_arr, bbox=bbox)\n#or plot it using a CSS file to define the appearance\njulia> plot_ways(way_arr, bbox, css_file_name=\"src/test.css\")(Image: Example map of West Philadelphia)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OpenStreetMapPlotter.NodeOpenStreetMapPlotter.OpenStreetMapPlotterOpenStreetMapPlotter.RelationOpenStreetMapPlotter.StyleOpenStreetMapPlotter.TagOpenStreetMapPlotter.ThemeOpenStreetMapPlotter.WayOpenStreetMapPlotter.amenity_stylesOpenStreetMapPlotter.building_stylesOpenStreetMapPlotter.center_of_pointsOpenStreetMapPlotter.evalOpenStreetMapPlotter.find_nodeOpenStreetMapPlotter.find_wayOpenStreetMapPlotter.get_way_styleOpenStreetMapPlotter.highway_stylesOpenStreetMapPlotter.includeOpenStreetMapPlotter.is_lessOpenStreetMapPlotter.leisure_stylesOpenStreetMapPlotter.meanOpenStreetMapPlotter.nature_stylesOpenStreetMapPlotter.open_bboxOpenStreetMapPlotter.open_fileOpenStreetMapPlotter.parse_cssOpenStreetMapPlotter.parse_nodesOpenStreetMapPlotter.parse_relationsOpenStreetMapPlotter.parse_waysOpenStreetMapPlotter.plot_waysOpenStreetMapPlotter.save_jsonOpenStreetMapPlotter.sort_counterclockwiseOpenStreetMapPlotter.split_polygonOpenStreetMapPlotter.tag2styleOpenStreetMapPlotter.waterway_styles"
},

]}
