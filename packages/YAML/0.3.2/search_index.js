var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#YAML-1",
    "page": "Readme",
    "title": "YAML",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: ) (Image: ) (Image: )(Image: Build Status) (Image: Coverage Status)YAML is a flexible data serialization format that is designed to be easily read and written by human beings.This library parses YAML documents into native Julia types. (Dumping Julia objects to YAML has not yet been implemented.)"
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "For most purposes there is one important function: YAML.load, which takes a string and parses it the first YAML document it finds.To parse a file use YAML.load_file, and to parse every document in a file use YAML.load_all or YAML.load_all_file.Given a YAML document like the followingreceipt:     Oz-Ware Purchase Invoice\ndate:        2012-08-06\ncustomer:\n    given:   Dorothy\n    family:  Gale\n\nitems:\n    - part_no:   A4786\n      descrip:   Water Bucket (Filled)\n      price:     1.47\n      quantity:  4\n\n    - part_no:   E1628\n      descrip:   High Heeled \"Ruby\" Slippers\n      size:      8\n      price:     100.27\n      quantity:  1\n\nbill-to:  &id001\n    street: |\n            123 Tornado Alley\n            Suite 16\n    city:   East Centerville\n    state:  KS\n\nship-to:  *id001\n\nspecialDelivery:  >\n    Follow the Yellow Brick\n    Road to the Emerald City.\n    Pay no attention to the\n    man behind the curtain.It can be loaded withimport YAML\n\ndata = YAML.load(open(\"test.yml\"))\n\nprintln(data)Which will show you something like this.{\"date\"=>Aug 6, 2012 12:00:00 AM PDT,\"ship-to\"=>{\"street\"=>\"123 Tornado Alley\\nSuite 16\\n\",\"state\"=>\"KS\",\"city\"=>\"East Centerville\"},\"customer\"=>{\"given\"=>\"Dorothy\",\"family\"=>\"Gale\"},\"specialDelivery\"=>\"Follow the Yellow Brick\\nRoad to the Emerald City.\\nPay no attention to the\\nman behind the curtain.\\n\",\"items\"=>{{\"price\"=>1.47,\"descrip\"=>\"Water Bucket (Filled)\",\"part_no\"=>\"A4786\",\"quantity\"=>4}  …  {\"price\"=>100.27,\"size\"=>8,\"descrip\"=>\"High Heeled \\\"Ruby\\\" Slippers\",\"part_no\"=>\"E1628\",\"quantity\"=>1}},\"bill-to\"=>{\"street\"=>\"123 Tornado Alley\\nSuite 16\\n\",\"state\"=>\"KS\",\"city\"=>\"East Centerville\"},\"receipt\"=>\"Oz-Ware Purchase Invoice\"}Note that ints and floats are recognized, as well as timestamps which are parsed into CalendarTime objects. Also, anchors and references work as expected, without making a copy."
},

{
    "location": "#Not-yet-implemented-1",
    "page": "Readme",
    "title": "Not yet implemented",
    "category": "section",
    "text": "Emitting julia objects to YAML.\nParsing sexigesimal numbers.\nFractions of seconds in timestamps.\nSpecific time-zone offsets in timestamps.\nApplication specific tags."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "YAML.AliasEventYAML.AliasTokenYAML.AnchorTokenYAML.BlockEndTokenYAML.BlockEntryTokenYAML.BlockMappingStartTokenYAML.BlockSequenceStartTokenYAML.BufferedInputYAML.ComposerYAML.ComposerErrorYAML.ConstructorYAML.ConstructorErrorYAML.DEFAULT_MAPPING_TAGYAML.DEFAULT_SCALAR_TAGYAML.DEFAULT_SEQUENCE_TAGYAML.DEFAULT_TAGSYAML.DirectiveTokenYAML.DocumentEndEventYAML.DocumentEndTokenYAML.DocumentStartEventYAML.DocumentStartTokenYAML.ESCAPE_CODESYAML.ESCAPE_REPLACEMENTSYAML.EventYAML.EventStreamYAML.FlowEntryTokenYAML.FlowMappingEndTokenYAML.FlowMappingStartTokenYAML.FlowSequenceEndTokenYAML.FlowSequenceStartTokenYAML.KeyTokenYAML.MappingEndEventYAML.MappingNodeYAML.MappingStartEventYAML.MarkYAML.NodeYAML.ParserErrorYAML.QueueYAML.ResolverYAML.ScalarEventYAML.ScalarNodeYAML.ScalarTokenYAML.ScannerErrorYAML.SequenceEndEventYAML.SequenceNodeYAML.SequenceStartEventYAML.SimpleKeyYAML.SpanYAML.StreamEndEventYAML.StreamEndTokenYAML.StreamStartEventYAML.StreamStartTokenYAML.TagTokenYAML.TokenYAML.TokenStreamYAML.ValueTokenYAML.YAMLYAML.YAMLDocIteratorYAML._constructorYAML._fillYAML.add_indentYAML.bool_valuesYAML.check_block_entryYAML.check_directiveYAML.check_document_endYAML.check_document_startYAML.check_keyYAML.check_plainYAML.check_valueYAML.composeYAML.compose_documentYAML.compose_mapping_nodeYAML.compose_nodeYAML.compose_scalar_nodeYAML.compose_sequence_nodeYAML.construct_documentYAML.construct_mappingYAML.construct_objectYAML.construct_scalarYAML.construct_sequenceYAML.construct_undefinedYAML.construct_yaml_binaryYAML.construct_yaml_boolYAML.construct_yaml_floatYAML.construct_yaml_intYAML.construct_yaml_mapYAML.construct_yaml_nullYAML.construct_yaml_objectYAML.construct_yaml_omapYAML.construct_yaml_pairsYAML.construct_yaml_seqYAML.construct_yaml_setYAML.construct_yaml_strYAML.construct_yaml_timestampYAML.default_implicit_resolversYAML.default_yaml_constructorsYAML.dequeue!YAML.doneYAML.enqueue!YAML.evalYAML.fetch_aliasYAML.fetch_anchorYAML.fetch_block_entryYAML.fetch_block_scalarYAML.fetch_directiveYAML.fetch_document_endYAML.fetch_document_indicatorYAML.fetch_document_startYAML.fetch_doubleYAML.fetch_flow_collection_endYAML.fetch_flow_collection_startYAML.fetch_flow_entryYAML.fetch_flow_mapping_endYAML.fetch_flow_mapping_startYAML.fetch_flow_scalarYAML.fetch_flow_sequence_endYAML.fetch_flow_sequence_startYAML.fetch_foldedYAML.fetch_keyYAML.fetch_literalYAML.fetch_more_tokensYAML.fetch_plainYAML.fetch_singleYAML.fetch_stream_endYAML.fetch_stream_startYAML.fetch_tagYAML.fetch_valueYAML.flatten_mappingYAML.forward!YAML.forwardchars!YAML.get_markYAML.includeYAML.loadYAML.load_allYAML.load_all_fileYAML.load_fileYAML.need_more_tokensYAML.nextYAML.next_possible_simple_keyYAML.parse_block_mapping_first_keyYAML.parse_block_mapping_keyYAML.parse_block_mapping_valueYAML.parse_block_nodeYAML.parse_block_node_or_indentless_sequenceYAML.parse_block_sequence_entryYAML.parse_block_sequence_first_entryYAML.parse_document_contentYAML.parse_document_endYAML.parse_document_startYAML.parse_flow_mapping_empty_valueYAML.parse_flow_mapping_first_keyYAML.parse_flow_mapping_keyYAML.parse_flow_mapping_valueYAML.parse_flow_nodeYAML.parse_flow_sequence_entryYAML.parse_flow_sequence_entry_mapping_endYAML.parse_flow_sequence_entry_mapping_keyYAML.parse_flow_sequence_entry_mapping_valueYAML.parse_flow_sequence_first_entryYAML.parse_implicit_document_startYAML.parse_indentless_sequence_entryYAML.parse_nodeYAML.parse_stream_startYAML.peekYAML.prefixYAML.process_directivesYAML.process_empty_scalarYAML.remove_possible_simple_keyYAML.reset!YAML.resolveYAML.save_possible_simple_keyYAML.scan_anchorYAML.scan_block_scalarYAML.scan_block_scalar_breaksYAML.scan_block_scalar_ignored_lineYAML.scan_block_scalar_indentationYAML.scan_block_scalar_indicatorsYAML.scan_directiveYAML.scan_directive_ignored_lineYAML.scan_directive_nameYAML.scan_flow_scalarYAML.scan_flow_scalar_breaksYAML.scan_flow_scalar_non_spacesYAML.scan_flow_scalar_spacesYAML.scan_line_breakYAML.scan_plainYAML.scan_plain_spacesYAML.scan_tagYAML.scan_tag_directive_handleYAML.scan_tag_directive_prefixYAML.scan_tag_handleYAML.scan_tag_uriYAML.scan_to_next_tokenYAML.scan_uri_escapesYAML.scan_yaml_directive_numberYAML.scan_yaml_directive_valueYAML.stale_possible_simple_keysYAML.startYAML.timestamp_patYAML.unwind_indentYAML.whitespace"
},

]}
