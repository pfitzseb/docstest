var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GZip.jl:-A-Julia-interface-for-gzip-functions-in-zlib-1",
    "page": "Readme",
    "title": "GZip.jl: A Julia interface for gzip functions in zlib",
    "category": "section",
    "text": "(Image: GZip) (Image: GZip) (Image: Build Status) (Image: Coverage Status)This module provides a wrapper for the gzip related functions of zlib, a free, general-purpose, legally unencumbered, lossless data-compression library. These functions allow the reading and writing of gzip files.Install with Pkg.add(\"GZip\") at the Julia prompt."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Typical usage would be something likeimport GZip\n\nfh = GZip.open(\"infile.gz\")\nreadline(fh, s)\n...\nclose(fh)\n\n\n...\ns = \"gzip is part of zlib, a free, general-purpose, \" *\n    \"legally unencumbered, lossless data-compression library\"\n\nfh = GZip.open(\"outfile.gz\", \"w\")\nwrite(fh, s)\n...\nclose(fh)See the documentation for additional information."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GZip.@test_eof_gzerrGZip.@test_eof_gzerr2GZip.@test_gzerrorGZip.@test_gzerror0GZip.@test_z_okGZip.GZErrorGZip.GZLIB_VERSIONGZip.GZ_LINE_BUFSIZEGZip.GZipGZip.GZipStreamGZip.SEEK_CURGZip.SEEK_SETGZip.ZErrorGZip.ZFileOffsetGZip.ZLIB_VERSIONGZip.Z_ASCIIGZip.Z_BEST_COMPRESSIONGZip.Z_BEST_SPEEDGZip.Z_BIG_BUFSIZEGZip.Z_BINARYGZip.Z_BLOCKGZip.Z_BUF_ERRORGZip.Z_DATA_ERRORGZip.Z_DEFAULT_BUFSIZEGZip.Z_DEFAULT_COMPRESSIONGZip.Z_DEFAULT_STRATEGYGZip.Z_DEFLATEDGZip.Z_ERRNOGZip.Z_FILTEREDGZip.Z_FINISHGZip.Z_FIXEDGZip.Z_FULL_FLUSHGZip.Z_HUFFMAN_ONLYGZip.Z_MEM_ERRORGZip.Z_NEED_DICTGZip.Z_NO_COMPRESSIONGZip.Z_NO_FLUSHGZip.Z_NULLGZip.Z_OKGZip.Z_PARTIAL_FLUSHGZip.Z_RLEGZip.Z_STREAM_ENDGZip.Z_STREAM_ERRORGZip.Z_SYNC_FLUSHGZip.Z_TEXTGZip.Z_TREESGZip.Z_UNKNOWNGZip.Z_VERSION_ERRORGZip._gzdirectGZip._gzoffsetGZip._gzopenGZip._gzrewindGZip._gzseekGZip._gztellGZip._zlibGZip.closeGZip.eofGZip.evalGZip.fdGZip.flushGZip.gzbufferGZip.gzdopenGZip.gzerrorGZip.gzgetcGZip.gzgetc_rawGZip.gzgetsGZip.gzopenGZip.gzputcGZip.gzreadGZip.gzungetcGZip.gzwriteGZip.includeGZip.openGZip.peekGZip.positionGZip.readGZip.readlineGZip.seekGZip.showGZip.skipGZip.truncateGZip.unsafe_writeGZip.writeGZip.z_off_t_szGZip.zerrorGZip.zlib_compile_flagsGZip.zlib_version"
},

]}
