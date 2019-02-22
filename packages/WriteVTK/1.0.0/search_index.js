var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WriteVTK-1",
    "page": "Readme",
    "title": "WriteVTK",
    "category": "section",
    "text": "(Image: Build Status)This module allows to write VTK XML files, that can be visualised for example with ParaView.The data is written compressed by default, using the CodecZlib package.Rectilinear (.vtr), structured (.vts), image data (.vti) and unstructured (.vtu) grids are supported. Multiblock files (.vtm), which can point to multiple VTK files, can also be exported."
},

{
    "location": "#Contents-1",
    "page": "Readme",
    "title": "Contents",
    "category": "section",
    "text": "Installation\nRectilinear and structured meshes\nImage data\nJulia array\nUnstructured meshes\nMultiblock files\nParaview PVD files\nDo-block syntax\nAdditional options\nExamples"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "From the Julia REPL:Pkg.add(\"WriteVTK\")Then load the module in Julia with:using WriteVTK"
},

{
    "location": "#Usage:-rectilinear-and-structured-meshes-1",
    "page": "Readme",
    "title": "Usage: rectilinear and structured meshes",
    "category": "section",
    "text": ""
},

{
    "location": "#Define-a-grid-1",
    "page": "Readme",
    "title": "Define a grid",
    "category": "section",
    "text": "The function vtk_grid initialises the VTK file. This function requires a filename with no extension, and the grid coordinates. Depending on the shape of the arrays x, y and z, either a rectilinear or structured grid is created.vtkfile = vtk_grid(\"my_vtk_file\", x, y, z) # 3-D\nvtkfile = vtk_grid(\"my_vtk_file\", x, y)    # 2-DRequired array shapes for each grid type:Rectilinear grid: x, y, z are 1-D arrays with different lengths in general (Ni, Nj and Nk respectively).\nStructured grid: x, y, z are 3-D arrays with the same shape: [Ni, Nj, Nk]. For the two dimensional case, x and y are 2-D arrays with shape [Ni, Nj]Alternatively, in the case of structured grids, the grid points can be defined from a single 4-D array xyz, of dimensions [3, Ni, Nj, Nk]. For the two dimensional case xy is a 3-D array, with dimensions [2, Ni, Nj]:vtkfile = vtk_grid(\"my_vtk_file\", xyz) # 3-D\nvtkfile = vtk_grid(\"my_vtk_file\", xy)  # 2-DThis is actually more efficient than the previous formulation."
},

{
    "location": "#Add-some-data-to-the-file-1",
    "page": "Readme",
    "title": "Add some data to the file",
    "category": "section",
    "text": "The function vtk_point_data adds point data to the file. The required input is a VTK file object created by vtk_grid, an array and a string:vtk_point_data(vtkfile, p, \"Pressure\")\nvtk_point_data(vtkfile, C, \"Concentration\")\nvtk_point_data(vtkfile, vel, \"Velocity\")The array can represent either scalar or vectorial data. The shape of the array should be [Ni, Nj, Nk] for scalars, and [Ncomp, Ni, Nj, Nk] for vectors, where Ncomp is the number of components of the vector.Vector datasets can also be given as a tuple of scalar datasets, where each scalar represents a component of the vector field. Example:acc = (acc_x, acc_y, acc_z)  # acc_x, acc_y and acc_z have size [Ni, Nj, Nk]\nvtk_point_data(vtkfile, acc, \"Acceleration\")This can be useful to avoid copies of data in some cases.Cell data can also be added, using vtk_cell_data:vtk_cell_data(vtkfile, T, \"Temperature\")Note that in rectilinear and structured meshes, the cell resolution is always [Ni-1, Nj-1, Nk-1], and the dimensions of the data arrays should be consistent with that resolution."
},

{
    "location": "#Save-the-file-1",
    "page": "Readme",
    "title": "Save the file",
    "category": "section",
    "text": "Finally, close and save the file with vtk_save:outfiles = vtk_save(vtkfile)outfiles is an array of strings with the paths to the generated files. In this case, the array is of length 1, but that changes when working with multiblock files."
},

{
    "location": "#Usage:-image-data-1",
    "page": "Readme",
    "title": "Usage: image data",
    "category": "section",
    "text": "The points and cells of an image data file are defined by the number of points in each direction, (Nx, Ny, Nz). The origin of the dataset and the spacing in each direction can be optionally included. Example:Nx, Ny, Nz = 10, 12, 42\norigin = [3.0, 4.0, -3.2]\nspacing = [0.1, 0.2, 0.3]\nvtk = vtk_grid(\"my_vti_file\", Nx, Ny, Nz, origin=origin, spacing=spacing)\nvtk_save(vtk)"
},

{
    "location": "#Usage:-julia-array-1",
    "page": "Readme",
    "title": "Usage: julia array",
    "category": "section",
    "text": "A convenience function is provided to quickly save Julia arrays as image data:A = rand(100, 100, 100)\nvtk_write_array(\"my_vti_file\", A, \"my_property_name\")"
},

{
    "location": "#Usage:-unstructured-meshes-1",
    "page": "Readme",
    "title": "Usage: unstructured meshes",
    "category": "section",
    "text": "An unstructured mesh is defined by a set of points in space and a set of cells that connect those points."
},

{
    "location": "#Defining-cells-1",
    "page": "Readme",
    "title": "Defining cells",
    "category": "section",
    "text": "In WriteVTK, a cell is defined using the MeshCell type:cell = MeshCell(cell_type, connectivity)cell_type is of type VTKCellType which contains the name and an integer value that determines the type of the cell, as defined in the VTK specification (see figures 2 and 3 in that document). For convenience, WriteVTK includes a VTKCellTypes module that contains these definitions. For instance, a triangle is associated to the value cell_type = VTKCellTypes.VTK_TRIANGLE.\nconnectivity is a vector of indices that determine the mesh points that are connected by the cell. In the case of a triangle, this would be an integer array of length 3.\nNote that the connectivity indices are one-based (as opposed to zero-based), following the convention in Julia."
},

{
    "location": "#Generating-an-unstructured-VTK-file-1",
    "page": "Readme",
    "title": "Generating an unstructured VTK file",
    "category": "section",
    "text": "First, initialise the file:vtkfile = vtk_grid(\"my_vtk_file\", points, cells)points is an array with the point locations, of dimensions [dim, num_points] where dim is the dimension (1, 2 or 3) and num_points the number of points.\ncells is a MeshCell array that contains all the cells of the mesh. For example:\n# Suppose that the mesh is made of 5 points:\ncells = [MeshCell(VTKCellTypes.VTK_TRIANGLE, [1, 4, 2]),\n         MeshCell(VTKCellTypes.VTK_QUAD,     [2, 4, 3, 5])]Alternatively, the grid points can be defined from 1-D arrays x, y, z with equal lengths num_points:vtkfile = vtk_grid(\"my_vtk_file\", x, y, z, cells) # 3D\nvtkfile = vtk_grid(\"my_vtk_file\", x, y, cells)    # 2D\nvtkfile = vtk_grid(\"my_vtk_file\", x, cells)       # 1Dor from a 4-D array points, with dimension [dim, Ni, Nj, Nk] where dim is the dimension and Ni,Nj,Nk the number of points in each direction x,y,z:vtkfile = vtk_grid(\"my_vtk_file\", points, cells)These two last methods are less efficient though.Now add some data to the file. It is possible to add both point data and cell data:vtk_point_data(vtkfile, pdata, \"my_point_data\")\nvtk_cell_data(vtkfile, cdata, \"my_cell_data\")The pdata and cdata arrays must have sizes consistent with the number of points and cells in the mesh, respectively. The arrays can contain scalar and vectorial data (see here).Finally, close and save the file:outfiles = vtk_save(vtkfile)"
},

{
    "location": "#Multiblock-files-1",
    "page": "Readme",
    "title": "Multiblock files",
    "category": "section",
    "text": "Multiblock files (.vtm) are XML VTK files that can point to multiple other VTK files. They can be useful when working with complex geometries that are composed of multiple sub-domains. In order to generate multiblock files, the vtk_multiblock function must be used. The functions introduced above are then used with some small modifications.First, a multiblock file must be initialised:vtmfile = vtk_multiblock(\"my_vtm_file\")Then, each sub-grid can be generated with vtk_grid using the vtmfile object as the first argument:# First block.\nvtkfile = vtk_grid(vtmfile, x1, y1, z1)\nvtk_point_data(vtkfile, p1, \"Pressure\")\n\n# Second block.\nvtkfile = vtk_grid(vtmfile, x2, y2, z2)\nvtk_point_data(vtkfile, p2, \"Pressure\")Finally, only the multiblock file needs to be saved explicitly:outfiles = vtk_save(vtmfile)Assuming that the two blocks are structured grids, this generates the files my_vtm_file.vtm, my_vtm_file.z01.vts and my_vtm_file.z02.vts, where the vtm file points to the two vts files."
},

{
    "location": "#Paraview-Data-(PVD)-file-format-1",
    "page": "Readme",
    "title": "Paraview Data (PVD) file format",
    "category": "section",
    "text": "A pvd file is a collection of VTK files, typically for holding results at different time steps in a simulation. A pvd file is initialised with:pvd = paraview_collection(\"my_pvd_file\")VTK files are then added to the pvd file withcollection_add_timestep(pvd, vtkfile, time)Here, time is a number that represents the current time (or step) in the simulation. When all the files are added to the pvd file, it can be saved using:vtk_save(pvd)"
},

{
    "location": "#Do-block-syntax-1",
    "page": "Readme",
    "title": "Do-block syntax",
    "category": "section",
    "text": "Do-block syntax is supported by vtk_grid, vtk_multiblock and paraview_collection. At the end of the do-block, vtk_save is called implicitly on the generated VTK object. Example:# Rectilinear or structured grid\noutfiles = vtk_grid(\"my_vtk_file\", x, y, z) do vtk\n    vtk_point_data(vtk, p, \"Pressure\")\n    vtk_point_data(vtk, vel, \"Velocity\")\nend\n\n# Multiblock file\noutfiles = vtk_multiblock(\"my_vtm_file\") do vtm\n    vtk = vtk_grid(vtm, x1, y1, z1)\n    vtk_point_data(vtk, vel1, \"Velocity\")\n\n    vtk = vtk_grid(vtm, x2, y2, z2)\n    vtk_point_data(vtk, vel2, \"Velocity\")\nend"
},

{
    "location": "#Additional-options-1",
    "page": "Readme",
    "title": "Additional options",
    "category": "section",
    "text": "By default, numerical data is written to the XML files as compressed raw binary data. This can be changed using the optional compress and append parameters of the vtk_grid functions.For instance, to disable both compressing and appending raw data in the case of unstructured meshes:vtkfile = vtk_grid(\"my_vtk_file\", points, cells; compress=false, append=false)If append is true (default), data is written appended at the end of the XML file as raw binary data. Note that this violates the XML specification, although it is allowed by VTK.\nOtherwise, if append is false, data is written \"inline\", and base-64 encoded instead of raw. This is usually slower than writing raw binary data, and also results in larger files, but is valid according to the XML specification.\nIf compress is true (default), data is first compressed using zlib. Its value may also be a compression level between 1 (fast compression) and 9 (best compression)."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "See some examples in the test/ directory."
},

{
    "location": "autodocs/#WriteVTK.InputDataType",
    "page": "Docstrings",
    "title": "WriteVTK.InputDataType",
    "category": "constant",
    "text": "Types allowed as input to vtk_point_data() and vtk_cell_data().\n\nEither (abstract) arrays or tuples of arrays are allowed. In the second case, the length of the tuple determines the number of components of the input data (e.g. if N = 3, it corresponds to a 3D vector field).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.VTKDataType",
    "page": "Docstrings",
    "title": "WriteVTK.VTKDataType",
    "category": "constant",
    "text": "Union of data types allowed by VTK (see file-formats.pdf, page 15).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.data_to_xml",
    "page": "Docstrings",
    "title": "WriteVTK.data_to_xml",
    "category": "function",
    "text": "Add numerical data to VTK XML file.\n\nData is written under the xParent XML node.\n\nNc corresponds to the number of components of the data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.data_to_xml_appended",
    "page": "Docstrings",
    "title": "WriteVTK.data_to_xml_appended",
    "category": "function",
    "text": "Add appended raw binary data to VTK XML file.\n\nData is written to the vtk.buf buffer.\n\nWhen compression is enabled:\n\nthe data array is written in compressed form (obviously);\nthe header, written before the actual numerical data, is an array of UInt32 values:     [num_blocks, blocksize, last_blocksize, compressed_blocksizes] All the sizes are in bytes. The header itself is not compressed, only the data is. For more details, see:     http://public.kitware.com/pipermail/paraview/2005-April/001391.html     http://mathema.tician.de/what-they-dont-tell-you-about-vtk-xml-binary-formats (This is not really documented in the VTK specification...)\n\nOtherwise, if compression is disabled, the header is just a single UInt32 value containing the size of the data array in bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.data_to_xml_inline",
    "page": "Docstrings",
    "title": "WriteVTK.data_to_xml_inline",
    "category": "function",
    "text": "Add inline, base64-encoded data to VTK XML file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.datatype_str",
    "page": "Docstrings",
    "title": "WriteVTK.datatype_str",
    "category": "function",
    "text": "Return the VTK string representation of a numerical data type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.extent_attribute",
    "page": "Docstrings",
    "title": "WriteVTK.extent_attribute",
    "category": "function",
    "text": "Return the \"extent\" attribute required for structured (including rectilinear) grids.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.num_cells_structured",
    "page": "Docstrings",
    "title": "WriteVTK.num_cells_structured",
    "category": "function",
    "text": "Number of cells in structured grids.\n\nIn 3D, all cells are hexahedrons (i.e. VTKHEXAHEDRON), and the number of cells is (Ni-1)(Nj-1)(Nk-1). In 2D, they are quadrilaterals (VTKQUAD), and in 1D they are line segments (VTK_LINE).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.num_components",
    "page": "Docstrings",
    "title": "WriteVTK.num_components",
    "category": "function",
    "text": "Determine number of components of input data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.save_with_appended_data",
    "page": "Docstrings",
    "title": "WriteVTK.save_with_appended_data",
    "category": "function",
    "text": "Write VTK XML file containing appended binary data to disk.\n\nIn this case, the XML file is written manually instead of using the save_file function of LightXML, which doesn\'t allow to write raw binary data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.sizeof_data",
    "page": "Docstrings",
    "title": "WriteVTK.sizeof_data",
    "category": "function",
    "text": "Total size of data in bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.vtk_point_or_cell_data",
    "page": "Docstrings",
    "title": "WriteVTK.vtk_point_or_cell_data",
    "category": "function",
    "text": "Add either point or cell data to VTK file.\n\nHere Nc is the number of components of the data (Nc >= 1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.vtk_write_array",
    "page": "Docstrings",
    "title": "WriteVTK.vtk_write_array",
    "category": "function",
    "text": "Write a Julia array to a VTK image data file (.vti).\n\nUseful for general visualisation of arrays. The input can be a 2D or 3D array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WriteVTK.write_array",
    "page": "Docstrings",
    "title": "WriteVTK.write_array",
    "category": "function",
    "text": "Write array of numerical data to stream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WriteVTK.CollectionFileWriteVTK.DEFAULT_COMPRESSION_LEVELWriteVTK.DatasetFileWriteVTK.IS_LITTLE_ENDIANWriteVTK.InputDataTypeWriteVTK.MeshCellWriteVTK.MultiblockFileWriteVTK.VTKCellTypeWriteVTK.VTKCellTypesWriteVTK.VTKDataTypeWriteVTK.VTKFileWriteVTK.WriteVTKWriteVTK._compression_levelWriteVTK.add_extensionWriteVTK.collection_add_timestepWriteVTK.data_to_xmlWriteVTK.data_to_xml_appendedWriteVTK.data_to_xml_inlineWriteVTK.datatype_strWriteVTK.evalWriteVTK.extent_attributeWriteVTK.includeWriteVTK.multiblock_add_blockWriteVTK.num_cells_structuredWriteVTK.num_componentsWriteVTK.paraview_collectionWriteVTK.rectilinear_gridWriteVTK.save_with_appended_dataWriteVTK.sizeof_dataWriteVTK.structured_gridWriteVTK.unstructured_gridWriteVTK.vtk_cell_dataWriteVTK.vtk_gridWriteVTK.vtk_multiblockWriteVTK.vtk_point_dataWriteVTK.vtk_point_or_cell_dataWriteVTK.vtk_saveWriteVTK.vtk_write_arrayWriteVTK.vtk_xml_write_headerWriteVTK.write_array"
},

]}
