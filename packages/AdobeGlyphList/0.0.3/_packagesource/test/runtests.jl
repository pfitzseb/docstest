using Compat
using AdobeGlyphList
using Compat.Test

@test size(AdobeGlyphList.agl()) == (4281, 2)
@test size(AdobeGlyphList.aglfn()) == (586, 3)
@test size(AdobeGlyphList.zapfdingbats()) == (201, 2)
