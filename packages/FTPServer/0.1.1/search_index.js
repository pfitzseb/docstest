var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#FTPServer.Server",
    "page": "Home",
    "title": "FTPServer.Server",
    "category": "type",
    "text": "Server(homedir=/home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/data; username=user, password=12345, permissions=elradfmwM, security=:none)\n\nA Server stores settings for create an pyftpdlib server.\n\nArguments\n\nhomedir::AbstractString: Directory where you want store to store your data for the test server.\n\nKeywords\n\nusername: Default login username\npassword: Default login password\npermission: Default user read/write permissions\nsecurity: Security method to use for connecting (options: :none, :implicity, :explicity). Passing in :none will use FTP and passing in :implicity or :explicity will use the appropriate FTPS connection.\n\n\n\n\n\n"
},

{
    "location": "#FTPServer.cleanup-Tuple{}",
    "page": "Home",
    "title": "FTPServer.cleanup",
    "category": "method",
    "text": "cleanup()\n\nCleans up the default FTPServer.ROOT directory:\n\n/home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/data\n/home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/test.crt\n/home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/test.key\n\n\n\n\n\n"
},

{
    "location": "#FTPServer.init-Tuple{}",
    "page": "Home",
    "title": "FTPServer.init",
    "category": "method",
    "text": "init()\n\nCreates a test /home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/data with a few sample files if one hasn\'t already been setup.\n\n/home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/data/test_download.txt /home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/data/test_download2.txt /home/pfitzseb/.julia/packages/FTPServer/llMo3/deps/usr/ftp/data/test_directory/`\n\n\n\n\n\n"
},

{
    "location": "#FTPServer.serve-Tuple{Function,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "FTPServer.serve",
    "category": "method",
    "text": "serve(f, args...; kwargs...)\n\nPasses args and kwargs to the Server constructor and runs the function f by passing in the server instance. Upon completion the server will automatically be shutdown.\n\n\n\n\n\n"
},

{
    "location": "#FTPServer.jl-1",
    "page": "Home",
    "title": "FTPServer.jl",
    "category": "section",
    "text": "Modules = [FTPServer]"
},

]}
