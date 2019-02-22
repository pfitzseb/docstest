var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WebIO-1",
    "page": "Readme",
    "title": "WebIO",
    "category": "section",
    "text": "Build Coverage\n(Image: Build Status) (Image: codecov)WebIO provides a simple abstraction for displaying and interacting with content. It works with:Juno - The hottest Julia IDE\nIJulia - Jupyter notebooks for Julia\nBlink - An Electron wrapper you can use to make Desktop apps\nMux - A web server frameworkScopes once created with WebIO will work on any of these front-ends."
},

{
    "location": "#People-using-WebIO-1",
    "page": "Readme",
    "title": "People using WebIO",
    "category": "section",
    "text": "This is a non-comprehensive list of websites using WebIO:Julia TetrisIf you want your page listed here, please open an issue."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "To install WebIO, run:Pkg.clone(\"https://github.com/shashi/WebIO.jl.git\")\nPkg.build(\"WebIO\") # this will set up the IJulia server plugin\n\nusing WebIOIf you want to use WebIO in Jupyter Lab, you need to install the WebIO extension for Jupyter Lab.cd(Pkg.dir(\"WebIO\", \"assets\"))\n;jupyter labextension install webio\n;jupyter labextension enable webio/jupyterlab_entryDevelopment setup if you want to edit the javascript files in this repository, you will need to setup ways to build them. It\'s made easy for you:using WebIO\nWebIO.bundlejs() # run every time you update a file"
},

{
    "location": "#Getting-things-to-display-1",
    "page": "Readme",
    "title": "Getting things to display",
    "category": "section",
    "text": "First, load the front end package (e.g. Blink or Mux; IJulia and Atom packages are already loaded when you are using them). Then run using WebIO to load this package.On IJulia or Jupyter LabWhenever a code cell returns a WebIO.Node object, IJulia will render it. For example,In[*]: node(:div, \"Hello, World\")The node (lowercase) function is a helper function which provides a convenient way to construct WebIO.Node objects.On BlinkSet the content of a window to WebIO.Node using body! to render it.w = Blink.Window()\nbody!(w, dom\"div\"(\"Hello, World\"))On MuxReturn the WebIO Node from a web app to render it. Use webio_serve to serve the application.function myapp(req) # an \"App\" takes a request, returns the output\n    node(:div, \"Hello, World!\")\nend\n\nwebio_serve(page(\"/\", req -> myapp(req)))"
},

{
    "location": "#Composing-content-1",
    "page": "Readme",
    "title": "Composing content",
    "category": "section",
    "text": "Let\'s say you want to display the following HTML:<ul class=\"my-list\">\n    <li>get milk</li>\n    <li>make a pie</li>\n</ul>You can create a nested Node object:node(:ul,\n    node(:li, \"get milk\"),\n    node(:li, \"make a pie\"), attributes=Dict(:class => \"my-list\"))attributes keyword argument sets the attributes of the HTML element.Any other keyword argument to DOM is set as the property of the DOM object of the HTML element via JavaScript.For example,node(:ul, className=\"my-list\")does the equivalent of the following in JavaScript:var element = document.createNode(\"ul\")\nelement.className = \"my-list\"\n// then adds inserts it to the document wherever it is displayedSome DOM properties can themselves be objects, you can set them using Julia dictionaries:node(:div, \"Hello, World\",\n     style=Dict(:backgroundColor => \"black\",\n                :color => \"white\",\n                :padding => \"12px\"))does the equivalent ofvar element = document.createNode(\"div\")\nelement.style.backgroundColor = \"black\"\nelement.style.color = \"white\"\nelement.style.padding = \"12px\"This is in turn equivalent to:<div style=\"background-color: black; color: white; padding: 12px\">and hence also equivalent to:node(:div, attributes=Dict(:style => \"background-color: black; color: white; padding: 12px\"))"
},

{
    "location": "#The-dom\"\"-macro-1",
    "page": "Readme",
    "title": "The dom\"\" macro",
    "category": "section",
    "text": "The dom\"\" string macro can be used to simplify the syntax of creating DOM Nodes. The syntax for the macro is:dom\"div.<class>#<id>[<attr>=<value>,...]\"(children...; props...)And is equivalent to:node(:div, children..., className=\"<class>\", id=\"<id>\",\n     attributes=Dict(attr1=>val1, attr2=>val2...); props...)Everything except the tag (\'div\' in the example) is optional. So,dom\"div\", dom\"div.class1\", dom\"div.class1.class2\", dom\"div#my-id\", dom\"input.check[type=checkbox]\" are all valid invocations."
},

{
    "location": "#WebIO.render-1",
    "page": "Readme",
    "title": "WebIO.render",
    "category": "section",
    "text": "WebIO exports WebIO.render generic function which can be extended to define how to render something into WebIO\'s DOM. Think of it as a better version of show(io::IO, m::MIME\"text/html\", x). Whenever an object is used as an argument to node, this render function will be called to create the Node object to display.For example, a TodoItem type like:struct TodoItem\n    description::String\n    done::Bool\nendCould have a render method that looks like this:import WebIO.render\n\nfunction render(todoitem::TodoItem)\n    dom\"div.todo-item\"(\n        dom\"input[type=checkbox]\"(checked=todoitem.done),\n        todoitem.description,\n        style=Dict(\"display\" => \"flex\", \"flex-direction\" => \"horizontal\"),\n    )\nendA todo list which contains a vector of TodoItems and possibly a title field,struct TodoList\n    title::String\n    items::Vector{TodoItem}\nend\n\nmylist = TodoList(\"My todo list\",\n    [TodoItem(\"Make my first WebIO widget\", false),\n     TodoItem(\"Make a pie\", false)])\nCan render itself like:function render(list::TodoList)\n    dom\"div\"(\n        dom\"h2\"(list.title),\n        dom\"div.todo-list\"(\n            list.items... # each element will be rendered using WebIO.render\n        )\n    )\nend"
},

{
    "location": "#Executing-JavaScript-1",
    "page": "Readme",
    "title": "Executing JavaScript",
    "category": "section",
    "text": "Event handlers can be set up by passing a dict as the events keyword argument to node, (and hence dom\"foo\"). For example,dom\"button\"(\"Greet\",\n     events=Dict(\"click\" => js\"function (event) { alert(\'Hello, World!\') }\"))This will create a button which shows an alert box with the message \"Hello, World!\" when clicked.There are 2 ways of creating JavaScript expressions with WebIO.First, you can use the js\"\" string macro to just write any JavaScript as a string. For examplejs\"\"\"\nalert(\"Hello, World!\")\n\"\"\"This will return an object of type JSString which can be used anywhere WebIO expects javascript expressions.The second way is to use the @js macro from JSExpr.jl. @js macro can translate Julia expressions to JavaScript expressions (JSString). For example,using JSExpr # gives @js@js alert(\"Hello, World!\")or@js Math.random()The same example could have been written using @js like this:dom\"button\"(\"Greet\",\n     events=Dict(\"click\" => @js event -> alert(\"Hello, World!\")))Note that @js just translates a Julia expression to the equivalent JavaScript, it does not compile the code. The variables and functions you reference in a @js expression must be defined in the JavaScript context it will run in (and need not be defined in Julia)."
},

{
    "location": "#Loading-JavaScript-dependencies-1",
    "page": "Readme",
    "title": "Loading JavaScript dependencies",
    "category": "section",
    "text": "You can load dependencies by creating a Scope object and passing in imports argument.\nusing WebIO, JSExpr\n\nw = Scope(imports=[\"//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.js\"])\n\nonimport(w, @js function (p5)\n    function sketch(s)\n        s.setup = () -> s.createCanvas(640, 480)\n\n        s.draw = function ()\n          if s.mouseIsPressed\n            s.fill(0)\n          else\n            s.fill(255)\n          end\n          s.ellipse(s.mouseX, s.mouseY, 80, 80)\n        end\n    end\n    @new p5(sketch, this.dom.querySelector(\"#container\"))\nend)\n\nw(dom\"div#container\"())"
},

{
    "location": "#Communicating-between-Julia-and-JavaScript-1",
    "page": "Readme",
    "title": "Communicating between Julia and JavaScript",
    "category": "section",
    "text": "w = Scope()A scope object acts as a container for communication (more details below). To exchange values between JavaScript and Julia, we also need to add Observable objects to the scope. This can be done by passing the scope, and an identifier for the observable (as string) and a default value to the Observable constructor:obs = Observable(w, \"rand-value\", 0.0)You can get the value of obs with the syntax obs[]. You can set the value using the syntax obs[] = val. To listen to changes to the value you can use the on function.on(f, obs)This will run f on every update to obs."
},

{
    "location": "#Sending-values-from-JavaScript-to-Julia-1",
    "page": "Readme",
    "title": "Sending values from JavaScript to Julia",
    "category": "section",
    "text": "Below is a scope which communicates with Julia. Let\'s run through its construction line-by-line. The following scope contains a button which sends a random number, generated in JavaScript, to Julia. We will print this number on the Julia side.function random_print_button()\n    w = Scope()\n\n    obs = Observable(w, \"rand-value\", 0.0)\n\n    on(obs) do x\n        println(\"JS sent $x\")\n    end\n\n    w(\n      dom\"button\"(\n        \"generate random\",\n        events=Dict(\"click\"=>@js () -> $obs[] = Math.random()),\n      ),\n    )\nendw is a Scope object, it acts a scope or context for communication. Every call to random_print_button will create a new scope and hence keep the updates contained within it. This allows there to be many instances of the same scope on a page.An Observable is a value that can change over time. Observable(w, \"rand-value\", 0.0) creates an observable by the name \"rand-value\" associated with scope w. on(f, x) sets up an event handler such that f is called with the value of x every time x is updated.An observable can be updated using the x[] = value syntax on Julia. To update the observable from the JavaScript side, you can use the following syntax:@js $obs[] = Math.random()This will return a JSString which you can use anywhere WebIO expects JavaScript, such as a event handler. But an event handler should be a function so you would need to enclose this in a function: @js () -> $obs[] = Math.random().  dom\"button\"(\n    \"generate random\",\n    events=Dict(\"click\"=>@js () -> $obs[] = Math.random()),\n  )creates a button UI which updates the obs observable with Math.random() (executed in JS) on every click.Notice the last expression actually calls the scope w with the contents to display. This causes the contents to be wrapped in w\'s context. All uses of observables associated with w (e.g. obs) should be enclosed in the scope w."
},

{
    "location": "#Sending-values-from-Julia-to-JavaScript-1",
    "page": "Readme",
    "title": "Sending values from Julia to JavaScript",
    "category": "section",
    "text": "Here\'s a clock where the time is formatted and updated every second from Julia. We use the onjs handler and mutate the #clock DOM element to acheive this.w = Scope()\nobs = Observable(w, \"clock-value\", \"\")\n\ntimestr() = Dates.format(now(), \"HH:MM:SS\")\n\n# update timestamp every second\n@async while true\n    sleep(1)\n    obs[] = timestr()\nend\n\n# on every update to `obs`, replace the text content of #clock\nonjs(obs, @js val -> begin\n    @var clock = this.dom.querySelector(\"#clock\")\n    clock.textContent = val\nend)\n\nw(\n  dom\"div#clock\"(\n    timestr(),\n  ),\n)The javascript function passed to onjs gets the value of the update as the argument. this is set to the Scope object. Notice the use of this.dom.querySelector(\"#clock\"). this.dom contains the rendered DOM of the scope. querySelector(\"#<id>\") will look up the element which has the id <id>. clock.textContent = val will set the text contained in clock, the DOM element.For an even easier way to send values from Julia to JavaScript, we can simply rely on the fact that WebIO knows how to render Observables directly to HTML. In this case WebIO will automatically construct a Scope and insert the relevant JavaScript to update the rendered content whenever the Observable changes value:timestr() = Dates.format(now(), \"HH:MM:SS\")\n\nclock_obs = Observable(timestr())\n@async while true\n    sleep(1)\n    clock_obs[] = timestr()\nend\nclock_obs"
},

{
    "location": "autodocs/#WebIO.@dom_str",
    "page": "Docstrings",
    "title": "WebIO.@dom_str",
    "category": "macro",
    "text": "dom\"div.<class>#<id>[<prop>=<value>,...]\"(x...; kw...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.ConnectionPool",
    "page": "Docstrings",
    "title": "WebIO.ConnectionPool",
    "category": "type",
    "text": "ConnectionPool(outbox::Channel, connections::Set{AbstractConnection}=Set())\n\nManages the distribution of messages from the outbox channel to a set of connections. The ConnectionPool asynchronously takes messages from its outbox and sends each message to every connection in the pool. Any closed connections are automatically removed from the pool.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.Context",
    "page": "Docstrings",
    "title": "WebIO.Context",
    "category": "type",
    "text": "Scope(id; kwargs...)\n\nAn object which can send and receive messages.\n\nFields:\n\nid::String: A unique ID\nimports: An array of js/html/css assets to load before rendering the contents of a scope.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.Scope",
    "page": "Docstrings",
    "title": "WebIO.Scope",
    "category": "type",
    "text": "Scope(id; kwargs...)\n\nAn object which can send and receive messages.\n\nFields:\n\nid::String: A unique ID\nimports: An array of js/html/css assets to load before rendering the contents of a scope.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.SyncCallback",
    "page": "Docstrings",
    "title": "WebIO.SyncCallback",
    "category": "type",
    "text": "A callable which updates the frontend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.encode_scripts",
    "page": "Docstrings",
    "title": "WebIO.encode_scripts",
    "category": "function",
    "text": "Any </script> tags in the js/html node representation can cause problems, because if they are printed inside a <script> tag, even if they are in quotes in a javascript string, the html parser will still read them as a closing script tag, and thus end the script content prematurely, causing untold woe.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.ensure_connection",
    "page": "Docstrings",
    "title": "WebIO.ensure_connection",
    "category": "function",
    "text": "Ensure that the pool has at least one connection, potentially blocking the current task until that is the case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.mime_order",
    "page": "Docstrings",
    "title": "WebIO.mime_order",
    "category": "constant",
    "text": "Generic Conversion to Nodes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.re_register_renderables",
    "page": "Docstrings",
    "title": "WebIO.re_register_renderables",
    "category": "function",
    "text": "Called after a provider is setup\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.register_renderable",
    "page": "Docstrings",
    "title": "WebIO.register_renderable",
    "category": "function",
    "text": "`WebIO.register_renderable(MyType::Type)`\n\nRegisters that a WebIO.render method is available for instances of MyType. Allows WebIO to hook into the display machinery of backends such as Atom and IJulia to display the WebIO rendered version of the type as appropriate.\n\nAlso defines a Base.show(io::IO, m::MIME\"text/html\", x::MyType) as Base.show(io, m, WebIO.render(x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.render",
    "page": "Docstrings",
    "title": "WebIO.render",
    "category": "function",
    "text": "render(x::MyType)\n\nGeneric function that defines how a Julia object is rendered. Should return a Node object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.set_nosync",
    "page": "Docstrings",
    "title": "WebIO.set_nosync",
    "category": "function",
    "text": "Set observable without synchronizing with the counterpart on the browser\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WebIO.setup_provider",
    "page": "Docstrings",
    "title": "WebIO.setup_provider",
    "category": "function",
    "text": "setup_provider(s::Union{Symbol, AbstractString})\n\nPerform any side-effects necessary to set up the given provider. For example, in IJulia, this causes the frontend to load the webio javascript bundle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WebIO.@dom_strWebIO.@evaljsWebIO.@jsWebIO.@js_strWebIO.@privateWebIO.AbstractConnectionWebIO.ConnectionPoolWebIO.ContextWebIO.DOMWebIO.JSEvalSerializationWebIO.JSONContextWebIO.JSONSerializationWebIO.JSStringWebIO.NodeWebIO.ObservWebIO.ObservableWebIO.ScopeWebIO.SyncWebIO.SyncCallbackWebIO.WebIOWebIO.__init__WebIO.__inits__WebIO._countWebIO._dep_message_ContextWebIO._iterateWebIO._pvecWebIO._showWebIO.addconnection!WebIO.adddeps!WebIO.appendWebIO.baseurlWebIO.bundlejsWebIO.camel2kebabWebIO.childrenWebIO.cssparseWebIO.descendants_countWebIO.devsetupWebIO.dispatchWebIO.encode_scriptsWebIO.ensure_connectionWebIO.ensure_syncWebIO.escapeHTMLWebIO.evalWebIO.evaljsWebIO.handle!WebIO.handlejs!WebIO.htmlstringWebIO.iframeWebIO.import!WebIO.includeWebIO.instanceofWebIO.islocalWebIO.jsexprWebIO.kebab2camelWebIO.kwargs2propsWebIO.lifecycle_commandsWebIO.logWebIO.logmsgWebIO.lowerdepsWebIO.makedomWebIO.mergepropsWebIO.mime_orderWebIO.newidWebIO.nodeWebIO.nodetypeWebIO.observ_id_dictWebIO.offjsWebIO.onWebIO.ondependenciesWebIO.onimportWebIO.onjsWebIO.privateWebIO.process_messagesWebIO.promote_instanceofWebIO.propsWebIO.providers_initialisedWebIO.re_register_renderablesWebIO.recmergeWebIO.recmerge!WebIO.register_renderableWebIO.renderWebIO.renderable_typesWebIO.richest_htmlWebIO.richest_mimeWebIO.scopesWebIO.send_syncWebIO.set_nosyncWebIO.setbaseurl!WebIO.setchildWebIO.setchildrenWebIO.setinstanceofWebIO.setobservable!WebIO.setpropsWebIO.setupWebIO.setup_commWebIO.setup_providerWebIO.showchildrenWebIO.showindentWebIO.showpropsWebIO.str_interpolateWebIO.typenameWebIO.verbose_jsonWebIO.waiting_messagesWebIO.withchildWebIO.withlastchildWebIO.withscope"
},

]}
