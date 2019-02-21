var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Algencan.jl-1",
    "page": "Readme",
    "title": "Algencan.jl",
    "category": "section",
    "text": "Algencan.jl is a JuMP / MathProgBase interface to the Algencan nonlinear solver.Algencan is a high performance and large scale Augmented Lagrangian solver written by Ernesto Birgin and Mario Martínez. It has many special features like being able to use HSL library functions to speed up linear algebra with sparse matrices and some smart acceleration strategies.StatusAt this point this is alpha software. I am doing this first release to freeze a version that works with Julia 0.6.4 and move on to Julia 1.0.Installation:You can simply doPkg.clone(\"https://github.com/pjssilva/Algencan.jl\")\nPkg.build(\"Algencan\")\nThis will download Algencan\'s code, compile it and make it available to the Algencan.jl package. However there is a major caveat here. At this point I am compiling Algencan without any HSL support. This has major influence on Algencan behavior and performance. So use HSL whenver you have access to it.You can try to compile Algencan with HSL support you need to get the code from the Tango project website and compile it yourself, following the authors instructions to use the HSL libraries and the directions below. Note that the Algencan library has to be available before installing Algencan.jl so that it can be used by it at installation. So this compilation needs to be done before doint the Pkg.clone.***Hints to self compilation of Algencan with HSL libraries***Add the option -fPIC to  CFLAGS and FFLAGS in the top of the mainMakefile. Change any numbered compiler version to use the default one in your system. For examplo gcc-4.9 should become gcc.Prepare your HSL code as instructed in the README file you got fromAlgencan. It should be located in sources\\hsl.Go back to the initial Algencan dir.\nType make and compile Algencan.\nMove to the lib directory, where you can find the libalgencan.a fileand type:gcc -shared -o libalgencan.so -Wl,--whole-archive libalgencan.a \\\\\n    -Wl,--no-whole-archive -lgfortran -L$PWD -lhslYou should now have a file named libalgencan.so in the lib directory.\nCreate a environmental library named ALGENCAN_LIB_DIR pointing to thelib directory. You can proceed to install Algencan.jl as instructed above."
},

]}
