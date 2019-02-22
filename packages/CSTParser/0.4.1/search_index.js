var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CSTParser-1",
    "page": "Readme",
    "title": "CSTParser",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: CSTParser) (Image: codecov) (Image: Build status)A parser for Julia using Tokenize that aims to extend the built-in parser by providing additional meta information along with the resultant AST. "
},

{
    "location": "#Additional-Output-1",
    "page": "Readme",
    "title": "Additional Output",
    "category": "section",
    "text": "EXPR\'s are iterable producing children in the order that they appear in the source code, including punctuation. \nExample: \nf(x) = x*2 becomes [f(x), =, x*2]\nf(x) becomes [f, (, x, )]\nThe byte span of each EXPR is stored allowing a mapping between byte position in the source code and the releveant parsed expression. The span of a single token includes any trailing whitespace, newlines or comments. This also allows for fast partial parsing of modified source code.\nFormatting hints are generated as the source code is parsed (e.g. mismatched indents for blocks, missing white space around operators). \nThe declaration of modules, functions, datatypes and variables are tracked and stored in the relevant hierarchical scopes attatched to the expressions that declare the scope. This allows for a mapping between any identifying symbol and the relevant code that it refers to."
},

{
    "location": "#Structure-1",
    "page": "Readme",
    "title": "Structure",
    "category": "section",
    "text": "Expressions are represented solely by the following types:Parser.SyntaxNode\n  Parser.EXPR\n  Parser.INSTANCE\n    Parser.HEAD{K}\n    Parser.IDENTIFIER\n    Parser.KEYWORD{K}\n    Parser.LITERAL{K}\n    Parser.OPERATOR{P,K,dot}\n    Parser.PUNCTUATION\n  Parser.QUOTENODEThe K parameterisation refers to the kind of the associated token as specified by Tokenize.Tokens.Kind. The P and dot parameters for operators refers to the precedence of the operator and whether it is dotted (e.g. .+).INSTANCEs represent singular objects that may have a concrete or implicit relation to a portion of the source text. In the the former case they have a span storing the width in bytes that they occupy in the source text, in the latter case their span is 0. Additionally, IDENTIFIERs store their value as a Symbol and LITERALs as a String.EXPR are equivalent to Base.Expr but have extra fields to store their span and any punctuation tokens."
},

{
    "location": "autodocs/#CSTParser.@closer",
    "page": "Docstrings",
    "title": "CSTParser.@closer",
    "category": "macro",
    "text": "@closer ps rule body\n\nContinues parsing closing on rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.@default",
    "page": "Docstrings",
    "title": "CSTParser.@default",
    "category": "macro",
    "text": "@default ps body\n\nParses the next expression using default closure rules.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.@nocloser",
    "page": "Docstrings",
    "title": "CSTParser.@nocloser",
    "category": "macro",
    "text": "@nocloser ps rule body\n\nContinues parsing not closing on rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.@precedence",
    "page": "Docstrings",
    "title": "CSTParser.@precedence",
    "category": "macro",
    "text": "@precedence ps prec body\n\nContinues parsing binary operators until it hits a more loosely binding operator (with precdence lower than prec).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.check_reformat",
    "page": "Docstrings",
    "title": "CSTParser.check_reformat",
    "category": "function",
    "text": "check_reformat()\n\nReads and parses all files in current directory, applys formatting fixes and checks that the output AST remains the same.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.check_span",
    "page": "Docstrings",
    "title": "CSTParser.check_span",
    "category": "function",
    "text": "check_span(x, neq = [])\n\nRecursively checks whether the span of an expression equals the sum of the span of its components. Returns a vector of failing expressions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.compare",
    "page": "Docstrings",
    "title": "CSTParser.compare",
    "category": "function",
    "text": "compare(x,y)\n\nRecursively checks whether two Base.Expr are the same. Returns unequal sub- expressions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.contributes_scope",
    "page": "Docstrings",
    "title": "CSTParser.contributes_scope",
    "category": "function",
    "text": "contributes_scope(x)\n\nChecks whether the body of x is included in the toplevel namespace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.get_id",
    "page": "Docstrings",
    "title": "CSTParser.get_id",
    "category": "function",
    "text": "get_id(x)\n\nGet the IDENTIFIER name of a variable, possibly in the presence of  type declaration operators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.get_sig",
    "page": "Docstrings",
    "title": "CSTParser.get_sig",
    "category": "function",
    "text": "get_sig(x)\n\nReturns the full signature of function, macro and datatype definitions.  Should only be called when has_sig(x) == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.get_t",
    "page": "Docstrings",
    "title": "CSTParser.get_t",
    "category": "function",
    "text": "get_t(x)\n\nBasic inference in the presence of type declarations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.lex_ws_comment",
    "page": "Docstrings",
    "title": "CSTParser.lex_ws_comment",
    "category": "function",
    "text": "lex_ws_comment(l::Lexer, c)\n\nHaving hit an initial whitespace/comment/semicolon continues collecting similar Chars until they end. Returns a WS token with an indication of newlines/ semicolons. Indicating a semicolons takes precedence over line breaks as the former is equivalent to the former in most cases.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse",
    "page": "Docstrings",
    "title": "CSTParser.parse",
    "category": "function",
    "text": "parse(str, cont = false)\n\nParses the passed string. If cont is true then will continue parsing until the end of the string returning the resulting expressions in a TOPLEVEL block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_array",
    "page": "Docstrings",
    "title": "CSTParser.parse_array",
    "category": "function",
    "text": "parse_array(ps)\n\nHaving hit \'[\' return either:\n\nA vect\nA vcat\nA comprehension\nAn array (vcat of hcats)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_call",
    "page": "Docstrings",
    "title": "CSTParser.parse_call",
    "category": "function",
    "text": "parse_call(ps, ret)\n\nParses a function call. Expects to start before the opening parentheses and is passed the expression declaring the function name, ret.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_curly",
    "page": "Docstrings",
    "title": "CSTParser.parse_curly",
    "category": "function",
    "text": "parse_curly(ps, ret)\n\nParses the juxtaposition of ret with an opening brace. Parses a comma seperated list.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_expression",
    "page": "Docstrings",
    "title": "CSTParser.parse_expression",
    "category": "function",
    "text": "parse_expression(ps)\n\nParses an expression until closer(ps) == true. Expects to enter the ParseState the token before the the beginning of the expression and ends on the last token.\n\nAcceptable starting tokens are:\n\nA keyword\nAn opening parentheses or brace.\nAn operator.\nAn instance (e.g. identifier, number, etc.)\nAn @.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_generator",
    "page": "Docstrings",
    "title": "CSTParser.parse_generator",
    "category": "function",
    "text": "parse_generator(ps)\n\nHaving hit for not at the beginning of an expression return a generator. Comprehensions are parsed as SQUAREs containing a generator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_if",
    "page": "Docstrings",
    "title": "CSTParser.parse_if",
    "category": "function",
    "text": "parse_if(ps, ret, nested=false, puncs=[])\n\nParse an if block.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_macrocall",
    "page": "Docstrings",
    "title": "CSTParser.parse_macrocall",
    "category": "function",
    "text": "parse_macrocall(ps)\n\nParses a macro call. Expects to start on the @.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_paren",
    "page": "Docstrings",
    "title": "CSTParser.parse_paren",
    "category": "function",
    "text": "parse_paren(ps, ret)\n\nParses an expression starting with a (.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_ref",
    "page": "Docstrings",
    "title": "CSTParser.parse_ref",
    "category": "function",
    "text": "parse_ref(ps, ret)\n\nHandles cases where an expression - ret - is followed by [. Parses the following bracketed expression and modifies it\'s .head appropriately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_string_or_cmd",
    "page": "Docstrings",
    "title": "CSTParser.parse_string_or_cmd",
    "category": "function",
    "text": "parsestringor_cmd(ps)\n\nWhen trying to make an INSTANCE from a string token we must check for interpolating opoerators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_tuple",
    "page": "Docstrings",
    "title": "CSTParser.parse_tuple",
    "category": "function",
    "text": "parse_tuple(ps, ret)\n\nret is followed by a comma so tries to parse the rest of the tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.parse_unary",
    "page": "Docstrings",
    "title": "CSTParser.parse_unary",
    "category": "function",
    "text": "parse_unary(ps)\n\nHaving hit a unary operator at the start of an expression return a call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CSTParser.remlineinfo!",
    "page": "Docstrings",
    "title": "CSTParser.remlineinfo!",
    "category": "function",
    "text": "remlineinfo!(x)\n\nRemoves line info expressions. (i.e. Expr(:line, 1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CSTParser.@addctxCSTParser.@closebraceCSTParser.@closeparenCSTParser.@closerCSTParser.@closesquareCSTParser.@defaultCSTParser.@enterctxCSTParser.@exitctxCSTParser.@nocloserCSTParser.@precedenceCSTParser.AbstractCSTParser.AbstractEXPRCSTParser.AnonFuncOpCSTParser.ArrowOpCSTParser.AssignmentOpCSTParser.BareModuleCSTParser.BeginCSTParser.BinaryOpCallCSTParser.BinarySyntaxOpCallCSTParser.BitShiftOpCSTParser.BlockCSTParser.BracesCSTParser.BracesCatCSTParser.CSTParserCSTParser.CallCSTParser.ChainOpCallCSTParser.CloserCSTParser.Closer_TMPCSTParser.ColonOpCSTParser.ColonOpCallCSTParser.ComparisonCSTParser.ComparisonOpCSTParser.ComparisonOpCallCSTParser.ComprehensionCSTParser.ConditionalOpCSTParser.ConditionalOpCallCSTParser.ConstCSTParser.CurlyCSTParser.DddotOpCSTParser.DeclarationOpCSTParser.DictComprehensionCSTParser.DoCSTParser.DotOpCSTParser.EXPRCSTParser.EmptyWSCSTParser.EmptyWSTokenCSTParser.ErrorCSTParser.ErrorTokenCSTParser.ExportCSTParser.Expr_charCSTParser.Expr_cmdCSTParser.Expr_floatCSTParser.Expr_intCSTParser.Expr_tcmdCSTParser.FALSECSTParser.FileCSTParser.FileHCSTParser.FilterCSTParser.FlattenCSTParser.ForCSTParser.FunctionDefCSTParser.GeneratorCSTParser.GlobalCSTParser.GlobalRefDOCCSTParser.GlobalRefDocCSTParser.HcatCSTParser.HeadCSTParser.IDENTIFIERCSTParser.INSTANCECSTParser.IfCSTParser.ImportCSTParser.ImportAllCSTParser.InvisBracketsCSTParser.KEYWORDCSTParser.KwCSTParser.LITERALCSTParser.LazyAndOpCSTParser.LazyOrOpCSTParser.LeafNodeCSTParser.LetCSTParser.LocalCSTParser.LtoRCSTParser.MacroCSTParser.MacroCallCSTParser.MacroNameCSTParser.ModuleHCSTParser.MutableCSTParser.NOTHINGCSTParser.NewLineWSCSTParser.OPERATORCSTParser.OuterCSTParser.PUNCTUATIONCSTParser.ParametersCSTParser.ParseStateCSTParser.PipeOpCSTParser.PlusOpCSTParser.PowerOpCSTParser.PrimeOpCSTParser.PrimitiveCSTParser.ProjectCSTParser.QuoteCSTParser.QuotenodeCSTParser.RationalOpCSTParser.RefCSTParser.ReturnCSTParser.RowCSTParser.SemiColonWSCSTParser.StringHCSTParser.StructCSTParser.TRUECSTParser.TYPEMAX_INT128_STRCSTParser.TYPEMAX_INT64_STRCSTParser.TimesOpCSTParser.TopLevelCSTParser.TryCSTParser.TupleHCSTParser.TypedComprehensionCSTParser.TypedHcatCSTParser.TypedVcatCSTParser.UNICODE_OPS_REVERSECSTParser.UnaryOpCallCSTParser.UnarySyntaxOpCallCSTParser.UsingCSTParser.VcatCSTParser.VectCSTParser.WSCSTParser.WhereOpCSTParser.WhereOpCallCSTParser.WhileCSTParser._arg_idCSTParser._get_import_blockCSTParser._parse_refCSTParser._unescape_stringCSTParser.accept_commaCSTParser.accept_endCSTParser.accept_rbraceCSTParser.accept_rparenCSTParser.accept_rsquareCSTParser.adjustspanCSTParser.check_baseCSTParser.check_fileCSTParser.check_reformatCSTParser.check_spanCSTParser.clear_at!CSTParser.closerCSTParser.compareCSTParser.contributes_scopeCSTParser.convert_iter_assignCSTParser.create_tmpCSTParser.cst_parsefileCSTParser.debugCSTParser.defines_abstractCSTParser.defines_anon_functionCSTParser.defines_datatypeCSTParser.defines_functionCSTParser.defines_macroCSTParser.defines_moduleCSTParser.defines_mutableCSTParser.defines_primitiveCSTParser.defines_structCSTParser.dropleadlingnewlineCSTParser.evalCSTParser.expr_importCSTParser.fix_rangeCSTParser.flatten_tupleCSTParser.flisp_parseCSTParser.flisp_parsefileCSTParser.get_arg_nameCSTParser.get_arg_typeCSTParser.get_argsCSTParser.get_bodyCSTParser.get_curly_paramsCSTParser.get_idCSTParser.get_inner_genCSTParser.get_iterCSTParser.get_nameCSTParser.get_sigCSTParser.get_sig_paramsCSTParser.get_tCSTParser.get_where_paramsCSTParser.has_sigCSTParser.includeCSTParser.infer_tCSTParser.is_andCSTParser.is_anon_funcCSTParser.is_assignmentCSTParser.is_colonCSTParser.is_commaCSTParser.is_condCSTParser.is_dddotCSTParser.is_ddotCSTParser.is_declCSTParser.is_dotCSTParser.is_elofCSTParser.is_eqCSTParser.is_exorCSTParser.is_floatCSTParser.is_func_callCSTParser.is_ifCSTParser.is_importCSTParser.is_importallCSTParser.is_inCSTParser.is_integerCSTParser.is_issubtCSTParser.is_issuptCSTParser.is_lbraceCSTParser.is_lit_stringCSTParser.is_lparenCSTParser.is_lsquareCSTParser.is_minusCSTParser.is_moduleCSTParser.is_notCSTParser.is_nothingCSTParser.is_numberCSTParser.is_pairarrowCSTParser.is_plusCSTParser.is_primeCSTParser.is_puncCSTParser.is_rangeCSTParser.is_rbraceCSTParser.is_rparenCSTParser.is_rsquareCSTParser.is_starCSTParser.is_valid_iteratorCSTParser.is_whereCSTParser.isajuxtapositionCSTParser.isassignmentCSTParser.isbinaryopCSTParser.isboolCSTParser.iscommaCSTParser.isemptywsCSTParser.isidentifierCSTParser.isinstanceCSTParser.iskwCSTParser.ispunctuationCSTParser.isstringCSTParser.issyntaxcallCSTParser.issyntaxunarycallCSTParser.isunaryandbinaryopCSTParser.isunaryopCSTParser.julia_normalization_mapCSTParser.lex_ws_commentCSTParser.longest_common_prefixCSTParser.nextCSTParser.non_dotted_opCSTParser.norm_astCSTParser.normalize_julia_identifierCSTParser.parseCSTParser.parse_abstractCSTParser.parse_arrayCSTParser.parse_beginCSTParser.parse_blockCSTParser.parse_bracesCSTParser.parse_callCSTParser.parse_comma_sepCSTParser.parse_comp_operatorCSTParser.parse_compoundCSTParser.parse_constCSTParser.parse_curlyCSTParser.parse_directoryCSTParser.parse_doCSTParser.parse_docCSTParser.parse_dot_modCSTParser.parse_endCSTParser.parse_exportCSTParser.parse_expressionCSTParser.parse_fileCSTParser.parse_forCSTParser.parse_functionCSTParser.parse_generatorCSTParser.parse_globalCSTParser.parse_ifCSTParser.parse_importsCSTParser.parse_iterCSTParser.parse_kwCSTParser.parse_letCSTParser.parse_localCSTParser.parse_macroCSTParser.parse_macrocallCSTParser.parse_moduleCSTParser.parse_mutableCSTParser.parse_operatorCSTParser.parse_operator_anon_funcCSTParser.parse_operator_colonCSTParser.parse_operator_condCSTParser.parse_operator_dotCSTParser.parse_operator_eqCSTParser.parse_operator_powerCSTParser.parse_operator_whereCSTParser.parse_parametersCSTParser.parse_parenCSTParser.parse_primitiveCSTParser.parse_quoteCSTParser.parse_rangesCSTParser.parse_refCSTParser.parse_returnCSTParser.parse_string_or_cmdCSTParser.parse_structCSTParser.parse_tryCSTParser.parse_tupleCSTParser.parse_unaryCSTParser.parse_unary_colonCSTParser.parse_whileCSTParser.precedenceCSTParser.read_commentCSTParser.read_wsCSTParser.recover_endmarkerCSTParser.rem_callCSTParser.rem_curlyCSTParser.rem_dddotCSTParser.rem_declCSTParser.rem_invisCSTParser.rem_kwCSTParser.rem_subtypeCSTParser.rem_whereCSTParser.remlineinfo!CSTParser.sized_uint_literalCSTParser.sized_uint_oct_literalCSTParser.skip_to_nlCSTParser.spanCSTParser.speed_testCSTParser.str_valueCSTParser.term_cCSTParser.test_findCSTParser.test_orderCSTParser.tostrCSTParser.trailing_ws_lengthCSTParser.update_from_tmp!CSTParser.update_span!CSTParser.update_to_default!CSTParser.utf8proc_map_customCSTParser.valCSTParser.wstypeCSTParser.x_CmdCSTParser.x_Str"
},

]}
