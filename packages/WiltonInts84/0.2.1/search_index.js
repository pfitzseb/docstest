var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#WiltonInts84-1",
    "page": "Readme",
    "title": "WiltonInts84",
    "category": "section",
    "text": "Exact integration of potentials over a triangle and the intersection of a triangle with a ring shaped domain.(Image: Build Status) (Image: codecov)int_T x-y^n dyMeant as the basis for singularity extraction type strategies for the computation of near singular integrals as encountered in the acoustic and electromagnetic boundary element method.The methods here are generalisations of those described in:[1] D. Wilton, S. Rao, A. Glisson, D. Schaubert, O. Al-Bundak, and C. Butler, “Potential integrals for uniform and linear source distributions on polygonal and polyhedral domains,” IEEE Transactions on Antennas and Propagation, vol. 32, no. 3, pp. 276–281, Mar. 1984.For details on how the techniques described here where generalised and the implementation, see the Jupyter notebook in this repo."
},

{
    "location": "#Usage-Example-1",
    "page": "Readme",
    "title": "Usage Example",
    "category": "section",
    "text": "using WiltonInts84\nusing FixedSizeArrays\n\nv1 = Vec(0.0, 0.0, 0.0)\nv2 = Vec(1.0, 0.0, 0.0)\nv3 = Vec(0.0, 1.0, 0.0)\nn = normalize(cross(v1-v3,v2-v3))\nx = (v1 + v2 + v3)/3 + 20n\n\nI, J = wiltonints(v1,v2,v3,x,Val{7})I will contain the integrals int_T R^n and J will contain the integrals int_T (xi - y) R^n, where xi is the projection of x on the plane supporting T. By virtue of a substantial amount of serendipity in the caluclations the vector case comes at almost no extra computational cost.note: I[1] will contain the integral of hR^-3, I[2] the integral of R^-1, I[i] the integral of R^i-3 for i larger or equal than 3. The integral of R^-2 is not computed. This is a special case that can only be expressed in terms of rather exotic special functions. Fortunately in boundary element methods this case never is required in the computation of interaction elements (not a coincidence I\'m sure!). Users need to be aware however when indexing into the result.note: The reason I[1] provides the integral of hR^3 including  the height of the singularity relative to the oriented triangle is to avoid infinities when h is zero. Instead the Cauchy principal value (which is zero for flat domains) is returned. Note that this means that as a function of h the integral of hR^3 is discontinuous at h = 0.note: In the example above points are provided by FixedSizeArrays. The code however does not rely upon this and any type complying to the vaguely defined notion of point semantics should work."
},

{
    "location": "#Space-Time-Galerkin-Interaction-Elements-1",
    "page": "Readme",
    "title": "Space-Time Galerkin Interaction Elements",
    "category": "section",
    "text": "In the implementation of time domain boundary element methods, one encounters integrals of the formint_D R^n dy\nint_D R^n (y-x) dywhere D is the intersection of a triangle and a spherical shell centered around x. This package can compute these integrals:ctr = wiltonints(p1,p2,p3,x,r,R,Val{N})The ability to compute these integrals was the main motivation for this package. A publicly avaible and well tested package I hope will render this class of integral equation based solvers more popular."
},

{
    "location": "autodocs/#WiltonInts84.angle",
    "page": "Docstrings",
    "title": "WiltonInts84.angle",
    "category": "function",
    "text": "angle(p,q)\n\nReturns the positive angle in [0,π] between p and q\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WiltonInts84.incidenceLineWithSphere",
    "page": "Docstrings",
    "title": "WiltonInts84.incidenceLineWithSphere",
    "category": "function",
    "text": "r, t = incidenceLineWithSphere(v, first, last, r)\n\nReturns the number of crossings and their barycentric coordinates for a circle with center v and radius r and a segment [a,b]. If the circle is tangent to the segment, zero crossings are reported.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#WiltonInts84.wiltonints",
    "page": "Docstrings",
    "title": "WiltonInts84.wiltonints",
    "category": "function",
    "text": "wiltonints(p1,p2,p3,x,[r,R],Val{N})\n\nCompute potential integrals over a triangle (intersected with a spherical) mesh. Powers of the distance up to degree N are computed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "WiltonInts84.CLOCKWISEWiltonInts84.COUNTERCLOCKWISEWiltonInts84.IntegrationPathWiltonInts84.WiltonInts84WiltonInts84.WorkSpaceWiltonInts84.addWiltonInts84.angleWiltonInts84.arcintsgWiltonInts84.buildgradWiltonInts84.circleintsgWiltonInts84.contourWiltonInts84.contour!WiltonInts84.distancetolineWiltonInts84.evalWiltonInts84.incidenceLineWithSphereWiltonInts84.includeWiltonInts84.insideWiltonInts84.maketupleWiltonInts84.segintsgWiltonInts84.wiltonintsWiltonInts84.workspace"
},

]}
