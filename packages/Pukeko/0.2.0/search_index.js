var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Pukeko.jl)"
},

{
    "location": "#Pukeko.jl-1",
    "page": "Readme",
    "title": "Pukeko.jl",
    "category": "section",
    "text": "Testing for Julia, simplified. Supports Julia versions 0.7, and 1.x.(Image: Build Status)"
},

{
    "location": "#Features,-Differences-1",
    "page": "Readme",
    "title": "Features, Differences",
    "category": "section",
    "text": "Minimal macros: Macros are neat, but can be hard to understand. The Base.Test macros do many things in the name of generality, but as a result generate a lot of code and stress the compiler. Pukeko aims for minimal complexity in its test macros, which essentially just call functions. Pukeko has familiar @test and @test_throws macros to make moving from Base.Test as easy as possible. As little work as possible is done for the usual case (tests passing).\nFunctions: Base.Test has testsets that are defined by @testset begin end blocks. These blocks do not introduce proper scopes and tend to lead to very large functions with a high level of nesting. Pukeko uses plain-old-functions as a testset and uses modules to collect all the tests to be executed together. Minimal magic, maximum clarity, less danger of reusing variables accidentally, and less compiler strain (large functions are hard on the Julia compiler).\nParallel testing: Larger projects inevitably end up with a large number of tests. There are typically many tests per file, spread across many files. Normally this involves having one central test/runtests.jl file that includes other test/*.jl files. This is good for automated CI services like Travis, but often developer testing machines can run more than one test at a time. Pukeko\'s module-and-functions pattern naturally makes each of these test/*.jl files runnable individually or as part of a larger test run: ls test/ | xargs -I % julia --project=. %\nUse command line for...: Pukeko makes use of commandline flags for customization. Highlights include selectively running tests, printing out run times for tests to identify slow tests, and changing behaviour on test failures.Pukeko follows the JuMP Style Guide."
},

{
    "location": "#Minimal-example-1",
    "page": "Readme",
    "title": "Minimal example",
    "category": "section",
    "text": "# test/runtests.jl\n\nmodule MyTests\n    using Pukeko  # @test, @test_throws\n\n    function test_arithmetic()\n        @test 2 + 2 == 4\n        @test 2 * 3 == 6\n    end\n\n    function _test_parametric(value, value_exp)\n        @test value * value == value_exp\n    end\n    Pukeko.@parametric _test_parametric [(1, 1), (2, 4), (3, 9)]\nend\n\nimport Pukeko\nPukeko.run_tests(MyTests)\n# 4 test function(s) ran successfully in module MyTests"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Package by Iain Dunning.Pukeko photo from Wikipedia."
},

{
    "location": "autodocs/#Pukeko.@parametric",
    "page": "Docstrings",
    "title": "Pukeko.@parametric",
    "category": "macro",
    "text": "@parametric func iterable\n\nCreate a version of func that is prefixed with TEST_PREFIX in the module that this macro is called for each value in iterable. If a value in iterable is a tuple, it is splatted into the function arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.@test",
    "page": "Docstrings",
    "title": "Pukeko.@test",
    "category": "macro",
    "text": "@test expression\n\nTest that expression is true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.@test_throws",
    "page": "Docstrings",
    "title": "Pukeko.@test_throws",
    "category": "macro",
    "text": "@test_throws exception_type expression\n\nTest that expression throws an exception of type exception_type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.TEST_PREFIX",
    "page": "Docstrings",
    "title": "Pukeko.TEST_PREFIX",
    "category": "constant",
    "text": "TEST_PREFIX\n\nFunctions with this string at the the start of their name will be treated as self-contained sets of tests.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.TestException",
    "page": "Docstrings",
    "title": "Pukeko.TestException",
    "category": "type",
    "text": "TestException\n\nThe Exceptionthrown when a Pukeko test fails. Used byrun_tests` to distinguish between test errors and unexpected errors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.parametric",
    "page": "Docstrings",
    "title": "Pukeko.parametric",
    "category": "function",
    "text": "parametric(module_to_test, func, iterable)\n\nCreate a version of func that is prefixed with TEST_PREFIX in module_to_test for each value in iterable. If a value in iterable is a tuple, it is splatted into the function arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.run_tests",
    "page": "Docstrings",
    "title": "Pukeko.run_tests",
    "category": "function",
    "text": "run_tests(module_to_test; fail_fast=false)\n\nRuns all the sets of tests in module module_to_test. Test sets are defined as functions with names that begin with TEST_PREFIX. A summary is printed after all test sets have been run and if there were any failures an exception is thrown.\n\nConfiguration options:\n\nIf fail_fast==false (default), if any one test function fails, the others will still run. If true, testing will stop on the first failure. The commandline argument --PUKEKO_FAIL_FAST will override fail_fast to true for all run_tests calls.\nIf timing==true (default is false), print elapsed time and memory allocation statistics for every test function. The commandline argument --PUKEKO_TIMING will override timing to true for all run_tests calls.\nIf match_name!=nothing (default is nothing), only run tests that contain match_name in their names. The commandline argument --PUKEKO_MATH=str will override match_name to str for all run_tests calls.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.test_equal",
    "page": "Docstrings",
    "title": "Pukeko.test_equal",
    "category": "function",
    "text": "test_equal(value_left, value_right, [linfo])\n\nTest that value_left is equal to value_right. Calls to this are generated by @test for the case of @test expr_left == expr_right.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pukeko.test_true",
    "page": "Docstrings",
    "title": "Pukeko.test_true",
    "category": "function",
    "text": "test_true(value, [linfo])\n\nThrows iff value is not true. Calls to this are generated by @test.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Pukeko.@parametricPukeko.@testPukeko.@test_throwsPukeko.PukekoPukeko.TEST_PREFIXPukeko.TestExceptionPukeko.evalPukeko.includePukeko.parametricPukeko.run_testsPukeko.test_equalPukeko.test_true"
},

]}
