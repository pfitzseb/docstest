var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RedCap-1",
    "page": "Readme",
    "title": "RedCap",
    "category": "section",
    "text": "(Image: Build Status)<!–- (Image: Coverage Status)(Image: codecov.io) –->"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "A Julia frontend for the REDCap API. REDCap.jl supports both importing and exporting records, as well as deletion from the REDCap Database. It also includes functions for surveys and report generation. Available under the MIT license.(Image: ) (Image: )"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": ""
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "Julia can be found using the standard package manager, and installed like any other package.add REDCap"
},

{
    "location": "#Tests-1",
    "page": "Readme",
    "title": "Tests",
    "category": "section",
    "text": "Tests can be run using the Julia package managertest REDCapDue to the nature of the API, the API-Key and URL must be set in the users .juliarc file:ENV[\"REDCAP_SUPER_API\"] = \"<super-key>\"\nENV[\"REDCAP_API\"] = \"<key>\"\nENV[\"REDCAP_URL\"] = \"<url>\"If a super-key is not provided, project creation will not be tested. Otherwise, a project will be created, and verified."
},

{
    "location": "#NOTE:-1",
    "page": "Readme",
    "title": "NOTE:",
    "category": "section",
    "text": "Testing must be performed on the users own REDCap environment. If you are unable to access your own REDCap environment, testing will also fail. Projects are tested according to a rough template. Several tests may fail if your project deviates from this template such as record contents and users."
},

{
    "location": "#Release-History-1",
    "page": "Readme",
    "title": "Release History",
    "category": "section",
    "text": "1.0 - Initial Release - compatible with Julia 1.0 and REDCap 8.1.0"
},

{
    "location": "autodocs/#REDCap.Config",
    "page": "Docstrings",
    "title": "REDCap.Config",
    "category": "type",
    "text": "REDCap.Config(url::String, key::String; ssl::Bool = true)\n\nStruct to hold api url and key/superkey. APIConfigObj = Config(\"http...\",\"ABCD...\")\n\nThis will be passed to all function calls to both orient and authorize the api_pusher() function. The REDCap API cannot be accessed without this config object properly set-up. Always test your config object before automating a project. \n\nNOTE: SSL should always be on by default.\n\nIf for whatever reason, your project will not SSL verify AND you must use it, disable ssl verification with ssl=false Leaving SSL verification disabled leaves you open for Man-in-the-Middle attacks and is generally just bad practice.\n\nParameters:\n\nurl - The url of the REDCap instance.\nkey - Either the standard or super API key.\nssl - Flag to enable ssl verification\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.REDCap",
    "page": "Docstrings",
    "title": "REDCap.REDCap",
    "category": "module",
    "text": "REDCap\n\nLegacy Julia 0.6 frontend for the REDCap API. Handles all available API calls from REDCap through top-level functions. Must have a valid REDCap.Config object set up with the API key and url.  Compatable with REDCap Version 8.1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.api_pusher",
    "page": "Docstrings",
    "title": "REDCap.api_pusher",
    "category": "function",
    "text": "api_pusher(mode::String, content::String, config::Config; format::String=\"\", returnFormat::String=\"\", file_loc::String=\"\", kwargs...)\n\nPass the type of api call, the config struct, and any needed kwargs for that api call. Handles creation of the Dict of fields to pass to REDCap, and file IO/formatting. \n\nAPI documentation found here: https://<your-redcap-site.com>/redcap/api/help/\n\nParameters:\n\nmode - \"import\", \"export\", or \"delete\"\ncontent - Passed by calling modules to indicate what data to access\nconfig - Struct containing url and api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location of file\nkwargs... - Any addtl. arguments passed by the calling module\n\nReturns:\n\nFormatted response body\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.create_project",
    "page": "Docstrings",
    "title": "REDCap.create_project",
    "category": "function",
    "text": "create_project(config::REDCap.Config, project_title::String, purpose::Integer; format::String=\"json\", returnFormat::String=\"json\", odm=\"\", purpose_other::String=\"\", project_notes::String=\"\", is_longitudinal::Integer=0, surveys_enabled::Integer=0, record_autonumbering_enabled::Integer=1)\n\nCreates a project with the given parameters\n\nParameters:\n\nconfig - Struct containing url and super-api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". declares format of imported data\ndata - Attributes of project to create- only project_title and purpose are required (* for default)\n\n* `project_title`: Title\n* `purpose`: Must be numerical (0 - test, 1 - other, 2 - research, 3 - Qual+, 4 - OpSupport)\n* `purpose_other`: If purpose == 1, string of purpose\n* `project_notes`: Notes\n* `is_longitudinal`: 0 - false*, 1 - true\n* `surveys_enabled`: 0 - false*, 1 - true\n* `record_autonumbering_enabled`: 0 - false, 1 - true*\n\nreturnFormat - Error message format\nodm - XML string containing metadata\n\nReturns:\n\nThe standard config for that project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.delete_arms",
    "page": "Docstrings",
    "title": "REDCap.delete_arms",
    "category": "function",
    "text": "delete_arms(config::REDCap.Config, arms::Array)\n\nDelete Arms from project. Removing all arms reverts the project into a non-longitudinal project.\n\nNOTE: This only works for longitudinal projects.\n\nParameters:\n\nconfig - Struct containing url and api-key\narms - Array of arm names to delete\n\nReturns:\n\nNumber of succesfully deleted arms\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.delete_events",
    "page": "Docstrings",
    "title": "REDCap.delete_events",
    "category": "function",
    "text": "delete_events(config::REDCap.Config, events::Array)\n\nDelete Events from project. Removing all but one event reverts the project into a non-longitudinal project.\n\nNOTE: This only works for longitudinal projects.\n\nParameters:\n\nconfig - Struct containing url and api-key\nevents - Array of event names to delete\n\nReturns:\n\nNumber of successfully deleted events\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.delete_file",
    "page": "Docstrings",
    "title": "REDCap.delete_file",
    "category": "function",
    "text": "delete_file(config::REDCap.Config, record::String, field::String, event::String; repeat_instance::Integer=1, returnFormat::String=\"json\")\n\nDelete document attached to record.\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecord - Name of record containing file\nfield - Name of field containing file\nevent - Name of event containing file\nrepeat_instance - Number of repeated instances (long project)\nreturnFormat - Error message format\n\nReturns:\n\nNothing/error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.delete_records",
    "page": "Docstrings",
    "title": "REDCap.delete_records",
    "category": "function",
    "text": "delete_records(config::REDCap.Config, records::Array; arm::Integer=0)\n\nDelete one or more records from project.\n\nParameters:\n\nconfig - Struct containing the url and api-key\nrecords - Array of record names to delete\narm - Number of arm containing records\n\nReturns:\n\nNumber of records successfully deleted\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.df_formatter",
    "page": "Docstrings",
    "title": "REDCap.df_formatter",
    "category": "function",
    "text": "df_formatter(data, mode::String)\n\nParameters:\n\ndata - The data to be formatted\nmode - Formatting for Import (data to server) or Export (data from server)\n\nReturns:\n\nEither an JSON\'ed dict, or a df\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.df_parser",
    "page": "Docstrings",
    "title": "REDCap.df_parser",
    "category": "function",
    "text": "df_parser(data::Union{DataFrame, Dict})\n\nTakes a DF, turns it into a Dict When a DF is passed, every row is turned into a dict() with the columns as keys, and pushed into an array to pass as a JSON object.\n\nParameters:\n\ndata - Data to be formatted\n\nReturns:\n\nA JSON ready dictionary array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_arms",
    "page": "Docstrings",
    "title": "REDCap.export_arms",
    "category": "function",
    "text": "export_arms(config::REDCap.Config; arms::Array=[], format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nReturns a dict of all arms used in the project.\n\nNOTE: This only works for longitudinal projects.\n\nParameters:\n\nconfig - Struct containing url and api-key\narms - Array of arm names to export\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of Arms for project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_events",
    "page": "Docstrings",
    "title": "REDCap.export_events",
    "category": "function",
    "text": "export_events(config::REDCap.Config; arms::Array=[], format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nNOTE: This only works for longitudinal projects.\n\nParameters:\n\nconfig - Struct containing url and api-key\narms - Array of arm names to export\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of events for project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_field_names",
    "page": "Docstrings",
    "title": "REDCap.export_field_names",
    "category": "function",
    "text": "export_field_names(config::REDCap.Config; field::String=\"\", format::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nfield - Specifies the field to export\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of export/import-specific version of field names  for all fields (or for one field, if desired) in project:  \'originalfieldname\', \'choicevalue\', and \'exportfield_name\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_file",
    "page": "Docstrings",
    "title": "REDCap.export_file",
    "category": "function",
    "text": "export_file(config::REDCap.Config, record::String, field::String, event::String; repeat_instance::Integer=1, returnFormat::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecord - Record id containing file\nfield - Field containing file\nevent - Event containing file\nrepeat_instance - Number of repeated instances (long. project)\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFile attached to individual record.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_instrument_event_mappings",
    "page": "Docstrings",
    "title": "REDCap.export_instrument_event_mappings",
    "category": "function",
    "text": "export_instrument_event_mappings(config::REDCap.Config, arms::Array=[]; format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nNOTE: This only works for longitudinal projects.\n\nParameters:\n\nconfig - Struct containing url and api-key\narms - Array of arm names to export\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of instrument-event mappings for project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_instruments",
    "page": "Docstrings",
    "title": "REDCap.export_instruments",
    "category": "function",
    "text": "export_instruments(config::REDCap.Config; format::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict for data collection instruments of project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_metadata",
    "page": "Docstrings",
    "title": "REDCap.export_metadata",
    "category": "function",
    "text": "export_metadata(config::REDCap.Config; fields::Array=[], forms::Array=[], format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nfields - Array of field names to pull data from\nforms - Array of form names to pull data from\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of the metadata for project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_pdf",
    "page": "Docstrings",
    "title": "REDCap.export_pdf",
    "category": "function",
    "text": "export_pdf(config::REDCap.Config, file_loc::String; record::String=\"\", event::String=\"\", instrument::String=\"\", allRecords::Bool=false)\n\nExports a PDF for a selected portion of the project.\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecord - Record ID to populate PDF\nevent - Event name to populate PDF\ninstrument - Name of instrument to populate PDF\nallRecords - Flag to take all records or not - if passed, the other specifying fields will be ignored\nfile_loc - Location to export to\n\nReturns:\n\nPDF file for: \n\nsingle data collection instrument (blank),\nall instruments (blank), \nsingle instrument (with data from a single record),\nall instruments (with data from a single record), \nall instruments (with data from ALL records)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_project",
    "page": "Docstrings",
    "title": "REDCap.export_project",
    "category": "function",
    "text": "export_project(config::REDCap.Config; returnMetadataOnly::Bool=false, records::Array=[], fields::Array=[], events::Array=[], format::String=\"xml\", returnFormat::String=\"json\", exportSurveyFields::Bool=false, exportDataAccessGroups::Bool=false, filterLogic::String=\"\", exportFiles::Bool=false, file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nreturnMetadataOnly - Flag to return metedata or not\nrecords - Array of record names to include\nfields - Array of field names to include\nevents - Array of event names to include\nreturnFormat - Error message format\nexportSurveyFields - Flag to return survey fields or not\nexportDataAccessGroups - Flag to return DAGroups or not\nfilterLogic - Allows collection of records that fulfill a criteria eg. \"[age] > 65\"\nexportFiles - Flag to include files or not\nfile_loc - Location to export to\n\nReturns:\n\nEntire project as XML.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_project_information",
    "page": "Docstrings",
    "title": "REDCap.export_project_information",
    "category": "function",
    "text": "export_project_information(config::REDCap.Config; format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of the basic attributes of given REDCap project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_records",
    "page": "Docstrings",
    "title": "REDCap.export_records",
    "category": "function",
    "text": "export_records(config::REDCap.Config; format::String=\"json\", dtype::String=\"flat\", records::Array=[], fields::Array=[], forms::Array=[], events::Array=[], rawOrLabel::String=\"raw\", rawOrLabelHeaders::String=\"raw\", exportCheckboxLabel::Bool=false, returnFormat::String=\"json\", exportSurveyFields::Bool=false, exportDataAccessGroups::Bool=false, filterLogic::String=\"\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\ndtype - Output mode: \"flat\" (output one record per row) or \"eav\" (one data point per row)\nrecords - Array of record names to include\nfields - Array of field names to include\nforms - Array of form names to include\nevents - Array of event names to include\nrawOrLabel - \"raw\" or \"label\" - export raw coded values or labels for multiple choice fields\nrawOrLabelHeaders - Same as above, for headers\nexportCheckboxLabel - Checkbox behavior: export checkboxes as \"checked/unchecked\" or as \"field-name/\'blank\'\"\nreturnFormat - Error message format\nexportSurveyFields - Flag to return survey fields or not\nexportDataAccessGroups - Flag to return DAGroups or not\nfilterLogic - Allows collection of records that fulfill a criteria eg. \"[age] > 65\"\nfile_loc - Location to export to\n\nReturns:\n\nAn array of Dictionaries containing record information\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_report",
    "page": "Docstrings",
    "title": "REDCap.export_report",
    "category": "function",
    "text": "export_report(config::REDCap.Config, report_id::Integer; format::String=\"json\", returnFormat::String=\"json\", rawOrLabel::String=\"raw\", rawOrLabelHeaders::String=\"raw\", exportCheckboxLabel::Bool=false, file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nreport_id - Id of report to export\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nrawOrLabel - \"raw\" or \"label\" - export raw coded values or labels for multiple choice fields\nrawOrLabelHeaders - Same as above, for headers\nexportCheckboxLabel - Checkbox behavior: export checkboxes as \"checked/unchecked\" or as \"field-name/\'blank\'\"\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of report.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_survey_link",
    "page": "Docstrings",
    "title": "REDCap.export_survey_link",
    "category": "function",
    "text": "export_survey_link(config::REDCap.Config, record::String, instrument::String, event::String; repeat_instance::Int=1, returnFormat::String=\"json\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecord - Record id\ninstrument - Name of instrument linking to\nevent - Event name containing instrument\nrepeat_instance - Number of repeated instances (long project)\nreturnFormat - Error message format\n\nReturns:\n\nUnique survey link.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_survey_participant_list",
    "page": "Docstrings",
    "title": "REDCap.export_survey_participant_list",
    "category": "function",
    "text": "export_survey_participant_list(config::REDCap.Config, instrument::String, event::String; format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\ninstrument - Name of instrument to export list of participants\nevent - Event name conatining instrument\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nFormatted dict of all participants for specific survey instrument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_survey_queue_link",
    "page": "Docstrings",
    "title": "REDCap.export_survey_queue_link",
    "category": "function",
    "text": "export_survey_queue_link(config::REDCap.Config, record::String; returnFormat::String=\"json\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecord - Record id for link\nreturnFormat - Error message format\n\nReturns:\n\nUnique Survey Queue link.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_survey_return_code",
    "page": "Docstrings",
    "title": "REDCap.export_survey_return_code",
    "category": "function",
    "text": "export_survey_return_code(config::REDCap.Config, record::String, instrument::String, event::String; repeat_instance::Integer=1, returnFormat::String=\"json\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecord - Record id for link\ninstrument - Name of instrument to export code for\nevent - event Name conatining instrument\nrepeat_instance - Number of repeated instances (long project)\nreturnFormat - Error message format\n\nReturns:\n\nUnique Return Code in plain text format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_to_file",
    "page": "Docstrings",
    "title": "REDCap.export_to_file",
    "category": "function",
    "text": "export_to_file(fileLoc::String, format::String, data)\n\nCalled by exporting functions to dump data into designated file, or yell at you for a bad path.\n\nParameters:\n\nfile_loc - Location of file - pass with proper extensions\ndata - The data to save to file\n\nReturns:\n\nNothing/error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_users",
    "page": "Docstrings",
    "title": "REDCap.export_users",
    "category": "function",
    "text": "export_users(config::REDCap.Config; format::String=\"json\", returnFormat::String=\"json\", file_loc::String=\"\")\n\nParameters:\n\nconfig - Struct containing url and api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\nreturnFormat - Error message format\nfile_loc - Location to export to\n\nReturns:\n\nArray of formatted dicts of users for project.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.export_version",
    "page": "Docstrings",
    "title": "REDCap.export_version",
    "category": "function",
    "text": "export_version(config::REDCap.Config; format::String=\"json\")\n\nReturns a string of the current REDCap version.\n\nParameters:\n\nconfig - Struct containing url and api-key\nformat - \"json\", \"xml\", \"csv\", or \"odm\". decides format of returned data\n\nReturns:\n\nThe version number (eg 1.0.0) as a string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.formatter",
    "page": "Docstrings",
    "title": "REDCap.formatter",
    "category": "function",
    "text": "formatter(data, format, mode::String)\n\nTakes data and sends out to the proper formating function.\n\nParameters:\n\ndata - The data to be formatted\nformat - The target format\nmode - Formatting for Import (data to server) or Export (data from server)\n\nReturns:\n\nThe specified formatted/unformatted object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.generate_next_record_id",
    "page": "Docstrings",
    "title": "REDCap.generate_next_record_id",
    "category": "function",
    "text": "generate_next_record_id(config::Config)\n\nParameters:\n\nconfig - Struct containing url and api-key\n\nReturns:\n\nThe next available ID number for project (Max record number +1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.import_events",
    "page": "Docstrings",
    "title": "REDCap.import_events",
    "category": "function",
    "text": "import_events(config::REDCap.Config, data; override::Int=0, format::String=\"json\", returnFormat::String=\"json\")\n\nUpdate/import Events into a project.\n\nParameters:\n\nconfig - Struct containing url and api-key\ndata - Data to be imported - pass as a file location to import from disk\noverride - 0 (false) 1 (true) - overwrites existing events\nformat - \"json\", \"xml\", \"csv\", or \"odm\". declares format of imported data\nreturnFormat - Error message format\n\nReturns:\n\nNumber of successfully imported events\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.import_file_checker",
    "page": "Docstrings",
    "title": "REDCap.import_file_checker",
    "category": "function",
    "text": "import_file_checker()\n\nChecks if the passed data is a valid path to a file, or data in itself.  If a path, calls a loading function; if data, calls a formatter.\n\nParametes:\n\ndata - The data to check\nformat - The format to pass along\n\nReturns:\n\nThe retreived/formatted data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.import_from_file",
    "page": "Docstrings",
    "title": "REDCap.import_from_file",
    "category": "function",
    "text": "import_from_file(file_loc::String, format::String)\n\nCalled by importing functions to load already formatted data directly from a designated file\n\nParameters:\n\nfile_loc - Location of file\nformat - The target format\n\nReturns:\n\nThe formatted data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.import_project_information",
    "page": "Docstrings",
    "title": "REDCap.import_project_information",
    "category": "function",
    "text": "import_project_information(config::REDCap.Config, data; format::String=\"json\")\n\nUpdate basic attributes of given REDCap project. NOTE: Only for projects in development\n\nParameters:\n\nconfig - Struct containing url and api-key\ndata - Data to be imported - pass as a file location to import from disk\nformat - \"json\", \"xml\", \"csv\", or \"odm\". declares format of imported data\n\nReturns:\n\nNumber of successfully imported values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.import_records",
    "page": "Docstrings",
    "title": "REDCap.import_records",
    "category": "function",
    "text": "import_records(config::REDCap.Config, data::Any; format::String=\"json\", dtype::String=\"flat\", overwriteBehavior::String=\"normal\", forceAutoNumber::Bool=false, dateFormat::String=\"YMD\", returnContent::String=\"count\", returnFormat::String=\"json\")\n\nImport a set of records for a project.\n\nParameters:\n\nconfig - Struct containing url and api-key\nrecordData - Array of record data to be imported - pass as a file location to import from disk\nformat - \"json\", \"xml\", \"csv\", or \"odm\". declares format of imported data\ndtype - \"flat\" (one record per row) or \"eav\" (one data point per row)\noverwriteBehavior - \"normal\" - will not overwrite, \"overwrite\" - will\nforceAutoNumber - Force auto-numbering and overwrite given id number\ndateFormat - \"YMD\", \"MDY\", or \"DMY\"\nreturnContent - \"count\" (number of successfully uploaded records), \n\n					\"ids\" (list of record numbers imported), \n					\"auto-ids\" (pair of assigned id and given id)\n\nreturnFormat - Error message format\n\nReturns:\n\nSpecified by returnContent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.json_formatter",
    "page": "Docstrings",
    "title": "REDCap.json_formatter",
    "category": "function",
    "text": "json_formatter(data, mode::String)\n\nParameters:\n\ndata - The data to be formatted\nmode - Formatting for Import (data to server) or Export (data from server)\n\nReturns:\n\nEither a JSON\'ed object or a parsed Dict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.poster",
    "page": "Docstrings",
    "title": "REDCap.poster",
    "category": "function",
    "text": "poster(config::Config, body)\n\nHandles the POST duties for all modules. Also does basic Status checking and SSL verification.\n\nParameters:\n\nconfig - Struct containing url and api-key\nbody - Request body data\n\nReturns:\n\nThe response body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#REDCap.xml_formatter",
    "page": "Docstrings",
    "title": "REDCap.xml_formatter",
    "category": "function",
    "text": "xml_formatter(data, mode::String)\n\nParameters:\n\ndata - The data to be formatted\nmode - Formatting for Import (data to server) or Export (data from server)\n\nReturns:\n\nEither an xml-formatted string, or an xml document\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "REDCap.ConfigREDCap.REDCapREDCap.api_pusherREDCap.create_projectREDCap.delete_armsREDCap.delete_eventsREDCap.delete_fileREDCap.delete_recordsREDCap.df_formatterREDCap.df_parserREDCap.evalREDCap.export_armsREDCap.export_eventsREDCap.export_field_namesREDCap.export_fileREDCap.export_instrument_event_mappingsREDCap.export_instrumentsREDCap.export_metadataREDCap.export_pdfREDCap.export_projectREDCap.export_project_informationREDCap.export_recordsREDCap.export_reportREDCap.export_survey_linkREDCap.export_survey_participant_listREDCap.export_survey_queue_linkREDCap.export_survey_return_codeREDCap.export_to_fileREDCap.export_usersREDCap.export_versionREDCap.formatterREDCap.generate_next_record_idREDCap.import_armsREDCap.import_eventsREDCap.import_fileREDCap.import_file_checkerREDCap.import_from_fileREDCap.import_instrument_event_mappingsREDCap.import_metadataREDCap.import_project_informationREDCap.import_recordsREDCap.import_usersREDCap.includeREDCap.json_formatterREDCap.odm_formatterREDCap.posterREDCap.xml_formatter"
},

]}
