var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NIfTI.jl-1",
    "page": "Readme",
    "title": "NIfTI.jl",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To read a NIfTI file:using NIfTI\nni = niread(\"my.nii\")\nni = niread(\"my.nii.gz\") # gzipped NIfTI files are detected automaticallyThe header is in nii.header; NIfTI extensions are in nii.extensions; the raw volume is in nii.raw.To mmap the NIfTI file:ni = niread(\"my.nii\", mmap=true)To get the TR and voxel size:vsize = voxel_size(ni.header)    # In mm\ntr = time_step(ni.header)        # In msTo get the value of the volume along a given dimension:d = vox(ni, x, y, z, t)       # Scaled by slope and intercept given in header, zero-based indexes\nd = ni[x, y, z, t]            # Scaled by slope and intercept given in header, one-based indexes\nd = ni.raw[x, y, z, t]        # Unscaled, one-based indexesColons works everywhere, even with voxTo write a volume:niwrite(\"my.nii\", ni)It is also possible to construct a new volume from scratch; see the NIVolume constructor in the source for documentation."
},

{
    "location": "autodocs/#NIfTI.niread",
    "page": "Docstrings",
    "title": "NIfTI.niread",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NIfTI.NI1_MAGICNIfTI.NIVolumeNIfTI.NIfTINIfTI.NIfTI1ExtensionNIfTI.NIfTI1HeaderNIfTI.NIfTI_DT_BITSTYPESNIfTI.NIfTI_DT_BITSTYPES_REVERSENIfTI.NP1_MAGICNIfTI.SIZEOF_HDRNIfTI.SPATIAL_UNIT_MULTIPLIERSNIfTI.TIME_UNIT_MULTIPLIERSNIfTI.add1NIfTI.byteswapNIfTI.define_packedNIfTI.dim_infoNIfTI.esizeNIfTI.evalNIfTI.getaffineNIfTI.includeNIfTI.isgzNIfTI.lastindexNIfTI.nibitpixNIfTI.nidatatypeNIfTI.nidimNIfTI.nireadNIfTI.niupdateNIfTI.niwriteNIfTI.read_extensionsNIfTI.read_headerNIfTI.setaffineNIfTI.string_tupleNIfTI.time_stepNIfTI.to_dim_infoNIfTI.voxNIfTI.voxel_size"
},

]}
