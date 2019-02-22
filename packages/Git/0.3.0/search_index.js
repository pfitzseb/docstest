var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Git.jl-1",
    "page": "Readme",
    "title": "Git.jl",
    "category": "section",
    "text": "(Image: Travis) (Image: AppVeyor) (Image: Coveralls)Julia wrapper for command line GitThis package provides Julia wrappers for some common Git operations, as used by the Julia package manager in versions 0.4 and earlier.If you do not already have git installed and on your system PATH, then adding this package (or running Pkg.build(\"Git\") will download a local binary copy of command-line git if you are using Windows, Mac OS X via Homebrew.jl, or Linux on x86/amd64 architectures.(Image: Git Badge)"
},

{
    "location": "autodocs/#Git.attached",
    "page": "Docstrings",
    "title": "Git.attached",
    "category": "function",
    "text": "Git.attached(; dir=\"\")\n\nDetermine whether HEAD is attached to a commit in the given respository.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.branch",
    "page": "Docstrings",
    "title": "Git.branch",
    "category": "function",
    "text": "Git.branch(; dir=\"\")\n\nReturn the name of the current active branch in the given repository.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.cmd",
    "page": "Docstrings",
    "title": "Git.cmd",
    "category": "function",
    "text": "Git.cmd(args; dir=\"\")\n\nReturn a Git command from the given arguments, acting on the repository given in dir.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.different",
    "page": "Docstrings",
    "title": "Git.different",
    "category": "function",
    "text": "Git.different(verA, verB, path; dir=\"\")\n\nDetermine whether two trees are different with respect to the given path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.dir",
    "page": "Docstrings",
    "title": "Git.dir",
    "category": "function",
    "text": "Git.dir(d)\n\nReturn the path to the default .git for the given repository directory, or the path to use in place of the default .git.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.dirty",
    "page": "Docstrings",
    "title": "Git.dirty",
    "category": "function",
    "text": "Git.dirty([paths]; dir=\"\")\n\nDetermine whether the paths in the given repository are dirty, i.e. contain modified but uncommitted tracked files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.git",
    "page": "Docstrings",
    "title": "Git.git",
    "category": "function",
    "text": "Git.git([d])\n\nReturn a Git command that refers to the work tree and directory given by d, or the current work tree and directory if d is not specified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.head",
    "page": "Docstrings",
    "title": "Git.head",
    "category": "function",
    "text": "Git.head(; dir=\"\")\n\nReturn the commit to which HEAD currently refers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.is_ancestor_of",
    "page": "Docstrings",
    "title": "Git.is_ancestor_of",
    "category": "function",
    "text": "Git.is_ancestor_of(a, b; dir=\"\")\n\nDetermine whether the commit a is an ancestor of the commit b in the given repository.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.iscommit",
    "page": "Docstrings",
    "title": "Git.iscommit",
    "category": "function",
    "text": "Git.iscommit(name; dir=\"\")\n\nDetermine whether name refers to a commit in the repository dir. name can be a single SHA1 or a vector of SHA1s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.modules",
    "page": "Docstrings",
    "title": "Git.modules",
    "category": "function",
    "text": "Git.modules(args; dir=\"\")\n\nApply the Git command with the given arguments on the given repository to the configuration file .gitmodules and read the result as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.normalize_url",
    "page": "Docstrings",
    "title": "Git.normalize_url",
    "category": "function",
    "text": "Git.normalize_url(url)\n\nNormalize the given URL to a valid GitHub repository URL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.readchomp",
    "page": "Docstrings",
    "title": "Git.readchomp",
    "category": "function",
    "text": "Git.readchomp(args; dir=\"\")\n\nRead the result of the Git command using the given arguments on the given repository as a string, removing a single trailing newline if present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.readstring",
    "page": "Docstrings",
    "title": "Git.readstring",
    "category": "function",
    "text": "Git.readstring(args; dir=\"\")\n\nRead the result of the Git command using the given arguments on the given repository as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.restore",
    "page": "Docstrings",
    "title": "Git.restore",
    "category": "function",
    "text": "Git.restore(s::State; dir=\"\")\n\nRestore the given repository to the state s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.run",
    "page": "Docstrings",
    "title": "Git.run",
    "category": "function",
    "text": "Git.run(args; dir=\"\", out=stdout)\n\nExecute the Git command from the given arguments args on the repository dir, writing the results to the output stream out.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.set_remote_url",
    "page": "Docstrings",
    "title": "Git.set_remote_url",
    "category": "function",
    "text": "Git.set_remote_url(url; remote=\"origin\", dir=\"\")\n\nAdd a remote remote to the given repository from the URL url.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.snapshot",
    "page": "Docstrings",
    "title": "Git.snapshot",
    "category": "function",
    "text": "Git.snapshot(; dir=\"\")\n\nReturn a State object that captures a snapshot of the given repository.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.staged",
    "page": "Docstrings",
    "title": "Git.staged",
    "category": "function",
    "text": "Git.staged([paths]; dir=\"\")\n\nDetermine whether the paths in the given repository contain staged files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.success",
    "page": "Docstrings",
    "title": "Git.success",
    "category": "function",
    "text": "Git.success(args; dir=\"\")\n\nDetermine whether the Git command using the given arguments on the given repository executed successfully.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.transact",
    "page": "Docstrings",
    "title": "Git.transact",
    "category": "function",
    "text": "Git.transact(f; dir=\"\")\n\nAttempt to execute the function f. If this fails, the repository is restored to its state prior to execution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.unstaged",
    "page": "Docstrings",
    "title": "Git.unstaged",
    "category": "function",
    "text": "Git.unstaged([paths]; dir=\"\")\n\nDetermine whether the paths in the given repository contain unstaged files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Git.version",
    "page": "Docstrings",
    "title": "Git.version",
    "category": "function",
    "text": "Git.version()\n\nReturn the version of Git being used by the package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Git.GITHUB_REGEXGit.GitGit.StateGit.attachedGit.branchGit.cmdGit.depsjlGit.differentGit.dirGit.dirtyGit.evalGit.gitGit.gitcmdGit.headGit.includeGit.is_ancestor_ofGit.iscommitGit.modulesGit.normalize_urlGit.readchompGit.readstringGit.restoreGit.runGit.set_remote_urlGit.snapshotGit.stagedGit.successGit.transactGit.unstagedGit.version"
},

]}
