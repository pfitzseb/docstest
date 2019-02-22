var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)  (Image: Appveyor Build) (Image: Coverage Status)"
},

{
    "location": "#VideoIO.jl-1",
    "page": "Readme",
    "title": "VideoIO.jl",
    "category": "section",
    "text": "Julia bindings for libav/ffmpeg.Currently, only video reading is supported, for the following library versions:libav 0.8, 9, 10\nffmpeg 2.2 through 3.0Video images may be read as raw arrays, or optionally, Image objects (if Images.jl is installed and loaded first).Feel free to request support for additional libav/ffmpeg versions, although earlier versions may be too challenging to support.If you encounter any problems, please add the output of VideoIO.versioninfo() to your report."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use the Julia package manager.  Within Julia, do:Pkg.add(\"VideoIO\")"
},

{
    "location": "#Simple-Interface-1",
    "page": "Readme",
    "title": "Simple Interface",
    "category": "section",
    "text": "A trivial video player interface exists (no audio):import ImageView\nimport VideoIO\n\nf = VideoIO.testvideo(\"annie_oakley\")  # downloaded if not available\nVideoIO.playvideo(f)  # no sound\n\n# Aternatively, you can just open the camera\n#VideoIO.viewcam()"
},

{
    "location": "#High-Level-Interface-1",
    "page": "Readme",
    "title": "High Level Interface",
    "category": "section",
    "text": "VideoIO contains a simple high-level interface which allows reading of video frames from a supported video file, or from a camera device:using Images\nimport ImageView\nimport VideoIO\n\nio = VideoIO.open(video_file)\nf = VideoIO.openvideo(io)\n\n# As a shortcut for just video, you can upen the file directly\n# with openvideo\n#f = VideoIO.openvideo(video_file)\n\n# Alternatively, you can open the camera with opencamera().\n# The default device is \"0\" on Windows, \"/dev/video0\" on Linux,\n# and \"Integrated Camera\" on OSX.  If using something other\n# than the default, pass it in as the first parameter (as a string).\n#f = VideoIO.opencamera()\n\n# One can seek to an arbitrary position in the video\nseek(f,2.5)  ## The second parameter is the time in seconds and must be Float64\nimg = read(f)\ncanvas, _ = ImageView.view(img)\n\nwhile !eof(f)\n    read!(f, img)\n    ImageView.imshow(canvas, img)\n    #sleep(1/30)\nendThis code is essentially the code in playvideo, and will read and (without the sleep) play a movie file as fast as possible.As with the playvideo function, the Images and ImageView packages must be loaded for the appropriate functions to be available."
},

{
    "location": "#Low-Level-Interface-1",
    "page": "Readme",
    "title": "Low Level Interface",
    "category": "section",
    "text": "Each libav and ffmpeg library has its own VideoIO subpackage:libavcodec    -> AVCodecs\nlibavdevice   -> AVDevice\nlibavfilter   -> AVFilters\nlibavformat   -> AVFormat\nlibavutil     -> AVUtil\nlibswscale    -> SWScaleThe following three files are related to ffmpeg/libav, but currently not exposed:libavresample -> AVResample (libav only)\nlibswresample -> SWResample (ffmpeg only)\nlibpostproc   -> PostProc   (not wrapped)After importing VideoIO, you can import and use any of the subpackages directlyimport VideoIO\nimport SWResample  # SWResample functions are now availableNote that much of the functionality of these subpackages is not enabled by default, to avoid long compilation times as they load.  To control what is loaded, each library version has a file which imports that\'s modules files.  For example, ffmpeg\'s libswscale-v2 files are loaded by VideoIO_PKG_DIR/src/ffmpeg/SWScale/v2/LIBSWSCALE.jl.Check these files to enable any needed functionality that isn\'t already enabled.  Note that you\'ll probably need to do this for each version of the package for both ffmpeg and libav, and that the interfaces do change some from version to version.Note that, in general, the low-level functions are not very fun to use, so it is good to focus initially on enabling a nice, higher-level function for these interfaces."
},

{
    "location": "#Test-Videos-1",
    "page": "Readme",
    "title": "Test Videos",
    "category": "section",
    "text": "A small number of test videos are available through VideoIO.TestVideos. These are short videos in a variety of formats with non-restrictive (public domain or Creative Commons) licenses.VideoIO.TestVideos.available() prints a list of all available test videos.\nVideoIO.testvideo(\"annie_oakley\") returns an AVInput object for the \"annie_oakley\" video.  The video will be downloaded if it isn\'t available.\nVideoIO.TestVideos.download_all() downloads all test videos\nVideoIO.TestVideos.remove_all() removes all test videos"
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "At this point, a simple video interface is available, for multiple versions of libav and ffmpeg.  See TODO.md for some possible directions forward.Issues, requests, and/or pull requests for problems or additional functionality are very welcome."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "VideoIO.@checked_libVideoIO.AVCodecsVideoIO.AVDeviceVideoIO.AVFormatVideoIO.AVInputVideoIO.AVUtilVideoIO.CAMERA_DEVICESVideoIO.DEFAULT_CAMERA_DEVICEVideoIO.DEFAULT_CAMERA_FORMATVideoIO.EightBitTypesVideoIO.INSTALL_ROOTVideoIO.NO_TRANSCODEVideoIO.PermutedArrayVideoIO.SWScaleVideoIO.StreamContextVideoIO.StreamInfoVideoIO.TRANSCODEVideoIO.TestVideosVideoIO.VidArrayVideoIO.VideoIOVideoIO.VideoReaderVideoIO.VideoTranscodeContextVideoIO.__init__VideoIO._avcodec_versionVideoIO._avdevice_versionVideoIO._avfilter_versionVideoIO._avformat_versionVideoIO._avutil_versionVideoIO._closeVideoIO._read_packetVideoIO._swscale_versionVideoIO.av_load_pathVideoIO.av_pointer_to_fieldVideoIO.av_setfieldVideoIO.av_versionVideoIO.avcodec_dirVideoIO.avdevice_dirVideoIO.avfilter_dirVideoIO.avformat_dirVideoIO.avutil_dirVideoIO.bufsize_checkVideoIO.decode_packetVideoIO.evalVideoIO.ffmpeg_or_libavVideoIO.fieldpositionVideoIO.get_camera_devicesVideoIO.have_avcodecVideoIO.have_avdeviceVideoIO.have_avfilterVideoIO.have_avformatVideoIO.have_avutilVideoIO.have_decoded_frameVideoIO.have_frameVideoIO.have_swscaleVideoIO.includeVideoIO.libavcodecVideoIO.libavdeviceVideoIO.libavfilterVideoIO.libavformatVideoIO.libavutilVideoIO.libswscaleVideoIO.openVideoIO.open_avinputVideoIO.opencameraVideoIO.openvideoVideoIO.playVideoIO.playvideoVideoIO.pumpVideoIO.readVideoIO.read!VideoIO.read_packetVideoIO.reset_frame_flag!VideoIO.retrieveVideoIO.retrieve!VideoIO.seconds_to_timestampVideoIO.swscale_dirVideoIO.versioninfoVideoIO.viewcam"
},

]}
