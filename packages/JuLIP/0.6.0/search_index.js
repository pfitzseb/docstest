var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#JuLIP.jl-Documentation-1",
    "page": "Home",
    "title": "JuLIP.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": ""
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": ""
},

{
    "location": "#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Further-notes-1",
    "page": "Home",
    "title": "Further notes",
    "category": "section",
    "text": "Implementation Notes\nTemporary Notes that have no other place"
},

{
    "location": "ImplementationNotes/#",
    "page": "Implementation Notes",
    "title": "Implementation Notes",
    "category": "page",
    "text": ""
},

{
    "location": "ImplementationNotes/#Implementation-Notes-1",
    "page": "Implementation Notes",
    "title": "Implementation Notes",
    "category": "section",
    "text": "TODO: these are very out of date and need an update"
},

{
    "location": "ImplementationNotes/#Prototypes-1",
    "page": "Implementation Notes",
    "title": "Prototypes",
    "category": "section",
    "text": "For commonly used functions such as set_positions! etc, a prototype is defined which just throws an error. The point of this prototype is that (a) it can be imported from different packages / sub-packages, and (b) it provides documentation. This is done using @protofun."
},

{
    "location": "ImplementationNotes/#Storage-of-positions,-forces,-etc-1",
    "page": "Implementation Notes",
    "title": "Storage of positions, forces, etc",
    "category": "section",
    "text": "Atomic positions are stored either as a Vector{Point{DIM,T}} or as a Matrix{T} of dimension DIM x Npoints, where normally DIM == 3 and T == Float64. The conversion between these can be done for free using reinterpret.Note that ASE internally stores positions as a Npoints x DIM matrix, but this memory layout is not efficient for codes that can exploit fast loops.The vector of forces (or negative forces aka gradient) is stored either as a Vector{Vec{DIM,T}} or as a  Matrix{T} or dimensions DIM x Npoints.The types Point, Vec are from the FixedSizeArrays package and should in principle allow fast linear algebra operations on small arrays without having to write explicit loops."
},

{
    "location": "ImplementationNotes/#Neighbour-lists-1",
    "page": "Implementation Notes",
    "title": "Neighbour lists",
    "category": "section",
    "text": "Because the matscipy neighbour list is so fast we don\'t bother ever storing and updating the neighbourlist. Instead a calculator can just"
},

{
    "location": "tempnotes/#",
    "page": "Temporary Notes",
    "title": "Temporary Notes",
    "category": "page",
    "text": ""
},

{
    "location": "tempnotes/#Installing-numba-and-llvmlite-correctly-1",
    "page": "Temporary Notes",
    "title": "Installing numba and llvmlite correctly",
    "category": "section",
    "text": "This will probably be needed to get chemview to run, though at the moment it seems ipywidgets is the real culprit and there is little hope for a quick fix.git clone https://github.com/numba/llvmlite\ncd llvmlite\nLLVM_CONFIG=/Users/ortner/gits/julia/usr/tools/llvm-config python setup.py install\nLLVM_CONFIG=/Users/ortner/gits/julia/usr/tools/llvm-config pip install numbathen start ipython and check that import numba works, then start Julia and check that using PyCall; @pyimport numba works as well."
},

{
    "location": "tempnotes/#(Old)-Alternative-Installation-Instructions-for-imolecule-1",
    "page": "Temporary Notes",
    "title": "(Old) Alternative Installation Instructions for imolecule",
    "category": "section",
    "text": "If Option 1 fails, then try the following instructions, which  were only tested on OS X.To install imolecule simply typepip install imoleculein a terminal.Installing OpenBabel is relatively straightforward; the key issue is to get the Python bindings set up correctly, especially since there are normally multiple Python versions on an OS X system (Apple, homebrew and anaconda). The following instructions worked for 2.3.90, but make sure to change the SWIG version number directories as needed:conda install cmake lxml swig\ngit clone https://github.com/openbabel/openbabel.git\ncd openbabel\ncmake ../openbabel-2.3.2 -DPYTHON_BINDINGS=ON -DRUN_SWIG=ON -DCMAKE_INSTALL_PREFIX=~/anaconda -DPYTHON_INCLUDE_DIR=~/anaconda/include/python2.7 -DCMAKE_LIBRARY_PATH=~/anaconda/lib -DSWIG_DIR=~/anaconda/share/swig/3.0.2/ -DSWIG_EXECUTABLE=~/anaconda/bin/swig -DPYTHON_LIBRARY=~/anaconda/lib/libpython2.7.so\nmake\nmake installThis should have installed all libraries and python packages in ~/anaconda and the data files in /usr/local/share/openbabel/2.3.90/. To tell babel where to find them, the following lines must be added to ~/.bash_profile:export BABEL_DATADIR=\"/usr/local/share/openbabel/2.3.90/\"\nexport BABEL_LIBDIR=\"/Users/ortner/anaconda/lib/openbabel/2.3.90/\"<!– (Update: the configuration can be written directly to a JSON file, which ought to circumvent the need for OpenBabel. Need to test this on a clean system.) –>"
},

]}
