var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Taro-1",
    "page": "Readme",
    "title": "Taro",
    "category": "section",
    "text": "Taro is a utility belt of functions to work with document files in Julia. It uses Apache Tika, Apache POI and Apache FOP  (via JavaCall) to work with Word, Excel and PDF files.Documentation is available at http://aviks.github.io/Taro.jl/(Image: Build Status) (Image: Build status)  (Image: Taro) (Image: Taro) (Image: Taro) (Image: Taro)"
},

{
    "location": "autodocs/#Taro.Cell",
    "page": "Docstrings",
    "title": "Taro.Cell",
    "category": "type",
    "text": "A cell within an excel sheet. Most operations to get or set values occur on a cell. Wrapper for Java class org.apache.poi.ss.usermodel.Cell\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.CellStyle",
    "page": "Docstrings",
    "title": "Taro.CellStyle",
    "category": "type",
    "text": "A Cell style. Wrapper for Java class org.apache.poi.ss.usermodel.CellStyle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.Row",
    "page": "Docstrings",
    "title": "Taro.Row",
    "category": "type",
    "text": "A row in a sheet. Contains cells\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.Sheet",
    "page": "Docstrings",
    "title": "Taro.Sheet",
    "category": "type",
    "text": "An excel Sheet, contained within a workbook. Wrapper around the Java class org.apache.poi.ss.usermodel.Sheet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.Workbook",
    "page": "Docstrings",
    "title": "Taro.Workbook",
    "category": "type",
    "text": "An excel Workbook, representing a single file. Wrapper around  the Java class org.apache.poi.ss.usermodel.Workbook. Constructors of this types are used to read existing files, or create new ones.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.colnum",
    "page": "Docstrings",
    "title": "Taro.colnum",
    "category": "function",
    "text": "Return the integer column number given a character column     eg: A -> 1         AA -> 27\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.colstring",
    "page": "Docstrings",
    "title": "Taro.colstring",
    "category": "function",
    "text": "Return the character refrence of an integer column number     eg. 1 -> A         27 -> AA\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.createCellStyle",
    "page": "Docstrings",
    "title": "Taro.createCellStyle",
    "category": "function",
    "text": "create a new cell style from a workbook, prior to setting it on a cell\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.createSheet",
    "page": "Docstrings",
    "title": "Taro.createSheet",
    "category": "function",
    "text": "createSheet(w::Workbook, s::AbstractString)\n\nCreate a new sheet in the workbook with the specified name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.extract",
    "page": "Docstrings",
    "title": "Taro.extract",
    "category": "function",
    "text": "extract(filename::AbstractString; unsafe = false)\n\nExtract raw text from documents, using Apache Tika. Returns a Dict of metadata name value pairs, and a String with the text of the document.\n\n`filename`: path of file to read. relative to current directory, or absolute\n`unsafe` : If set to true, the full contents of the file is read. If false, returned string is capped at 100 000 characters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.fo",
    "page": "Docstrings",
    "title": "Taro.fo",
    "category": "function",
    "text": "Taro.fo(inputFoFileName::String, outputPDFFileName::String)\n\nConvert the input fo file to a PDF.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.fromExcelDate",
    "page": "Docstrings",
    "title": "Taro.fromExcelDate",
    "category": "function",
    "text": "fromExcelDate(date::Number; use1904windowing=false, roundtoSeconds=false)\n\nConvert an Excel style date to a Julia DateTime object.\n\nExcel stores dates and times as a floating point number representing the fractional days since 1/1/1900. If use1904windowing is true, the epoch is 1/1/1904, which is used in some older Excel for Mac versions. If roundtoSeconds is true, the millisecond part of the time is discarded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.getCellFormula",
    "page": "Docstrings",
    "title": "Taro.getCellFormula",
    "category": "function",
    "text": "getCellFormula(cell::Cell)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.getCellType",
    "page": "Docstrings",
    "title": "Taro.getCellType",
    "category": "function",
    "text": "getCellType(cell::Cell)\n\nReturn the type of a cell: CELLTYPENUMERIC, CELLTYPESTRING, CELLTYPEFORMULA, CELLTYPEBLANK, CELLTYPEBOOLEAN, CELLTYPEERROR\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.getCellValue",
    "page": "Docstrings",
    "title": "Taro.getCellValue",
    "category": "function",
    "text": "getCellValue(cell::Cell)\n\nReturn the contents of a Excel cell.\n\nA string or a float value is returned based on the type of the contents of the cell. If a cell is recognised as a being formatted like a date, a Julia DateTime object is returned. This function therefore is not type stable. For formulas, the last evaluated value of the cell is returned.\n\nNote that the dates are stored internally within Excel as floats, and the recognition as a date is heuristic.\n\nIf a cell contains an error value, or is empty, nothing is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.getExcelDate",
    "page": "Docstrings",
    "title": "Taro.getExcelDate",
    "category": "function",
    "text": "getExcelDate(date::DateTime, use1904windowing::Bool = false)\n\nConvert a Julia DateTime object into an Excel Date. The result will be a floating point number representing days since 1/1/1900. The time from midnight will be the fractional part of the number. If use1904windowing is true, the epoch is 1/1/1904, which is used in some older Excel for Mac versions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.getSheet",
    "page": "Docstrings",
    "title": "Taro.getSheet",
    "category": "function",
    "text": "getSheet(book::Workbook, sheet)\n\nReturn the specified sheet from the workbook.  sheet can be specified as a name (string) or number (0-indexed)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.isCellDateFormatted",
    "page": "Docstrings",
    "title": "Taro.isCellDateFormatted",
    "category": "function",
    "text": "isCellDateFormatted(cell::Cell)\n\nReturn true if the format applied to the cell looks like a date.\n\nThis is a heuristic, and not guaranteed to be correct.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.readxl",
    "page": "Docstrings",
    "title": "Taro.readxl",
    "category": "function",
    "text": "Read tabular data out of an excel file into a Julia Dataframe. This is similar to the readtable function in the Dataframes package that reads a CSV file into a Dataframe.\n\nThe function returns a dataframe from the contents of an MS Excel file. The sheet and region containing the data should be specified. By default, a header row is expected, which must consist only of strings. The header keyword argument should be set to false if no header is present in the data.\n\nfilename : path of excel file (.xls or .xlsx)\nsheet : sheet name or number (0-based).\n    Can be omitted, in which case the first sheet (index `0`) in the workbook is selected.\nrange : string containing an excel range to read. eg. B4:D45\n\nOptional Arguments : similar to Dataframes.readtable.\n\nheader::Bool = true\nnastrings::Vector = String[\"\", \"NA\"]\ntruestrings::Vector = String[\"T\", \"t\", \"TRUE\", \"true\"]\nfalsestrings::Vector = String[\"F\", \"f\", \"FALSE\", \"false\"]\ncolnames::Vector = Symbol[]\ncoltypes::Vector{Any} = Any[]\nskipstart::Int = 0\nskiprows::Vector{Int} = Int[]\nskipblanks::Bool = true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.setCellFormula",
    "page": "Docstrings",
    "title": "Taro.setCellFormula",
    "category": "function",
    "text": "setCellFormula(c::Cell, formula::AbstractString)\n\nSet a formula as a value to an Excel cell.\n\nThe formula string should be what you would expect to enter in excel, but without the +. For example: \"A2+2*B2\" , \"sin(A2)\" , \"someuserdefined_formula(B2)\" Note that the formula will be evaluated only when the file is actually opened in Excel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.setCellStyle",
    "page": "Docstrings",
    "title": "Taro.setCellStyle",
    "category": "function",
    "text": "setCellStyle(cell:Cell, style::CellStyle)\n\nSet a style to a cell. The CellStyle object must be created from the workbook\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.setCellValue",
    "page": "Docstrings",
    "title": "Taro.setCellValue",
    "category": "function",
    "text": "setCellValue(c::Cell, x)\n\nSet the value of an excel cell. The value can be a string, a real number, or a Date or DateTime.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.setDataFormat",
    "page": "Docstrings",
    "title": "Taro.setDataFormat",
    "category": "function",
    "text": "setDataFormat(w::Workbook, style::CellStyle, format::AbstractString)\n\nSet a dataformat on a CellStyle. Need the workbook to tie everything together\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Taro.writexl",
    "page": "Docstrings",
    "title": "Taro.writexl",
    "category": "function",
    "text": "Write a vector of Julia Dataframes to an Excel file, each representing an Excel Sheet.\n\nfilename : path of excel file (.xls or .xlsx)\ndfs : A Vector of Table objects with each Table representing a separate Excel Sheet\n\nOptional Arguments.\n\nheaders = String[] a string vector of same length as dfs, to add a first line before the sheet is written\nsheetnames = String[]\nappend::Bool = true is supposed to append the DataFrame sheets to an existing excel file, but currently fails often.\n    For now, it is better to make sure no such file exists before using.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Taro.CELL_TYPE_BLANKTaro.CELL_TYPE_BOOLEANTaro.CELL_TYPE_ERRORTaro.CELL_TYPE_FORMULATaro.CELL_TYPE_NUMERICTaro.CELL_TYPE_STRINGTaro.CellTaro.CellStyleTaro.CellTypeTaro.DAY_MILLISECONDSTaro.DataFormatTaro.HOURS_PER_DAYTaro.MINUTES_PER_HOURTaro.ParseOptionsTaro.RowTaro.SECONDS_PER_DAYTaro.SECONDS_PER_MINUTETaro.SheetTaro.TaroTaro.WorkbookTaro.__init__Taro.colnumTaro.colstringTaro.createCellTaro.createCellStyleTaro.createRowTaro.createSheetTaro.evalTaro.extractTaro.foTaro.fop_jarTaro.fop_libTaro.fromExcelDateTaro.getBooleanCellValueTaro.getCachedFormulaResultTypeTaro.getCellTaro.getCellFormulaTaro.getCellTypeTaro.getCellValueTaro.getExcelDateTaro.getNumericCellValueTaro.getRowTaro.getSheetTaro.getSheetAtTaro.getStringCellValueTaro.includeTaro.initTaro.isCellDateFormattedTaro.jFileTaro.readxlTaro.setCellFormulaTaro.setCellStyleTaro.setCellValueTaro.setDataFormatTaro.tika_jarTaro.writexl"
},

]}
