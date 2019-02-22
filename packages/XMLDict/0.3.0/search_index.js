var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#XMLDict.jl-1",
    "page": "Readme",
    "title": "XMLDict.jl",
    "category": "section",
    "text": "XMLDict implements an Associative interface (get(), getindex(), haskey()) for reading XML elements and attributes. Requires EzXML.jl.(Image: Build Status)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Extract the content of a single tag...xml = parse_xml(\"\"\"\n<CreateQueueResponse>\n    <CreateQueueResult>\n        <QueueUrl>http://queue.amazonaws.com/123456789012/testQueue</QueueUrl>\n    </CreateQueueResult>\n</CreateQueueResponse>\n\"\"\")\n\n@test xml[\"CreateQueueResult\"][\"QueueUrl\"] == \"http://queue.amazonaws.com/123456789012/testQueue\"Extract an attribute from a tag by using a :symbol as key...xml = parse_xml(\"\"\"\n<bookstore>\n  <book category=\"COOKING\" tag=\"first\"/>\n<bookstore>\n\"\"\")\n\n@test xml[\"bookstore\"][\"book\"][:category] == \"COOKING\"Extract a list of tag content...xml = parse_xml(\"\"\"\n<ListAllMyBucketsResult>\n  <Buckets>\n    <Bucket><Name>quotes</Name><CreationDate>2006-02-03T16:45:09.000Z</CreationDate></Bucket>\n    <Bucket><Name>samples</Name><CreationDate>2006-02-03T16:41:58.000Z</CreationDate></Bucket>\n  </Buckets>\n</ListAllMyBucketsResult>\n\"\"\")\n\n@test [b[\"Name\"] for b in xml[\"Buckets\"][\"Bucket\"]] == [\"quotes\", \"samples\"]Extract a dictionary of <Name>, <Value> tags content...\nxml = parse_xml(\"\"\"\n<GetQueueAttributesResponse>\n  <GetQueueAttributesResult>\n    <Attribute><Name>VisibilityTimeout</Name><Value>30</Value></Attribute>\n    <Attribute><Name>CreatedTimestamp</Name><Value>1286771522</Value></Attribute>\n    <Attribute><Name>MaximumMessageSize</Name><Value>8192</Value></Attribute>\n    <Attribute><Name>MessageRetentionPeriod</Name><Value>345600</Value></Attribute>\n  </GetQueueAttributesResult>\n</GetQueueAttributesResponse>\n\"\"\")\n\nd = [a[\"Name\"] => a[\"Value\"] for a in xml[\"GetQueueAttributesResult\"][\"Attribute\"]]\n\nDict with 4 entries:\n  \"MessageRetentionPeriod\" => \"345600\"\n  \"MaximumMessageSize\"     => \"8192\"\n  \"VisibilityTimeout\"      => \"30\"\n  \"CreatedTimestamp\"       => \"1286771522\"Convert entire XML document to a Julia Dict...xml_string=\"\"\"\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookstore brand=\"amazon\">\n  <book category=\"COOKING\" tag=\"first\">\n    <title lang=\"en\">\n        Everyday Italian\n    </title>\n    <author>Giada De Laurentiis</author>\n    <year>2005</year>\n    <price>30.00</price>\n    <extract copyright=\"NA\">The <b>bold</b> word is <b><i>not</i></b> <i>italic</i>.</extract>\n  </book>\n  <book category=\"CHILDREN\">\n    <title lang=\"en\">Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n    <foo><![CDATA[<sender>John Smith</sender>]]></foo>\n    <extract>Click <a href=\"foobar.com\">right <b>here</b></a> for foobar.</extract>\n  </book>\n  <metadata>\n       <foo>hello!</foo>\n  </metadata>\n</bookstore>\n\"\"\"d = xml_dict(xml_string)\n\nDict(\n    :version=>\"1.0\",\n    :encoding=>\"UTF-8\",\n    \"bookstore\"=>Dict(\n        :brand=>\"amazon\",\n        \"book\"=>[\n            Dict(\n                :category=>\"COOKING\",\n                :tag=>\"first\",\n                \"title\"=>Dict(:lang=>\"en\",\"\"=>\"Everyday Italian\"),\n                \"author\"=>\"Giada De Laurentiis\",\n                \"year\"=>\"2005\",\n                \"price\"=>\"30.00\",\n                \"extract\"=>Dict(\n                    :copyright=>\"NA\",\n                    \"\"=>[\"The \",Dict(\"b\"=>\"bold\"),\" word is \", Dict(\"b\"=>Dict(\"i\"=>\"not\")),\" \",Dict(\"i\"=>\"italic\"),\".\"])\n            ),\n            Dict(\n                :category=>\"CHILDREN\",\n                \"title\"=>Dict(:lang=>\"en\",\"\"=>\"Harry Potter\"),\n                \"author\"=>\"J K. Rowling\",\n                \"year\"=>\"2005\",\n                \"price\"=>\"29.99\",\n                \"foo\"=>\"<sender>John Smith</sender>\",\n                \"extract\"=>[\"Click \",Dict(\"a\"=>Dict(:href=>\"foobar.com\",\"\"=>[\"right \",Dict(\"b\"=>\"here\")])),\" for foobar.\"]\n            )],\n        \"metadata\"=>Dict(\"foo\"=>\"hello!\")\n    )\n)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "XMLDict.XMLDictXMLDict.XMLDictElementXMLDict.attr_xmlXMLDict.attrsXMLDict.dict_xmlXMLDict.escapeXMLDict.evalXMLDict.has_textXMLDict.includeXMLDict.is_emptyXMLDict.is_textXMLDict.node_xmlXMLDict.nodesXMLDict.parse_xmlXMLDict.value_xmlXMLDict.wrapXMLDict.xml_dict"
},

]}
