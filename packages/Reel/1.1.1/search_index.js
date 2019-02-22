var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Reel-1",
    "page": "Readme",
    "title": "Reel",
    "category": "section",
    "text": "(Image: Build Status)Film computations<p align=\"center\">     <img src=\"http://shashi.github.io/.assets/Reel/conway.gif\" /> </p>"
},

{
    "location": "#Quickstart-1",
    "page": "Readme",
    "title": "Quickstart",
    "category": "section",
    "text": ""
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Reel\")You will need ffmpeg and imagemagick installed to use Reel. This package supersedes ComposeVideo.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Reel exports the all-important function roll which you can use to roll the camera on various arguments:using Reel\nusing Gadfly\n\nfunction render(t, dt)\n    # t is the time into the sequence\n    # dt is the time to advance for the next frame\n\n    # any expression that results in an object which can be\n    # rendered as png or jpg\n    plot([x -> sin(x+t*π), x -> cos(x+t*π)], 0, 6)\nend\n\nfilm = roll(render, fps=30, duration=2)\n\nwrite(\"output.gif\", film) # Write to a gif file\n\n# Or\nwrite(\"file.webm\", film) # Write to a webm video\n\n# Or\nwrite(\"file.mp4\", film)  # An mp4 formatted video<p align=\"center\">     <img src=\"http://shashi.github.io/.assets/Reel/sincos.gif\" /> </p>The same thing can be concisely written with Julia\'s do syntax:film = roll(fps=30, duration=2) do t, dt\n    plot([x -> sin(x+t*π), x -> cos(x+t*π)], 0, 6)\nend\n\nwrite(\"output.gif\", film)Note that the fps you specify to roll will be enforced no matter how long the computation actually takes: you set the speed at which you want to watch it.Reel can also render an abstract array of objects:using Compose\n\nCompose.set_default_graphic_size(3inch, 3inch) # Square\n\n# draw a regular n-gon\nngon(n) = compose(context(units=UnitBox(-1, -1, 2, 2)), fill(\"lightblue\"),\n                polygon([(cos(x), sin(x)) for x in π/2:2π/n:3.5π]))\n\nroll(map(ngon, vcat(3:10, 9:-1:3)), fps=5)<p align=\"center\">     <img src=\"http://shashi.github.io/.assets/Reel/ngon.gif\" /> </p>Reel exports Frames, a type for a collection of frames.Frames constructor takes a MIME type of the frames, and the fps at which the animation should be rendered. e.g.You can push a new frames to a Frames object using push!.# A Glider gun from Conway\'s game of Life\n\nusing Reel\nframes = Frames(MIME(\"image/png\"), fps=2)\n\ng = glider_gun # initial board state\nfor i=1:31\n    push!(frames, draw(g))\n    g = decidefate(g)\nend\n\nframes\n<p align=\"center\">     <img src=\"http://shashi.github.io/.assets/Reel/conway.gif\" /> </p>You can render a Frames object as usual:write(\"output.webm\", frames)"
},

{
    "location": "#In-IJulia-1",
    "page": "Readme",
    "title": "In IJulia",
    "category": "section",
    "text": "A call to roll returns a Frames object. A method writemime(::IO, ::MIME{symbol(\"text/html\"),::Frames) orchestrates the rendering of a Frames object in IJulia. Any cell which results in a Frames results in the animation being rendered. By default, a webm video is generated. You can change this behavior:Reel.set_output_type(\"gif\") # or \"mp4\""
},

{
    "location": "#They-see-me-rollin\',-they-hatin\'-1",
    "page": "Readme",
    "title": "They see me rollin\', they hatin\'",
    "category": "section",
    "text": "# particles in a box.\n\nusing Color, Compose\n\nbox(x) = let i = floor(x)\n    i%2==0 ? x-i : 1+i-x\nend\n\ncolors = distinguishable_colors(10, lchoices=[82.])\n\ndots(points) = [(context(p[1], p[2], .03, .03), fill(colors[i%10+1]), circle())\n    for (i, p) in enumerate(points)]\n\nvelocities = [(rand(), rand()) for i in 1:40]\n\nroll(fps=30, duration=10.0) do t, dt\n\n    compose(context(),\n            dots([map(v -> box(v*t + 0.5), (vx, vy)) for (vx, vy) in velocities])...)\nend\n<p align=\"center\">     <img src=\"http://shashi.github.io/.assets/Reel/balls.gif\" /> </p># Solution of Helmholtz equation with Dirichlet BC using ApproxFun\n\nusing ApproxFun\n\nB=dirichlet(d)\nΔ=lap(d)\n\nplots = [ApproxFun.contour(pdesolve([B,Δ+k*I],ones(4),150))\n            for k=vcat([1:1.0:100], [99:-1.0:1])]\n\nroll(plots, fps=24)\n\n# Warning: this gif is 8 mb!<p align=\"center\">     <img src=\"http://shashi.github.io/.assets/Reel/helmholtz.gif\" /> </p><p align=\"center\">     <em>Fin.</em> </p>"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Reel.FramesReel.ReelReel._output_typeReel.bestmimeReel.cleanupReel.evalReel.extensionReel.includeReel.mime_orderingReel.newname!Reel.rollReel.set_output_typeReel.writeframeReel.writehtml"
},

]}
