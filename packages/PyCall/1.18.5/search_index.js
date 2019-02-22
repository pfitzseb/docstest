var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Calling-Python-functions-from-the-Julia-language-1",
    "page": "Readme",
    "title": "Calling Python functions from the Julia language",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)(Image: PyCall) (Image: PyCall) (Image: PyCall)This package provides the ability to directly call and fully interoperate with Python from the Julia language.  You can import arbitrary Python modules from Julia, call Python functions (with automatic conversion of types between Julia and Python), define Python classes from Julia methods, and share large data structures between Julia and Python without copying them."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, just use the package manager to run Pkg.add(\"PyCall\") to install the files.  Julia 0.5 or later is required.The latest development version of PyCall is available from https://github.com/stevengj/PyCall.jl.  If you want to switch to this after installing the package, run Pkg.checkout(\"PyCall\"); Pkg.build(\"PyCall\").By default on Mac and Windows systems, Pkg.add(\"PyCall\") or Pkg.build(\"PyCall\") will use the Conda.jl package to install a minimal Python distribution (via Miniconda) that is private to Julia (not in your PATH).  You can use the Conda Julia package to install more Python packages, and import Conda to print the Conda.PYTHONDIR directory where python was installed. On GNU/Linux systems, PyCall will default to using the python3 program (if any, otherwise python) in your PATH.The advantage of a Conda-based configuration is particularly compelling if you are installing PyCall in order to use packages like PyPlot.jl or SymPy.jl, as these can then automatically install their Python dependencies.  (To exploit this in your own packages, use the pyimport_conda function described below.)"
},

{
    "location": "#Specifying-the-Python-version-1",
    "page": "Readme",
    "title": "Specifying the Python version",
    "category": "section",
    "text": "If you want to use a different version of Python than the default, you can change the Python version by setting the PYTHON environment variable to the path of the python (or python3 etc.) executable and then re-running Pkg.build(\"PyCall\"). In Julia:ENV[\"PYTHON\"] = \"... path of the python program you want ...\"\nPkg.build(\"PyCall\")Note also that you will need to re-run Pkg.build(\"PyCall\") if your python program changes significantly (e.g. you switch to a new Python distro, or you switch from Python 2 to Python 3).To force Julia to use its own Python distribution, via Conda, simply set ENV[\"PYTHON\"] to the empty string \"\" and re-run Pkg.build(\"PyCall\").The current Python version being used is stored in the pyversion global variable of the PyCall module.  You can also look at PyCall.libpython to find the name of the Python library or PyCall.pyprogramname for the python program name.  If it is using the Conda Python, PyCall.conda will be true.(Technically, PyCall does not use the python program per se: it links directly to the libpython library.  But it finds the location of libpython by running python during Pkg.build.)Subsequent builds of PyCall (e.g. when you update the package via Pkg.update) will use the same Python executable name by default, unless you set the PYTHON environment variable or delete the file Pkg.dir(\"PyCall\",\"deps\",\"PYTHON\").Note: If you use Python virtualenvs, then be aware that PyCall uses the virtualenv it was built with, even if you switch virtualenvs.  If you want to switch PyCall to use a different virtualenv, then you should switch virtualenvs and run rm(Pkg.dir(\"PyCall\",\"deps\",\"PYTHON\")); Pkg.build(\"PyCall\").Note: Usually, the necessary libraries are installed along with Python, but pyenv on MacOS requires you to install it with env PYTHON_CONFIGURE_OPTS=\"--enable-framework\" pyenv install 3.4.3.  The Enthought Canopy Python distribution is currently not supported. As a general rule, we tend to recommend the Anaconda Python distribution on MacOS and Windows, or using the Julia Conda package, in order to minimize headaches."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Here is a simple example to call Python\'s math.sin function and compare it to the built-in Julia sin:using PyCall\n@pyimport math\nmath.sin(math.pi / 4) - sin(pi / 4)  # returns 0.0Type conversions are automatically performed for numeric, boolean, string, IO stream, date/period, and function types, along with tuples, arrays/lists, and dictionaries of these types. (Python functions can be converted/passed to Julia functions and vice versa!)  Other types are supported via the generic PyObject type, below.Python submodules must be imported by a separate @pyimport call, and in this case you must supply an identifier to to use in Julia.  For example@pyimport numpy.random as nr\nnr.rand(3,4)Multidimensional arrays exploit the NumPy array interface for conversions between Python and Julia.  By default, they are passed from Julia to Python without making a copy, but from Python to Julia a copy is made; no-copy conversion of Python to Julia arrays can be achieved with the PyArray type below.Keyword arguments can also be passed. For example, matplotlib\'s pyplot uses keyword arguments to specify plot options, and this functionality is accessed from Julia by:@pyimport matplotlib.pyplot as plt\nx = linspace(0,2*pi,1000); y = sin(3*x + 4*cos(2*x));\nplt.plot(x, y, color=\"red\", linewidth=2.0, linestyle=\"--\")\nplt.show()However, for better integration with Julia graphics backends and to avoid the need for the show function, we recommend using matplotlib via the Julia PyPlot module.Arbitrary Julia functions can be passed to Python routines taking function arguments.  For example, to find the root of cos(x) - x, we could call the Newton solver in scipy.optimize via:@pyimport scipy.optimize as so\nso.newton(x -> cos(x) - x, 1)A macro exists for mimicking Python\'s \"with statement\". For example:@pywith pybuiltin(\"open\")(\"file.txt\",\"w\") as f begin\n    f[:write](\"hello\")\nendThe type of f can be specified with f::T (for example, to override automatic conversion, use f::PyObject). Similarly, if the context manager returns a type which is automatically converted to a Julia type, you will have override this via @pywith EXPR::PyObject ....Important: The biggest difference from Python is that object attributes/members are accessed with o[:attribute] rather than o.attribute, so that o.method(...) in Python is replaced by o[:method](...) in Julia.  Also, you use get(o, key) rather than o[key].  (However, you can access integer indices via o[i] as in Python, albeit with 1-based Julian indices rather than 0-based Python indices.)  (This is because Julia does not permit overloading the . operator yet.)  See also the section on PyObject below, as well as the pywrap function to create anonymous modules that simulate . access (this is what @pyimport does).  For example, using Biopython we can do:@pyimport Bio.Seq as s\n@pyimport Bio.Alphabet as a\nmy_dna = s.Seq(\"AGTACACTGGT\", a.generic_dna)\nmy_dna[:find](\"ACT\")whereas in Python the last step would have been my_dna.find(\"ACT\")."
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "Here are solutions to some common problems:As mentioned above, use foo[:bar] and foo[:bar](...) rather than foo.bar and foo.bar(...),respectively, to access attributes and methods of Python objects.By default, PyCall doesn\'t include the current directory in the Python search path.   If you want to do that (in order to load a Python module from the current directory), just run pushfirst!(PyVector(pyimport(\"sys\")[\"path\"]), \"\")."
},

{
    "location": "#Python-object-interfaces-1",
    "page": "Readme",
    "title": "Python object interfaces",
    "category": "section",
    "text": "The @pyimport macro is built on top of several routines for manipulating Python objects in Julia, via a type PyObject described below.  These can be used to have greater control over the types and data passed between Julia and Python, as well as to access additional Python functionality (especially in conjunction with the low-level interfaces described later)."
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "#PyObject-1",
    "page": "Readme",
    "title": "PyObject",
    "category": "section",
    "text": "The PyCall module also provides a new type PyObject (a wrapper around PyObject* in Python\'s C API) representing a reference to a Python object.Constructors PyObject(o) are provided for a number of Julia types, and PyCall also supplies convert(T, o::PyObject) to convert PyObjects back into Julia types T.  Currently, the types supported are numbers (integer, real, and complex), booleans, strings, IO streams, dates/periods, and functions, along with tuples and arrays/lists thereof, but more are planned.  (Julia symbols are converted to Python strings.)Given o::PyObject, o[:attribute] is equivalent to o.attribute in Python, with automatic type conversion.  To get an attribute as a PyObject without type conversion, do o[\"attribute\"] instead. The keys(o::PyObject) function returns an array of the available attribute symbols.Given o::PyObject, get(o, key) is equivalent to o[key] in Python, with automatic type conversion.  To get as a PyObject without type conversion, do get(o, PyObject, key), or more generally get(o, SomeType, key).  You can also supply a default value to use if the key is not found by get(o, key, default) or get(o, SomeType, key, default).  Similarly, set!(o, key, val) is equivalent to o[key] = val in Python, and delete!(o, key) is equivalent to del o[key] in Python.   For one or more integer indices, o[i] in Julia is equivalent to o[i-1] in Python.You can call an o::PyObject via o(args...) just like in Python (assuming that the object is callable in Python).  The explicit pycall form is still useful in Julia if you want to specify the return type.pystr(o) and pyrepr(o) are analogous to str and repr in Python, respectively."
},

{
    "location": "#Arrays-and-PyArray-1",
    "page": "Readme",
    "title": "Arrays and PyArray",
    "category": "section",
    "text": ""
},

{
    "location": "#From-Julia-to-Python-1",
    "page": "Readme",
    "title": "From Julia to Python",
    "category": "section",
    "text": "Assuming you have NumPy installed (true by default if you use Conda), then a Julia a::Array of NumPy-compatible elements is converted by PyObject(a) into a NumPy wrapper for the same data, i.e. without copying the data.  Julia arrays are stored in column-major order, and since NumPy supports column-major arrays this is not a problem.However, the default ordering of NumPy arrays created in Python is row-major, and some Python packages will throw an error if you try to pass them column-major NumPy arrays.  To deal with this, you can use PyReverseDims(a) to pass a Julia array as a row-major NumPy array with the dimensions reversed. For example, if a is a 3x4x5 Julia array, then PyReverseDims(a) passes it as a 5x4x3 NumPy row-major array (without making a copy of the underlying data).A Vector{UInt8} object in Julia, by default, is converted to a Python bytearray object.   If you want a bytes object instead, you can use the function pybytes(a)."
},

{
    "location": "#From-Python-to-Julia-1",
    "page": "Readme",
    "title": "From Python to Julia",
    "category": "section",
    "text": "Multidimensional NumPy arrays (ndarray) are supported and can be converted to the native Julia Array type, which makes a copy of the data.Alternatively, the PyCall module also provides a new type PyArray (a subclass of AbstractArray) which implements a no-copy wrapper around a NumPy array (currently of numeric types or objects only).  Just use PyArray as the return type of a pycall returning an ndarray, or call PyArray(o::PyObject) on an ndarray object o.  (Technically, a PyArray works for any Python object that uses the NumPy array interface to provide a data pointer and shape information.)Conversely, when passing arrays to Python, Julia Array types are converted to PyObject types without making a copy via NumPy, e.g. when passed as pycall arguments."
},

{
    "location": "#PyVector-1",
    "page": "Readme",
    "title": "PyVector",
    "category": "section",
    "text": "The PyCall module provides a new type PyVector (a subclass of AbstractVector) which implements a no-copy wrapper around an arbitrary Python list or sequence object.  (Unlike PyArray, the PyVector type is not limited to NumPy arrays, although using PyArray for the latter is generally more efficient.)  Just use PyVector as the return type of a pycall returning a list or sequence object (including tuples), or call PyVector(o::PyObject) on a sequence object o.A v::PyVector supports the usual v[index] referencing and assignment, along with delete! and pop! operations.  copy(v) converts v to an ordinary Julia Vector."
},

{
    "location": "#PyDict-1",
    "page": "Readme",
    "title": "PyDict",
    "category": "section",
    "text": "Similar to PyVector, PyCall also provides a type PyDict (a subclass of Association) that implements a no-copy wrapper around a Python dictionary (or any object implementing the mapping protocol).  Just use PyDict as the return type of a pycall returning a dictionary, or call PyDict(o::PyObject) on a dictionary object o.  By default, a PyDict is an Any => Any dictionary (or actually PyAny => PyAny) that performs runtime type inference, but if your Python dictionary has known, fixed types you can insteady use PyDict{K,V} given the key and value types K and V respectively.Currently, passing Julia dictionaries to Python makes a copy of the Julia dictionary."
},

{
    "location": "#PyTextIO-1",
    "page": "Readme",
    "title": "PyTextIO",
    "category": "section",
    "text": "Julia IO streams are converted into Python objects implementing the RawIOBase interface, so they can be used for binary I/O in Python.  However, some Python code (notably unpickling) expects a stream implementing the TextIOBase interface, which differs from RawIOBase mainly in that read an readall functions return strings rather than byte arrays.  If you need to pass an IO stream as a text-IO object, just call PyTextIO(io::IO) to convert it.(There doesn\'t seem to be any good way to determine automatically whether Python wants a stream argument to return strings or binary data.  Also, unlike Python, Julia does not open files separately in \"text\" or \"binary\" modes, so we cannot determine the conversion simply from how the file was opened.)"
},

{
    "location": "#PyAny-1",
    "page": "Readme",
    "title": "PyAny",
    "category": "section",
    "text": "The PyAny type is used in conversions to tell PyCall to detect the Python type at runtime and convert to the corresponding native Julia type.  That is, pycall(func, PyAny, ...) and convert(PyAny, o::PyObject) both automatically convert their result to a native Julia type (if possible).   This is convenient, but will lead to slightly worse performance (due to the overhead of runtime type-checking and the fact that the Julia JIT compiler can no longer infer the type)."
},

{
    "location": "#Calling-Python-1",
    "page": "Readme",
    "title": "Calling Python",
    "category": "section",
    "text": "In most cases, the @pyimport macro automatically makes the appropriate type conversions to Julia types based on runtime inspection of the Python objects.  However greater control over these type conversions (e.g. to use a no-copy PyArray for a Python multidimensional array rather than copying to an Array) can be achieved by using the lower-level functions below.  Using pycall in cases where the Python return type is known can also improve performance, both by eliminating the overhead of runtime type inference and also by providing more type information to the Julia compiler.pycall(function::PyObject, returntype::Type, args...).   Call the given Python function (typically looked up from a module) with the given args... (of standard Julia types which are converted automatically to the corresponding Python types if possible), converting the return value to returntype (use a returntype of PyObject to return the unconverted Python object reference, or of PyAny to request an automated conversion). For convenience, a macro @pycall exists which automatically converts @pycall function(args...)::returntype into pycall(function,returntype,args...).\npyimport(s): Import the Python module s (a string or symbol) and return a pointer to it (a PyObject).  Functions or other symbols in the module may then be looked up by s[name] where name is a string (for the raw PyObject) or symbol (for automatic type-conversion).  Unlike the @pyimport macro, this does not define a Julia module and members cannot be accessed with s.name.\npy\"...\" evaluates \"...\" as a Python string, equivalent to Python\'s eval function, and returns the result converted to PyAny.  Alternatively, py\"...\"o returns the raw PyObject (which can then be manually converted if desired).   You can interpolate Julia variables and other expressions into the Python code with $, which interpolates the value (converted to PyObject) of the given expression–-data is not passed as a string, so this is different from ordinary Julia string interpolation.  e.g. py\"sum($([1,2,3]))\" calls the Python sum function on the Julia array [1,2,3], returning 6. In contrast, if you use $$ before the interpolated expression, then the value of the expression is inserted as a string into the Python code, allowing you to generate Python code itself via Julia expressions. For example, if x=\"1+1\" in Julia, then py\"$x\" returns the string \"1+1\", but py\"$$x\" returns 2. If you use py\"\"\"...\"\"\" to pass a multi-line string, the string can contain arbitrary Python code (not just a single expression) to be evaluated, but the return value is nothing; this is useful e.g. to define pure-Python functions, and is equivalent to Python\'s exec statement.  (If you define a Python global g in a multiline py\"\"\"...\"\"\" string, you can retrieve it in Julia by subsequently evaluating py\"g\".)\npybuiltin(s): Look up s (a string or symbol) among the global Python builtins.  If s is a string it returns a PyObject, while if s is a symbol it returns the builtin converted to PyAny.  (You can also use py\"s\" to look up builtins or other Python globas.)\npywrap(o::PyObject) returns a wrapper w that is an anonymous module which provides (read) access to converted versions of o\'s members as w.member.  (For example, @pyimport module as name is equivalent to name = pywrap(pyimport(\"module\")).)  If the Python module contains identifiers that are reserved words in Julia (e.g. function), they cannot be accessed as w.member; one must instead use w.pymember(:member) (for the PyAny conversion) or w.pymember(\"member\") (for the raw PyObject).  pywrap is rather inefficient since it converts every member of o at once; you are generally encouraged to simply access members via o[:member] rather than using pywrap.Occasionally, you may need to pass a keyword argument to Python that is a reserved word in Julia. For example, calling f(x, function=g) will fail because function is a reserved word in Julia. In such cases, you can use the lower-level Julia syntax f(x; :function=>g)."
},

{
    "location": "#Calling-Julia-from-Python-1",
    "page": "Readme",
    "title": "Calling Julia from Python",
    "category": "section",
    "text": "Julia functions get converted to callable Python objects, so you can easily call Julia from Python via callback function arguments. The pyjulia module allows you to call Julia directly from Python, and also uses PyCall to do its conversions.A Julia function f(args...) is ordinarily converted to a callable Python object p(args...) that first converts its Python arguments into Julia arguments by the default PyAny conversion, calls f, then converts the Julia return value of f back into a Python object with the default PyObject(...) conversion.    However, you can exert lower-level control over these argument/return conversions by calling pyfunction(f, ...) or pyfunctionret(f, ...); see the documentation ?pyfunction and ?pyfunctionret for more information."
},

{
    "location": "#Defining-Python-Classes-1",
    "page": "Readme",
    "title": "Defining Python Classes",
    "category": "section",
    "text": "@pydef creates a Python class whose methods are implemented in Julia. For instance,@pyimport numpy.polynomial as P\n@pydef mutable struct Doubler <: P.Polynomial\n    function __init__(self, x=10)\n        self[:x] = x\n    end\n    my_method(self, arg1::Number) = arg1 + 20\n    x2.get(self) = self[:x] * 2\n    function x2.set!(self, new_val)\n        self[:x] = new_val / 2\n    end\nend\nDoubler()[:x2]is essentially equivalent to the following Python code:import numpy.polynomial\nclass Doubler(numpy.polynomial.Polynomial):\n    def __init__(self, x=10):\n        self.x = x\n    def my_method(self, arg1): return arg1 + 20\n    @property\n    def x2(self): return self.x * 2\n    @x2.setter\n    def x2(self, new_val):\n        self.x = new_val / 2\nDoubler().x2The method arguments and return values are automatically converted between Julia and Python. All Python special methods are supported (__len__, __add__, etc.).@pydef allows for multiple inheritance of Python classes:@pydef mutable struct SomeType <: (BaseClass1, BaseClass2)\n    ...\nendHere\'s another example using Tkinter:using PyCall\n@pyimport Tkinter as tk\n\n@pydef mutable struct SampleApp <: tk.Tk\n    __init__(self, args...; kwargs...) = begin\n        tk.Tk[:__init__](self, args...; kwargs...)\n        self[:label] = tk.Label(text=\"Hello, world!\")\n        self[:label][:pack](padx=10, pady=10)\n    end\nend\n\napp = SampleApp()\napp[:mainloop]()"
},

{
    "location": "#GUI-Event-Loops-1",
    "page": "Readme",
    "title": "GUI Event Loops",
    "category": "section",
    "text": "For Python packages that have a graphical user interface (GUI), notably plotting packages like matplotlib (or MayaVi or Chaco), it is convenient to start the GUI event loop (which processes things like mouse clicks) as an asynchronous task within Julia, so that the GUI is responsive without blocking Julia\'s input prompt.  PyCall includes functions to implement these event loops for some of the most common cross-platform GUI toolkits: wxWidgets, GTK+ version 2 (via PyGTK) or version 3 (via PyGObject), and Qt (via the PyQt4 or PySide Python modules).You can set a GUI event loop via:pygui_start(gui::Symbol=pygui()).  Here, gui is either :wx, :gtk, :gtk3, :tk, or :qt to start the respective toolkit\'s event loop.  (:qt will use PyQt4 or PySide, preferring the former; if you need to require one or the other you can instead use :qt_pyqt4 or :qt_pyside, respectively.) It defaults to the return value of pygui(), which returns a current default GUI (see below).  Passing a gui argument also changes the default GUI, equivalent to calling pygui(gui) below.  You may start event loops for more than one GUI toolkit (to run simultaneously).  Calling pygui_start more than once for a given toolkit does nothing (except to change the current pygui default).\npygui(): return the current default GUI toolkit (Symbol).  If the default GUI has not been set already, this is the first of :tk, :qt, :wx, :gtk, or :gtk3 for which the corresponding Python package is installed.  pygui(gui::Symbol) changes the default GUI to gui.\npygui_stop(gui::Symbol=pygui()): Stop any running event loop for gui (which defaults to the current return value of pygui).  Returns true if an event loop was running, and false otherwise.To use these GUI facilities with some Python libraries, it is enough to simply start the appropriate toolkit\'s event-loop before importing the library.  However, in other cases it is necessary to explicitly tell the library which GUI toolkit to use and that an interactive mode is desired.  To make this even easier, it is convenient to have wrapper modules around popular Python libraries, such as the PyPlot module for Julia."
},

{
    "location": "#Low-level-Python-API-access-1",
    "page": "Readme",
    "title": "Low-level Python API access",
    "category": "section",
    "text": "If you want to call low-level functions in the Python C API, you can do so using ccall.Use @pysym(func::Symbol) to get a function pointer to pass to ccall given a symbol func in the Python API.  e.g. you can call int Py_IsInitialized() by ccall(@pysym(:Py_IsInitialized), Int32, ()).\nPyCall defines the typealias PyPtr for PythonObject* argument types, and PythonObject (see above) arguments are correctly converted to this type.  PythonObject(p::PyPtr) creates a Julia wrapper around a PyPtr return value.\nUse PyObject and the convert routines mentioned above to convert Julia types to/from PyObject* references.\nIf a new reference is returned by a Python function, immediately convert the PyPtr return values to PythonObject objects in order to have their Python reference counts decremented when the object is garbage collected in Julia.  i.e. PythonObject(ccall(func, PyPtr, ...)). Important: for Python routines that return a borrowed reference, you should instead do pyincref(PyObject(...)) to obtain a new reference.\nYou can call pyincref(o::PyObject) and pydecref(o::PyObject) to manually increment/decrement the reference count.  This is sometimes needed when low-level functions steal a reference or return a borrowed one.\nThe function pyerr_check(msg::AbstractString) can be used to check if a Python exception was thrown, and throw a Julia exception (which includes both msg and the Python exception object) if so.  The Python exception status may be cleared by calling pyerr_clear().\nThe function pytype_query(o::PyObject) returns a native Julia type that o can be converted into, if possible, or PyObject if not.\npyisinstance(o::PyObject, t::Symbol) can be used to query whether o is of a given Python type (where t is the identifier of a global PyTypeObject in the Python C API), e.g. pyisinstance(o, :PyDict_Type) checks whether o is a Python dictionary.  Alternatively, pyisinstance(o::PyObject, t::PyObject) performs the same check given a Python type object t.  pytypeof(o::PyObject) returns the Python type of o, equivalent to type(o) in Python."
},

{
    "location": "#Using-PyCall-from-Julia-Modules-1",
    "page": "Readme",
    "title": "Using PyCall from Julia Modules",
    "category": "section",
    "text": "You can use PyCall from any Julia code, including within Julia modules. However, some care is required when using PyCall from precompiled Julia modules. The key thing to remember is that all Python objects (any PyObject) contain pointers to memory allocated by the Python runtime, and such pointers cannot be saved in precompiled constants.   (When a precompiled library is reloaded, these pointers will not contain valid memory addresses.)The solution is fairly simple:Python objects that you create in functions called after the module is loaded are always safe.\nIf you want to store a Python object in a global variable that is initialized automatically when the module is loaded, then initialize the variable in your module\'s __init__ function.  For a type-stable global constant, initialize the constant to PyNULL() at the top level, and then use the copy! function in your module\'s __init__ function to mutate it to its actual value.For example, suppose your module uses the scipy.optimize module, and you want to load this module when your module is loaded and store it in a global constant scipy_opt.  You could do:__precompile__() # this module is safe to precompile\nmodule MyModule\nusing PyCall\n\nconst scipy_opt = PyNULL()\n\nfunction __init__()\n    copy!(scipy_opt, pyimport_conda(\"scipy.optimize\", \"scipy\"))\nend\n\nendThen you can access the scipy.optimize functions as scipy_opt[:newton] and so on.Here, instead of pyimport, we have used the function pyimport_conda.   The second argument is the name of the Anaconda package that provides this module.   This way, if importing scipy.optimize fails because the user hasn\'t installed scipy, it will either (a) automatically install scipy and retry the pyimport if PyCall is configured to use the Conda Python install (or any other Anaconda-based Python distro for which the user has installation privileges), or (b) throw an error explaining that scipy needs to be installed, and explain how to configure PyCall to use Conda so that it can be installed automatically.   More generally, you can call pyimport(module, package, channel) to specify an optional Anaconda \"channel\" for installing non-standard Anaconda packages.(Note that you cannot use @pyimport safely with precompilation, because that declares a global constant that internally has a pointer to the module.  You can use pywrap(pyimport(...)) in your __init__ function to a assign a global variable using the . notation like @pyimport, however, albeit without the type stability of the global const as above.)"
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This package was written by Steven G. Johnson."
},

{
    "location": "autodocs/#PyCall.@py_str",
    "page": "Docstrings",
    "title": "PyCall.@py_str",
    "category": "macro",
    "text": "py\".....python code.....\"\n\nEvaluate the given Python code string in the main Python module.\n\nIf the string is a single line (no newlines), then the Python expression is evaluated and the result is returned. If the string is multiple lines (contains a newline), then the Python code is compiled and evaluated in the __main__ Python module and nothing is returned.\n\nIf the o option is appended to the string, as in py\"...\"o, then the return value is an unconverted PyObject; otherwise, it is automatically converted to a native Julia type if possible.\n\nAny $var or $(expr) expressions that appear in the Python code (except in comments or string literals) are evaluated in Julia and passed to Python via auto-generated global variables. This allows you to \"interpolate\" Julia values into Python code.\n\nSimilarly, ny $$var or $$(expr) expressions in the Python code are evaluated in Julia, converted to strings via string, and are pasted into the Python code.   This allows you to evaluate code where the code itself is generated by a Julia expression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.@pycall",
    "page": "Docstrings",
    "title": "PyCall.@pycall",
    "category": "macro",
    "text": "@pycall func(args...)::T\n\nConvenience macro which turns func(args...)::T into pycall(func, T, args...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.@pydef",
    "page": "Docstrings",
    "title": "PyCall.@pydef",
    "category": "macro",
    "text": "@pydef creates a Python class whose methods are implemented in Julia. For instance,\n\n@pyimport numpy.polynomial as P\n@pydef type Doubler <: P.Polynomial\n    __init__(self, x=10) = (self[:x] = x)\n    my_method(self, arg1::Number) = arg1 + 20\n    x2.get(self) = self[:x] * 2\n    x2.set!(self, new_val) = (self[:x] = new_val / 2)\nend\nDoubler()[:x2]\n\nis essentially equivalent to the following Python code:\n\nclass Doubler(numpy.polynomial.Polynomial):\n    def __init__(self, x=10):\n        self.x = x\n    def my_method(self, arg1): return arg1 + 20\n    @property\n    def x2(self): return self.x * 2\n    @x2.setter\n    def x2(self, new_val):\n        self.x = new_val / 2\nDoubler().x2\n\nThe method arguments and return values are automatically converted between Julia and Python. All Python special methods are supported (__len__, __add__, etc.)\n\n@pydef allows for multiple inheritance of Python types:\n\n@pydef type SomeType <: (BaseClass1, BaseClass2)\n    ...\nend\n\nMultiple dispatch works, too:\n\nx2.set!(self, new_x::Int) = ...\nx2.set!(self, new_x::Float64) = ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.@pydef_object",
    "page": "Docstrings",
    "title": "PyCall.@pydef_object",
    "category": "macro",
    "text": "@pydef_object is like @pydef, but it returns the metaclass as a PyObject instead of binding it to the class name. It\'s side-effect-free, except for the definition of the class methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.@pywith",
    "page": "Docstrings",
    "title": "PyCall.@pywith",
    "category": "macro",
    "text": "@pywith\n\nMimics a Python \'with\' statement. Usage:\n\n@pywith EXPR[::TYPE1] [as VAR[::TYPE2]] begin     BLOCK end\n\nTYPE1/TYPE2 can optionally be used to override automatic conversion to Julia types for both the context manager and variable in cases where this is not desired.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyArray",
    "page": "Docstrings",
    "title": "PyCall.PyArray",
    "category": "type",
    "text": "PyArray(o::PyObject)\n\nThis converts an ndarray object o to a PyArray.\n\nThis implements a nocopy wrapper to a NumPy array (currently of only numeric types only).\n\nIf you are using pycall and the function returns an ndarray, you can use PyArray as the return type to directly receive a PyArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyDict",
    "page": "Docstrings",
    "title": "PyCall.PyDict",
    "category": "type",
    "text": "PyDict(o::PyObject)\nPyDict(d::Dict{K,V})\n\nThis returns a PyDict, which is a no-copy wrapper around a Python dictionary.\n\nAlternatively, you can specify the return type of a pycall as PyDict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyNULL",
    "page": "Docstrings",
    "title": "PyCall.PyNULL",
    "category": "function",
    "text": "PyNULL()\n\nReturn a PyObject that has a NULL underlying pointer, i.e. it doesn\'t actually refer to any Python object.\n\nThis is useful for initializing PyObject global variables and array elements before an actual Python object is available.   For example, you might do const myglobal = PyNULL() and later on (e.g. in a module __init__ function), reassign myglobal to point to an actual object with copy!(myglobal, someobject).   This procedure will properly handle Python\'s reference counting (so that the Python object will not be freed until you are done with myglobal).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyObject",
    "page": "Docstrings",
    "title": "PyCall.PyObject",
    "category": "type",
    "text": "PyObject(juliavar)\n\nThis converts a julia variable to a PyObject, which is a reference to a Python object. You can convert back to native julia types using convert(T, o::PyObject), or using PyAny(o).\n\nGiven o::PyObject, o[:attribute] is equivalent to o.attribute in Python, with automatic type conversion.\n\nGiven o::PyObject, get(o, key) is equivalent to o[key] in Python, with automatic type conversion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyReverseDims",
    "page": "Docstrings",
    "title": "PyCall.PyReverseDims",
    "category": "function",
    "text": "PyReverseDims(array)\n\nPasses a Julia array to Python as a NumPy row-major array (rather than Julia\'s native column-major order) with the dimensions reversed (e.g. a 2×3×4 Julia array is passed as a 4×3×2 NumPy row-major array).  This is useful for Python libraries that expect row-major data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyTextIO",
    "page": "Docstrings",
    "title": "PyCall.PyTextIO",
    "category": "function",
    "text": "PyTextIO(io::IO)\nPyObject(io::IO)\n\nJulia IO streams are converted into Python objects implementing the RawIOBase interface, so they can be used for binary I/O in Python\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.PyVector",
    "page": "Docstrings",
    "title": "PyCall.PyVector",
    "category": "type",
    "text": "PyVector(o::PyObject)\n\nThis returns a PyVector object, which is a wrapper around an arbitrary Python list or sequence object.\n\nAlternatively, PyVector can be used as the return type for a pycall that returns a sequence object (including tuples).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.__pycall!",
    "page": "Docstrings",
    "title": "PyCall.__pycall!",
    "category": "function",
    "text": "Lowest level version of  pycall!(ret, o, ...), assumes pyargsptr and kw have all their args set to Python values, so we can just call the function o. Sets ret.o to the result of the call, and returns ret::PyObject.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall._pycall!",
    "page": "Docstrings",
    "title": "PyCall._pycall!",
    "category": "function",
    "text": "Low-level version of pycall!(ret, o, ...; kwargs...) Sets ret.o to the result of the call, and returns ret::PyObject\n\n\n\n\n\nLow-level version of pycall!(ret, o, ...) for when kw is already in python friendly format but you don\'t have the python tuple to hold the arguments (pyargsptr). Sets ret.o to the result of the call, and returns ret::PyObject.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.anaconda_conda",
    "page": "Docstrings",
    "title": "PyCall.anaconda_conda",
    "category": "function",
    "text": "anaconda_conda()\n\nReturn the path of the conda program if PyCall is configured to use an Anaconda install (but not the Conda.jl Python), and the empty string otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.conda",
    "page": "Docstrings",
    "title": "PyCall.conda",
    "category": "constant",
    "text": "True if we are using the Python distribution in the Conda package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.def_py_class",
    "page": "Docstrings",
    "title": "PyCall.def_py_class",
    "category": "function",
    "text": "def_py_class(type_name::AbstractString, methods::Vector;\n             base_classes=[], getsets::Vector=[])\n\ndef_py_class creates a Python class whose methods are implemented in Julia. @pydef macros expand into a call to this function.\n\nArguments\n\nmethods: a vector of tuples (py_name::String, jl_fun::Function)  py_name will be a method of the Python class, which will call jl_fun\nbase_classes: the Python base classes to inherit from.\n\nReturn value: the created class (::PyTypeObject)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.ispynull",
    "page": "Docstrings",
    "title": "PyCall.ispynull",
    "category": "function",
    "text": "ispynull(o::PyObject)\n\nTest where o contains a NULL pointer to a Python object, i.e. whether it is equivalent to a PyNULL() object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pybuiltin",
    "page": "Docstrings",
    "title": "PyCall.pybuiltin",
    "category": "function",
    "text": "pybuiltin(s::AbstractString)\n\nLook up a string or symbol s among the global Python builtins. If s is a string it returns a PyObject, while if s is a symbol it returns the builtin converted to PyAny.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pybytes",
    "page": "Docstrings",
    "title": "PyCall.pybytes",
    "category": "function",
    "text": "pybytes(b::Union{String,DenseVector{UInt8}})\n\nConvert b to a Python bytes object.   This differs from the default PyObject(b) conversion of String to a Python string (which may fail if b does not contain valid Unicode), or from the default conversion of a Vector{UInt8} to a bytearray object (which is mutable, unlike bytes).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pycall",
    "page": "Docstrings",
    "title": "PyCall.pycall",
    "category": "function",
    "text": "pycall(o::Union{PyObject,PyPtr}, returntype::TypeTuple, args...; kwargs...)\n\nCall the given Python function (typically looked up from a module) with the given args... (of standard Julia types which are converted automatically to the corresponding Python types if possible), converting the return value to returntype (use a returntype of PyObject to return the unconverted Python object reference, or of PyAny to request an automated conversion)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pycall!",
    "page": "Docstrings",
    "title": "PyCall.pycall!",
    "category": "function",
    "text": "pycall!(ret::PyObject, o::Union{PyObject,PyPtr}, returntype::Type, args...; kwargs...)\n\nSet ret to the result of pycall(o, returntype, args...; kwargs) and return convert(returntype, ret). Avoids allocating an extra PyObject for ret. See pycall for other details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyeval",
    "page": "Docstrings",
    "title": "PyCall.pyeval",
    "category": "function",
    "text": "pyeval(s::AbstractString, returntype::TypeTuple=PyAny, locals=PyDict{AbstractString, PyObject}(),\n                            input_type=Py_eval_input; kwargs...)\n\nThis evaluates s as a Python string and returns the result converted to rtype (which defaults to PyAny). The remaining arguments are keywords that define local variables to be used in the expression.\n\nFor example, pyeval(\"x + y\", x=1, y=2) returns 3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyfunction",
    "page": "Docstrings",
    "title": "PyCall.pyfunction",
    "category": "function",
    "text": "pyfunction(f, argtypes...; kwtypes...)\n\nCreate a Python object that wraps around the Julia function (or callable object) f.   Unlike PyObject(f), this allows you to specify the argument types that the Julia function expects — giving you more control and potentially better performance.\n\nkwtypes... should be a set of somekeyword=SomeType arguments giving the desired Julia type for each keyword somekeyword.  Unspecified keywords are converted to PyAny (i.e. auto-detected) by default.\n\nThe return value ret = f(...) is still converted back to a Python object by PyObject(ret).   If you want a different return-type conversion than the default of PyObject(ret), you can instead call pyfunctionret.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyfunctionret",
    "page": "Docstrings",
    "title": "PyCall.pyfunctionret",
    "category": "function",
    "text": "pyfunctionret(f, returntype, argtypes...; kwtypes...)\n\nLike pyfunction, but also lets you specify the returntype for conversion back to Python.   In particular, if ret = f(...) is the return value of f, then it is converted to Python via PyObject(returntype(ret)).\n\nIf returntype is Any, then ret is not converted to a \"native\" Python type at all, and is instead converted to a \"wrapped\" Julia object in Python.  If returntype is nothing, then the return value is discarded and nothing is returned to Python.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pygui",
    "page": "Docstrings",
    "title": "PyCall.pygui",
    "category": "function",
    "text": "pygui()\n\nReturn the current GUI toolkit as a symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pygui_start",
    "page": "Docstrings",
    "title": "PyCall.pygui_start",
    "category": "function",
    "text": "pygui_start(gui::Symbol = pygui())\n\nStart the event loop of a certain toolkit.\n\nThe argument gui defaults to the current default GUI, but it could be :wx, :gtk, :gtk3, :tk, or :qt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pygui_stop",
    "page": "Docstrings",
    "title": "PyCall.pygui_stop",
    "category": "function",
    "text": "pygui_stop(gui::Symbol = pygui())\n\nStop any running event loop for gui. The gui argument defaults to current default GUI.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyimport",
    "page": "Docstrings",
    "title": "PyCall.pyimport",
    "category": "function",
    "text": "pyimport(s::AbstractString)\n\nImport the Python module s (a string or symbol) and return a pointer to it (a PyObject). Functions or other symbols in the module may then be looked up by s[name] where name is a string (for the raw PyObject) or symbol (for automatic type-conversion). Unlike the @pyimport macro, this does not define a Julia module and members cannot be accessed with s.name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyimport_conda",
    "page": "Docstrings",
    "title": "PyCall.pyimport_conda",
    "category": "function",
    "text": "pyimport_conda(modulename, condapkg, [channel])\n\nReturns the result of pyimport(modulename) if possible.   If the module is not found, and PyCall is configured to use the Conda Python distro (via the Julia Conda package), then automatically install condapkg via Conda.add(condapkg) and then re-try the pyimport.   Other Anaconda-based Python installations are also supported as long as their conda program is functioning.\n\nIf PyCall is not using Conda and the pyimport fails, throws an exception with an error message telling the user how to configure PyCall to use Conda for automated installation of the module.\n\nThe third argument, channel is an optional Anaconda \"channel\" to use for installing the package; this is useful for packages that are not included in the default Anaconda package listing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyimport_e",
    "page": "Docstrings",
    "title": "PyCall.pyimport_e",
    "category": "function",
    "text": "pyimport_e(s::AbstractString)\n\nLike pyimport(s), but returns an ispynull(o) == true object if the module cannot be imported rather than throwing an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyrepr",
    "page": "Docstrings",
    "title": "PyCall.pyrepr",
    "category": "function",
    "text": "pyrepr(o::PyObject)\n\nReturn a string representation of o corresponding to repr(o) in Python.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pyreturn",
    "page": "Docstrings",
    "title": "PyCall.pyreturn",
    "category": "function",
    "text": "pyreturn(x) :: PyPtr\n\nPrepare PyPtr from x for passing it to Python.  If x is already a PyObject, the refcount is incremented.  Otherwise a PyObject wrapping/converted from x is created.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pystealref!",
    "page": "Docstrings",
    "title": "PyCall.pystealref!",
    "category": "function",
    "text": "\"Steal\" a reference from a PyObject: return the raw PyPtr, while setting the corresponding o.o field to NULL so that no decref will be performed when o is garbage collected.  (This means that you can no longer use o.)  Used for passing objects to Python.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pystr",
    "page": "Docstrings",
    "title": "PyCall.pystr",
    "category": "function",
    "text": "pystr(o::PyObject)\n\nReturn a string representation of o corresponding to str(o) in Python.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pystring",
    "page": "Docstrings",
    "title": "PyCall.pystring",
    "category": "function",
    "text": "pystring(o::PyObject)\n\nReturn a string representation of o.  Normally, this corresponds to repr(o) in Python, but unlike repr it should never fail (falling back to str or to printing the raw pointer if necessary).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pytype_mapping",
    "page": "Docstrings",
    "title": "PyCall.pytype_mapping",
    "category": "function",
    "text": "pytype_mapping(pytype, jltype)\n\nGiven a Python type object pytype, tell PyCall to convert it to jltype in PyAny(object) conversions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pytype_query",
    "page": "Docstrings",
    "title": "PyCall.pytype_query",
    "category": "function",
    "text": "pytype_query(o::PyObject, default=PyObject)\n\nGiven a Python object o, return the corresponding native Julia type (defaulting to default) that we convert o to in PyAny(o) conversions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PyCall.pywrap",
    "page": "Docstrings",
    "title": "PyCall.pywrap",
    "category": "function",
    "text": "pywrap(o::PyObject)\n\nThis returns a wrapper w that is an anonymous module which provides (read) access to converted versions of o\'s members as w.member.\n\nFor example, @pyimport module as name is equivalent to const name = pywrap(pyimport(\"module\"))\n\nIf the Python module contains identifiers that are reserved words in Julia (e.g. function), they cannot be accessed as w.member; one must instead use w.pymember(:member) (for the PyAny conversion) or w.pymember(\"member\") (for the raw PyObject).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PyCall.@npyinitializePyCall.@py_strPyCall.@pycallPyCall.@pycheckPyCall.@pychecknPyCall.@pycheckvPyCall.@pycheckzPyCall.@pydefPyCall.@pydef_objectPyCall.@pyglobalPyCall.@pyglobalobjPyCall.@pyglobalobjptrPyCall.@pyimportPyCall.@pylabPyCall.@pysymPyCall.@pywithPyCall.@return_not_NonePyCall.@with_ioraisePyCall.ActivatePyActCtxPyCall.BuiltinFunctionTypePyCall.DateTimeTypePyCall.DateTime_FromDateAndTimePyCall.DateTypePyCall.Date_FromDatePyCall.DeactivatePyActCtxPyCall.DeltaTypePyCall.Delta_FromDeltaPyCall.Dl_infoPyCall.EnumProcessModulesPyCall.FuncWrapperPyCall.LongIntPyCall.METH_CLASSPyCall.METH_KEYWORDSPyCall.METH_NOARGSPyCall.METH_OPyCall.METH_STATICPyCall.METH_VARARGSPyCall.MethodTypePyCall.MethodWrapperTypePyCall.NPY_ANYORDERPyCall.NPY_ARRAY_ALIGNEDPyCall.NPY_ARRAY_C_CONTIGUOUSPyCall.NPY_ARRAY_ELEMENTSTRIDESPyCall.NPY_ARRAY_ENSUREARRAYPyCall.NPY_ARRAY_ENSURECOPYPyCall.NPY_ARRAY_FORCECASTPyCall.NPY_ARRAY_F_CONTIGUOUSPyCall.NPY_ARRAY_NOTSWAPPEDPyCall.NPY_ARRAY_OWNDATAPyCall.NPY_ARRAY_UPDATEIFCOPYPyCall.NPY_ARRAY_WRITEABLEPyCall.NPY_BOOLPyCall.NPY_BYTEPyCall.NPY_CDOUBLEPyCall.NPY_CFLOATPyCall.NPY_CLONGDOUBLEPyCall.NPY_CORDERPyCall.NPY_DOUBLEPyCall.NPY_FLOATPyCall.NPY_FORTRANORDERPyCall.NPY_HALFPyCall.NPY_INTPyCall.NPY_LONGPyCall.NPY_LONGDOUBLEPyCall.NPY_LONGLONGPyCall.NPY_OBJECTPyCall.NPY_SHORTPyCall.NPY_STRINGPyCall.NPY_TYPESPyCall.NPY_UBYTEPyCall.NPY_UINTPyCall.NPY_ULONGPyCall.NPY_ULONGLONGPyCall.NPY_UNICODEPyCall.NPY_USHORTPyCall.NPY_VOIDPyCall.NULL_UInt8_PtrPyCall.NpyArrayPyCall.PYTHONHOMEPyCall.PY_WRITE_RESTRICTEDPyCall.PyAnyPyCall.PyArrayPyCall.PyArray_InfoPyCall.PyBUF_ANY_CONTIGUOUSPyCall.PyBUF_C_CONTIGUOUSPyCall.PyBUF_FORMATPyCall.PyBUF_F_CONTIGUOUSPyCall.PyBUF_INDIRECTPyCall.PyBUF_MAX_NDIMPyCall.PyBUF_NDPyCall.PyBUF_SIMPLEPyCall.PyBUF_STRIDESPyCall.PyBUF_WRITABLEPyCall.PyBufferPyCall.PyCallPyCall.PyDateTime_CAPIPyCall.PyDateTime_CheckPyCall.PyDateTime_DeltaPyCall.PyDate_CheckPyCall.PyDate_HEADPyCall.PyDelta_CheckPyCall.PyDelta_FromDSUPyCall.PyDictPyCall.PyDict_IteratorPyCall.PyErrorPyCall.PyGetSetDefPyCall.PyIOPyCall.PyIOErrorPyCall.PyMemberDefPyCall.PyMethodDefPyCall.PyNULLPyCall.PyObjectPyCall.PyObject_structPyCall.PyPtrPyCall.PyPtr_NULLPyCall.PyReverseDimsPyCall.PyString_AsStringAndSizePyCall.PyString_FromStringAndSizePyCall.PyString_SizePyCall.PyString_TypePyCall.PyTextIOPyCall.PyTypeObjectPyCall.PyTypeObject!PyCall.PyUnicode_AsUTF8StringPyCall.PyUnicode_DecodeUTF8PyCall.PyVectorPyCall.Py_EQPyCall.Py_GEPyCall.Py_GTPyCall.Py_GetVersionPyCall.Py_LEPyCall.Py_LTPyCall.Py_NEPyCall.Py_SetPythonHomePyCall.Py_TPFLAGS_BASETYPEPyCall.Py_TPFLAGS_BASE_EXC_SUBCLASSPyCall.Py_TPFLAGS_BYTES_SUBCLASSPyCall.Py_TPFLAGS_CHECKTYPESPyCall.Py_TPFLAGS_DICT_SUBCLASSPyCall.Py_TPFLAGS_GCPyCall.Py_TPFLAGS_HAVE_CLASSPyCall.Py_TPFLAGS_HAVE_GCPyCall.Py_TPFLAGS_HAVE_GETCHARBUFFERPyCall.Py_TPFLAGS_HAVE_INDEXPyCall.Py_TPFLAGS_HAVE_INPLACEOPSPyCall.Py_TPFLAGS_HAVE_ITERPyCall.Py_TPFLAGS_HAVE_NEWBUFFERPyCall.Py_TPFLAGS_HAVE_RICHCOMPAREPyCall.Py_TPFLAGS_HAVE_SEQUENCE_INPyCall.Py_TPFLAGS_HAVE_STACKLESS_EXTENSIONPyCall.Py_TPFLAGS_HAVE_STACKLESS_EXTENSION_PyCall.Py_TPFLAGS_HAVE_VERSION_TAGPyCall.Py_TPFLAGS_HAVE_WEAKREFSPyCall.Py_TPFLAGS_HEAPTYPEPyCall.Py_TPFLAGS_INT_SUBCLASSPyCall.Py_TPFLAGS_IS_ABSTRACTPyCall.Py_TPFLAGS_LIST_SUBCLASSPyCall.Py_TPFLAGS_LONG_SUBCLASSPyCall.Py_TPFLAGS_READYPyCall.Py_TPFLAGS_READYINGPyCall.Py_TPFLAGS_STRING_SUBCLASSPyCall.Py_TPFLAGS_TUPLE_SUBCLASSPyCall.Py_TPFLAGS_TYPE_SUBCLASSPyCall.Py_TPFLAGS_UNICODE_SUBCLASSPyCall.Py_TPFLAGS_VALID_VERSION_TAGPyCall.Py_bufferPyCall.Py_eval_inputPyCall.Py_file_inputPyCall.Py_hash_tPyCall.Py_jlWrapPyCall.Py_single_inputPyCall.READONLYPyCall.READ_RESTRICTEDPyCall.RESTRICTEDPyCall.T_BOOLPyCall.T_BYTEPyCall.T_CHARPyCall.T_DOUBLEPyCall.T_FLOATPyCall.T_INTPyCall.T_LONGPyCall.T_LONGLONGPyCall.T_NONEPyCall.T_OBJECTPyCall.T_OBJECT_EXPyCall.T_PYSSIZETPyCall.T_SHORTPyCall.T_STRINGPyCall.T_STRING_INPLACEPyCall.T_UBYTEPyCall.T_UINTPyCall.T_ULONGPyCall.T_ULONGLONGPyCall.T_USHORTPyCall.Tk_eventloopPyCall.TypeTuplePyCall.__init__PyCall.__pycall!PyCall._getindexPyCall._localvar_counterPyCall._maindictPyCall._picklePyCall._ps_lenPyCall._ps_ptrPyCall._pycall!PyCall._pyimportPyCall._pyjlwrap_callPyCall._pywithPyCall._startPyCall.alignedPyCall.anaconda_condaPyCall.array2pyPyCall.builtinPyCall.c_contiguousPyCall.c_void_p_TypePyCall.callsymPyCall.condaPyCall.def_py_classPyCall.delta_dsμPyCall.depfilePyCall.dlinfo1PyCall.dlinfo2PyCall.docstringPyCall.evalPyCall.eventloopsPyCall.f_contiguousPyCall.findsymPyCall.fixqtpathPyCall.format_tracebackPyCall.gstring_ptrPyCall.gtk_eventloopPyCall.gtk_requireversionPyCall.guiPyCall.hashsaltPyCall.hassymPyCall.includePyCall.ind2pyPyCall.init_datetimePyCall.inspectPyCall.install_doeventPyCall.interpolate_pycodePyCall.ioraisePyCall.is_mapping_objectPyCall.is_pyjlwrapPyCall.iscontiguousPyCall.ispybytearrayPyCall.ispynullPyCall.isseekablePyCall.istuplenPyCall.isvatuplePyCall.jlWrapIteratorTypePyCall.jlWrapTypePyCall.jl_io_readlinePyCall.jl_io_readlinesPyCall.jl_io_seekPyCall.jlfun2pyfunPyCall.jlwrap_iteratorPyCall.julia_argsPyCall.julia_kwargPyCall.libpy_handlePyCall.libpythonPyCall.maindictPyCall.make_fnamePyCall.modulenamePyCall.mpcPyCall.mpfPyCall.mpmathPyCall.mpmath_initPyCall.mpprecPyCall.npy_apiPyCall.npy_boolPyCall.npy_complexfloatingPyCall.npy_floatingPyCall.npy_initializedPyCall.npy_integerPyCall.npy_multiarrayPyCall.npy_numberPyCall.npy_typePyCall.npy_typestrsPyCall.npyinitializePyCall.parse_pydefPyCall.parse_pydef_toplevelPyCall.permanent_stringsPyCall.picklePyCall.proc_handlePyCall.py2arrayPyCall.pyFSMPyCall.pyany_toanyPyCall.pyarray_dimsPyCall.pybuiltinPyCall.pybytesPyCall.pycallPyCall.pycall!PyCall.pycall_gcPyCall.pycomplex_queryPyCall.pydate_queryPyCall.pydecrefPyCall.pydecref_PyCall.pydict_queryPyCall.pyembedPyCall.pyerr_checkPyCall.pyerr_clearPyCall.pyerr_occurredPyCall.pyevalPyCall.pyeval_PyCall.pyexcPyCall.pyexc_initializePyCall.pyexistsPyCall.pyfloat_queryPyCall.pyfunctionPyCall.pyfunction_queryPyCall.pyfunctionretPyCall.pyguiPyCall.pygui_startPyCall.pygui_stopPyCall.pygui_stop_allPyCall.pygui_worksPyCall.pyimportPyCall.pyimport_condaPyCall.pyimport_ePyCall.pyimport_namePyCall.pyincrefPyCall.pyincref_PyCall.pyint_queryPyCall.pyio_initializePyCall.pyio_initializedPyCall.pyio_jlPyCall.pyisinstancePyCall.pyjlwrap_callPyCall.pyjlwrap_deallocPyCall.pyjlwrap_docPyCall.pyjlwrap_getattrPyCall.pyjlwrap_getiterPyCall.pyjlwrap_hashPyCall.pyjlwrap_hash32PyCall.pyjlwrap_initPyCall.pyjlwrap_iternextPyCall.pyjlwrap_membernamePyCall.pyjlwrap_membersPyCall.pyjlwrap_newPyCall.pyjlwrap_reprPyCall.pyjlwrap_typePyCall.pyjlwrap_type!PyCall.pymp_queryPyCall.pynothingPyCall.pynothing_queryPyCall.pyprogramnamePyCall.pypropertyPyCall.pyptr_queryPyCall.pyqueryPyCall.pyraisePyCall.pyreprPyCall.pyreturnPyCall.pysaltPyCall.pysalt32PyCall.pysequence_queryPyCall.pysetarg!PyCall.pysetargs!PyCall.pystealref!PyCall.pystrPyCall.pystringPyCall.pystring_queryPyCall.pythonPyCall.pytype_mappingPyCall.pytype_queriesPyCall.pytype_queryPyCall.pytypeofPyCall.pyunicode_literalsPyCall.pyversionPyCall.pyversion_buildPyCall.pywrapPyCall.pywrapfnPyCall.pyxrangePyCall.qt_eventloopPyCall.reservedPyCall.set!PyCall.sizeof_PyObject_HEADPyCall.some_address_in_libpythonPyCall.some_address_in_main_exePyCall.symbols_presentPyCall.tkinter_namePyCall.tuptypePyCall.typetuplePyCall.ufuncTypePyCall.unsafe_pyjlwrap_to_objrefPyCall.wPYTHONHOMEPyCall.weakref_callbackPyCall.weakref_callback_methPyCall.weakref_callback_objPyCall.wpyprogramnamePyCall.writedimsPyCall.writeok_assignPyCall.wx_eventloopPyCall.xrange"
},

]}
