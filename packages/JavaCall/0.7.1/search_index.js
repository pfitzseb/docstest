var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JavaCall-1",
    "page": "Readme",
    "title": "JavaCall",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)  (Image: JavaCall) (Image: JavaCall) (Image: JavaCall)  (Image: JavaCall)Call Java programs from Julia.Documentation is available at http://juliainterop.github.io/JavaCall.jl"
},

{
    "location": "autodocs/#JavaCall.classforname",
    "page": "Docstrings",
    "title": "JavaCall.classforname",
    "category": "function",
    "text": "classforname(name::String)\n\nCreate an instance of Class<name> (same as Class.forName(name) in Java)\n\nArgs\n\nname: The name of a class to instantiate\n\nReturns\n\nJavaObject Instance of Class<name>\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JavaCall.getname",
    "page": "Docstrings",
    "title": "JavaCall.getname",
    "category": "function",
    "text": "getname(cls::JClass)\n\nReturns the fully qualified name of the java class\n\nArgs\n\ncls: The JClass object\n\nReturns\n\nThe fully qualified name of the java class\n\n\n\n\n\ngetname(method::JMethod)\n\nReturns the fully qualified name of the java method\n\nArgs\n\ncls: The JClass method\n\nReturns\n\nThe fully qualified name of the method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JavaCall.getparametertypes",
    "page": "Docstrings",
    "title": "JavaCall.getparametertypes",
    "category": "function",
    "text": "getparametertypes(method::JMethod)\n\nReturns the parameter types of the java method\n\nArgs\n\nmethod: The java method object\n\nReturns\n\nVector the parametertypes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JavaCall.getreturntype",
    "page": "Docstrings",
    "title": "JavaCall.getreturntype",
    "category": "function",
    "text": "getreturntype(method::JMethod)\n\nReturns the return type of the java method\n\nArgs\n\nmethod: The java method object\n\nReturns\n\nReturns the type of the return object as a JClass\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JavaCall.isnull",
    "page": "Docstrings",
    "title": "JavaCall.isnull",
    "category": "function",
    "text": "isnull(obj::JavaObject)\n\nChecks if the passed JavaObject is null or not\n\nArgs\n\nobj: The object of type JavaObject\n\nReturns\n\ntrue if the passed object is null else false\n\n\n\n\n\nisnull(obj::JavaMetaClass)\n\nChecks if the passed JavaMetaClass is null or not\n\nArgs\n\nobj: The object of type JavaMetaClass\n\nReturns\n\ntrue if the passed object is null else false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JavaCall.listmethods",
    "page": "Docstrings",
    "title": "JavaCall.listmethods",
    "category": "function",
    "text": "listmethods(obj::JavaObject)\n\nLists the methods that are available on the java object passed\n\nArgs\n\nobj: The java object\n\nReturns\n\nList of methods\n\n\n\n\n\nlistmethods(obj::JavaObject, name::AbstractString)\n\nLists the methods that are available on the java object passed. The methods are filtered based on the name passed\n\nArgs\n\nobj: The java object\nname: The filter (e.g. method name)\n\nReturns\n\nList of methods available on the java object and matching the name passed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JavaCall.narrow",
    "page": "Docstrings",
    "title": "JavaCall.narrow",
    "category": "function",
    "text": "Given a JavaObject{T} narrows down T to a real class of the underlying object. For example, JavaObject{:java.lang.Object} pointing to java.lang.String will be narrowed down to JavaObject{:java.lang.String}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JavaCall.@jimportJavaCall.JAVA_HOME_CANDIDATESJavaCall.JClassJavaCall.JClassLoaderJavaCall.JMethodJavaCall.JNIEnvJavaCall.JNIInvokeInterfaceJavaCall.JNINativeInterfaceJavaCall.JNI_EDETACHEDJavaCall.JNI_EEXISTJavaCall.JNI_EINVALJavaCall.JNI_ENOMEMJavaCall.JNI_ERRJavaCall.JNI_EVERSIONJavaCall.JNI_FALSEJavaCall.JNI_OKJavaCall.JNI_TRUEJavaCall.JNI_VERSION_1_1JavaCall.JNI_VERSION_1_2JavaCall.JNI_VERSION_1_4JavaCall.JNI_VERSION_1_6JavaCall.JNI_VERSION_1_8JavaCall.JObjectJavaCall.JStringJavaCall.JThreadJavaCall.JavaCallJavaCall.JavaCallErrorJavaCall.JavaMetaClassJavaCall.JavaObjectJavaCall.JavaVMJavaCall.JavaVMInitArgsJavaCall.JavaVMOptionJavaCall.__init__JavaCall._jcallJavaCall._jfieldJavaCall._jimportJavaCall._jmc_cacheJavaCall._metaclassJavaCall.addClassPathJavaCall.addOptsJavaCall.assertloadedJavaCall.assertnotloadedJavaCall.classfornameJavaCall.conventional_nameJavaCall.convert_argJavaCall.convert_argsJavaCall.convert_resultJavaCall.cpJavaCall.createJavaCall.deleterefJavaCall.destroyJavaCall.evalJavaCall.findjvmJavaCall.getclassJavaCall.geterrorJavaCall.getnameJavaCall.getparametertypesJavaCall.getreturntypeJavaCall.has_nextJavaCall.includeJavaCall.initJavaCall.isConvertibleJavaCall.isloadedJavaCall.isnullJavaCall.iteratorJavaCall.javaclassnameJavaCall.javahome_winregJavaCall.jbooleanJavaCall.jbyteJavaCall.jcallJavaCall.jcharJavaCall.jdoubleJavaCall.jfieldJavaCall.jfloatJavaCall.jintJavaCall.jlongJavaCall.jnewJavaCall.jnifuncJavaCall.jprimitiveJavaCall.jshortJavaCall.jsizeJavaCall.jvalueJavaCall.jvmfuncJavaCall.libjvmJavaCall.libnameJavaCall.listmethodsJavaCall.metaclassJavaCall.method_signatureJavaCall.narrowJavaCall.optsJavaCall.penvJavaCall.pjvmJavaCall.real_jtypeJavaCall.sepJavaCall.signature"
},

]}
