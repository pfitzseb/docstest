var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageMagick-1",
    "page": "Readme",
    "title": "ImageMagick",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package provides a wrapper around ImageMagick version 6.  It was split off from Images.jl to make image I/O more modular."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Add the package withPkg.add(\"ImageMagick\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "ImageMagick will be used as needed if you\'ve saidusing FileIOin your session or module. You should not generally say using ImageMagick.  See FileIO for further details.It\'s worth pointing out that packages such as Images.jl load FileIO for you.Loading an image is then as simple asimg = load(filename[; view=false])Set view=true to reduce memory consumption when loading large files, possibly at some slight cost in terms of performance of future operations."
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": ""
},

{
    "location": "#OSX-1",
    "page": "Readme",
    "title": "OSX",
    "category": "section",
    "text": "ImageMagick.jl will use the system-wide libMagicWand in /usr/local/lib if it is present.  Use the environment variable MAGICK_HOME to add other paths to the search path. Note that version 6.7+ (up to but not including 7.0) are the most supported versions, in particular for multipage TIFFs.  Use ImageMagick.libversion to see what version the installer found.  If ImageMagick.jl doesn\'t find a previous installation, it will install its own copy of the ImageMagick library with Homebrew.jl.ImageMagick.jl 0.3.0 introduced significant improvements in the installation procedure for OSX users. If you\'ve had trouble with previous versions of ImageMagick.jl and attempted to resolve problems manually, some of your workarounds might interfere with the new approach. You can reset your build withusing Homebrew\nHomebrew.rm(\"imagemagick@6\")\nHomebrew.brew(`prune`)\nPkg.build(\"ImageMagick\")You may also find debugging Homebrew useful.Finally, an alternative to ImageMagick on OS X is QuartzImageIO."
},

{
    "location": "#Manual-installation-on-Windows-1",
    "page": "Readme",
    "title": "Manual installation on Windows",
    "category": "section",
    "text": "If automatic installation fails, get the current version from http://www.imagemagick.org/script/binary-releases.php#windows (e.g. ImageMagick-6.8.8-7-Q16-x86-dll.exe) and make sure that the \"Install development headers and libraries for C and C++\" checkbox is selected.  You may choose to let the installer add the installation directory to the system path or provide it separately.  In the later case you may add it to your .juliarc.jl file as (for example) push!(Base.DL_LOAD_PATH, \"C:/programs/ImageMagick-6.8.8\"). Alternatively, you can set your MAGICK_HOME environment variable.When manual intervention is necessary, you need to restart Julia for the necessary changes to take effect."
},

{
    "location": "#Linux-1",
    "page": "Readme",
    "title": "Linux",
    "category": "section",
    "text": "ImageMagick.jl automatically searches for an installed version of libMagickWand.  Use the environment variable MAGICK_HOME to add to the search path.  Use ImageMagick.libversion() to see what version it found.  Version 6.7+ (up to but not including 7.0) are the most supported versions, in particular for multipage TIFFs.The environment variable MAGICK_THREAD_LIMIT can be used to throttle multithreading."
},

{
    "location": "autodocs/#ImageMagick.metadata",
    "page": "Docstrings",
    "title": "ImageMagick.metadata",
    "category": "function",
    "text": "metadata(file) -> tuple of dimensions\n\nThe returned value is (X,Y[,Z]), not (R,C), so the first two dimensions of the corresponding Array returned by load are reversed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImageMagick.AbstractGrayImageMagick.AllChannelsImageMagick.AlphaChannelImageMagick.BlackChannelImageMagick.BlueChannelImageMagick.CHARPIXELImageMagick.CStoIMTypedictImageMagick.ChannelTypeImageMagick.Color1ImageMagick.Color2ImageMagick.Color3ImageMagick.Color4ImageMagick.CompositeChannelsImageMagick.CyanChannelImageMagick.DOUBLEPIXELImageMagick.DefaultChannelsImageMagick.FLOATPIXELImageMagick.GrayChannelImageMagick.GrayChannelsImageMagick.GreenChannelImageMagick.IMColordictImageMagick.IMColorspaceImageMagick.IMExceptionTypeImageMagick.IMStorageTypesImageMagick.IMTypeImageMagick.IMTypedictImageMagick.INTEGERPIXELImageMagick.ImageMagickImageMagick.IndexChannelImageMagick.MagentaChannelImageMagick.MagickWandImageMagick.MatteChannelImageMagick.NoCompressionImageMagick.OpacityChannelImageMagick.PixelWandImageMagick.RGBChannelsImageMagick.RedChannelImageMagick.SHORTPIXELImageMagick.SyncChannelsImageMagick.TrueAlphaChannelImageMagick.UndefinedChannelImageMagick.YellowChannelImageMagick.__init__ImageMagick._metadataImageMagick.bitdepthImageMagick.check_depsImageMagick.colorsizeImageMagick.constituteimageImageMagick.depsfileImageMagick.evalImageMagick.exportimagepixels!ImageMagick.flip1ImageMagick.flip12ImageMagick.flip2ImageMagick.formatstringImageMagick.freeImageMagick.getblobImageMagick.getimagealphachannelImageMagick.getimagechanneldepthImageMagick.getimagecolorspaceImageMagick.getimagedelayImageMagick.getimagedepthImageMagick.getimagepropertiesImageMagick.getimagepropertyImageMagick.getimagetickspersecondImageMagick.getimagetypeImageMagick.getnumberimagesImageMagick.getsizeImageMagick.imImageMagick.image2wandImageMagick.image_formatsImageMagick.imtypeImageMagick.includeImageMagick.isinstantiatedImageMagick.jpegImageMagick.libversionImageMagick.libwandImageMagick.loadImageMagick.load_ImageMagick.magickgenesisImageMagick.magickinfoImageMagick.magickterminusImageMagick.mapIMImageMagick.metadataImageMagick.nchannelsImageMagick.newimageImageMagick.nextimageImageMagick.orientation_dictImageMagick.pdImageMagick.permutedims_horizontalImageMagick.pingimageImageMagick.pixelsetcolorImageMagick.pngImageMagick.queryoptionImageMagick.queryoptionsImageMagick.readblobImageMagick.readimageImageMagick.relinquishmemoryImageMagick.resetiteratorImageMagick.saveImageMagick.save_ImageMagick.setimagecolorspaceImageMagick.setimagecompressionImageMagick.setimagecompressionqualityImageMagick.setimagedelayImageMagick.setimageformatImageMagick.setimagetypeImageMagick.setproperties!ImageMagick.storagetypeImageMagick.tiffImageMagick.to_contiguousImageMagick.to_explicitImageMagick.ufixedtypeImageMagick.writeimageImageMagick.zlib"
},

]}
