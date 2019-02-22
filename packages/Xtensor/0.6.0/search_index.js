var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#![Xtensor.jl](xtensor-julia.svg)-1",
    "page": "Readme",
    "title": "(Image: Xtensor.jl)",
    "category": "section",
    "text": "(Image: Travis) (Image: Appveyor) (Image: Documentation Status) (Image: Join the Gitter Chat)Julia package for the xtensor-julia library, the Julia bindings for xtensor.xtensor is a C++ library for multi-dimensional arrays enabling numpy-style broadcasting and lazy computing.\nxtensor-julia enables inplace use of julia arrays in C++ with all the benefits from xtensor\nC++ universal function and broadcasting\nSTL - compliant APIs.\nA broad coverage of numpy APIs (see the numpy to xtensor cheat sheet).The Julia bindings for xtensor are based on the CxxWrap.jl C++ library."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg; Pkg.add(\"Xtensor\");"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "To get started with using Xtensor.jl and xtensor-julia, check out the full documentationhttp://xtensor-julia.readthedocs.io/"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "xtensor-julia offers two container types wrapping julia arrays inplace to provide an xtensor semanticsjltensor\njlarray.Both containers enable the numpy-style APIs of xtensor (see the numpy to xtensor cheat sheet).On the one hand, jlarray has a dynamic number of dimensions. It can be reshaped dynamically and the new shape is reflected on the Julia side.\nOn the other hand jltensor has a compile time number of dimensions, specified with a template parameter. Shapes of jltensor instances are stack allocated, making jltensor a significantly faster expression than jlarray."
},

{
    "location": "#Example-1:-Use-an-algorithm-of-the-C-standard-library-with-Julia-array.-1",
    "page": "Readme",
    "title": "Example 1: Use an algorithm of the C++ standard library with Julia array.",
    "category": "section",
    "text": "C++ code#include <numeric>                        // Standard library import for std::accumulate\n#include <cxx_wrap.hpp>                   // libcxxwrap import to define Julia bindings\n#include \"xtensor-julia/jltensor.hpp\"     // Import the jltensor container definition\n#include \"xtensor/xmath.hpp\"              // xtensor import for the C++ universal functions\n\ndouble sum_of_sines(xt::jltensor<double, 2> m)\n{\n    auto sines = xt::sin(m);  // sines does not actually hold values.\n    return std::accumulate(sines.cbegin(), sines.cend(), 0.0);\n}\n\nJLCXX_MODULE define_julia_module(jlcxx::Module& mod)\n{\n    mod.method(\"sum_of_sines\", sum_of_sines);\n}Julia Codeusing xtensor_julia_test\n\narr = [[1.0 2.0]\n       [3.0 4.0]]\n\ns = sum_of_sines(arr)\nsOutputs1.1350859243855171"
},

{
    "location": "#Example-2:-Create-a-numpy-style-universal-function-from-a-C-scalar-function-1",
    "page": "Readme",
    "title": "Example 2: Create a numpy-style universal function from a C++ scalar function",
    "category": "section",
    "text": "C++ code#include <cxx_wrap.hpp>\n#include \"xtensor-julia/jlvectorize.hpp\"\n\ndouble scalar_func(double i, double j)\n{\n    return std::sin(i) - std::cos(j);\n}\n\nJLCXX_MODULE define_julia_module(jlcxx::Module& mod)\n{\n    mod.method(\"vectorized_func\", xt::jlvectorize(scalar_func));\n}Julia Codeusing xtensor_julia_test\n\nx = [[ 0.0  1.0  2.0  3.0  4.0]\n     [ 5.0  6.0  7.0  8.0  9.0]\n     [10.0 11.0 12.0 13.0 14.0]]\ny = [1.0, 2.0, 3.0, 4.0, 5.0]\nz = xt.vectorized_func(x, y)\nzOutputs[[-0.540302  1.257618  1.89929   0.794764 -1.040465],\n [-1.499227  0.136731  1.646979  1.643002  0.128456],\n [-1.084323 -0.583843  0.45342   1.073811  0.706945]]"
},

{
    "location": "#Building-the-HTML-Documentation-1",
    "page": "Readme",
    "title": "Building the HTML Documentation",
    "category": "section",
    "text": "xtensor-julia\'s documentation is built with three toolsdoxygen\nsphinx\nbreatheWhile doxygen must be installed separately, you can install breathe by typingpip install breatheBreathe can also be installed with condaconda install -c conda-forge breatheFinally, build the documentation withmake htmlfrom the docs subdirectory."
},

{
    "location": "#Running-the-C-tests-1",
    "page": "Readme",
    "title": "Running the C++ tests",
    "category": "section",
    "text": "From deps/buildcmake -D JlCxx_DIR=/path/to/.julia/v0.6/CxxWrap/deps/usr/lib/cmake/JlCxx -D BUILD_TESTS=ON .."
},

{
    "location": "#Dependencies-on-xtensor,-xtensor-julia,-and-CxxWrap-1",
    "page": "Readme",
    "title": "Dependencies on xtensor, xtensor-julia, and CxxWrap",
    "category": "section",
    "text": "Xtensor.jl depends on xtensor-julia, xtensor and CxxWrap librariesXtensor.jl xtensor xtensor-julia CxxWrap\nmaster >=0.18.1,<0.19 0.6.0 >=0.8.1,<0.9\n0.6.0 >=0.18.1,<0.19 0.6.0 >=0.8.1,<0.9\n0.5.0 >=0.18.0,<0.19 0.5.0 >=0.6,<0.7\n0.4.0 >=0.17.1,<0.18 0.4.0 >=0.6,<0.7\n0.3.0 >=0.16.3,<0.17 0.3.0 >=0.6,<0.7\n0.2.1 >=0.16.1,<0.17  >=0.5,<0.6\n0.2.0 >=0.16.0,<0.17  >=0.5,<0.6\n0.1.0 >=0.15.4,<0.16  >=0.5,<0.6These dependencies are automatically resolved when using the Julia package manager."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "We use a shared copyright model that enables all contributors to maintain the copyright on their contributions.This software is licensed under the BSD-3-Clause license. See the LICENSE file for details."
},

]}
