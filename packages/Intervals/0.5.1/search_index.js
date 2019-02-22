var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Intervals-1",
    "page": "Readme",
    "title": "Intervals",
    "category": "section",
    "text": "(Image: Stable) (Image: Latest) (Image: Build Status) (Image: Build Status) (Image: CodeCov)This package defines:AbstractInterval, along with its subtypes:\nInterval{T}, which represents a non-iterable range between two endpoints of type T\nAnchoredInterval{P, T}, which represents a non-iterable range defined by a single value anchor::T and the value type P which represents the size of the range\nHourEnding, a type alias for AnchoredInterval{Hour(-1)}\nHourBeginning, a type alias for AnchoredInterval{Hour(1)}\nHE and HB, pseudoconstructors for HourEnding and HourBeginning that round the anchor up (HE) or down (HB) to the nearest hour\nInclusivity, which represents whether an AbstractInterval is open, half-open, or closed"
},

{
    "location": "autodocs/#Intervals.AnchoredInterval",
    "page": "Docstrings",
    "title": "Intervals.AnchoredInterval",
    "category": "type",
    "text": "AnchoredInterval{P, T}(anchor::T, [inclusivity::Inclusivity]) where {P, T} -> AnchoredInterval{P, T}\nAnchoredInterval{P, T}(anchor::T, [closed_left::Bool, closed_right::Bool]) where {P, T} -> AnchoredInterval{P, T}\n\nAnchoredInterval is a subtype of AbstractInterval that represents a non-iterable range or span of values defined not by two endpoints but instead by a single anchor point and the value type P which represents the size of the range. When P is positive, the anchor represents the lesser endpoint (the beginning of the range); when P is negative, the anchor represents the greater endpoint (the end of the range).\n\nThe interval represented by an AnchoredInterval value may be closed (both endpoints are included in the interval), open (neither endpoint is included), or half-open. This openness is defined by an Inclusivity value, which defaults to half-open (with the lesser endpoint included for positive values of P and the greater endpoint included for negative values).\n\nWhy?\n\nAnchoredIntervals are most useful in cases where a single value is used to stand in for a range of values. This happens most often with dates and times, where \"HE15\" is often used as shorthand for (14:00..15:00].\n\nTo this end, HourEnding is a type alias for AnchoredInterval{Hour(-1)}. Similarly, HourBeginning is a type alias for AnchoredInterval{Hour(1)}.\n\nRounding\n\nWhile the user may expect an HourEnding or HourBeginning value to be anchored to a specific hour, the constructor makes no guarantees that the anchor provided is rounded:\n\njulia> HourEnding(DateTime(2016, 8, 11, 2, 30))\nHourEnding{DateTime}(2016-08-11T02:30:00, Inclusivity(false, true))\n\nThe HE and HB pseudoconstructors round the input up or down to the nearest hour, as appropriate:\n\njulia> HE(DateTime(2016, 8, 11, 2, 30))\nHourEnding{DateTime}(2016-08-11T03:00:00, Inclusivity(false, true))\n\njulia> HB(DateTime(2016, 8, 11, 2, 30))\nHourBeginning{DateTime}(2016-08-11T02:00:00, Inclusivity(true, false))\n\nExample\n\njulia> AnchoredInterval{Hour(-1)}(DateTime(2016, 8, 11, 12))\nHourEnding{DateTime}(2016-08-11T12:00:00, Inclusivity(false, true))\n\njulia> AnchoredInterval{Day(1)}(DateTime(2016, 8, 11))\nAnchoredInterval{1 day, DateTime}(2016-08-11T00:00:00, Inclusivity(true, false))\n\njulia> AnchoredInterval{Minute(5)}(DateTime(2016, 8, 11, 12, 30), true, true)\nAnchoredInterval{5 minutes, DateTime}(2016-08-11T12:30:00, Inclusivity(true, true))\n\nSee also: Interval, Inclusivity, HE, HB\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.HB",
    "page": "Docstrings",
    "title": "Intervals.HB",
    "category": "function",
    "text": "HB(anchor, args...) -> HourBeginning\n\nHB is a pseudoconstructor for HourBeginning that rounds the anchor provided down to the nearest hour.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.HE",
    "page": "Docstrings",
    "title": "Intervals.HE",
    "category": "function",
    "text": "HE(anchor, args...) -> HourEnding\n\nHE is a pseudoconstructor for HourEnding that rounds the anchor provided up to the nearest hour.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.HourBeginning",
    "page": "Docstrings",
    "title": "Intervals.HourBeginning",
    "category": "type",
    "text": "HourBeginning{T<:TimeType} <: AbstractInterval{T}\n\nA type alias for AnchoredInterval{Hour(1), T} which is used to denote a 1-hour period of time which begins at a time instant (of type T).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.HourEnding",
    "page": "Docstrings",
    "title": "Intervals.HourEnding",
    "category": "type",
    "text": "HourEnding{T<:TimeType} <: AbstractInterval{T}\n\nA type alias for AnchoredInterval{Hour(-1), T} which is used to denote a 1-hour period of time which ends at a time instant (of type T).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.Inclusivity",
    "page": "Docstrings",
    "title": "Intervals.Inclusivity",
    "category": "type",
    "text": "Inclusivity(first::Bool, last::Bool) -> Inclusivity\n\nDefines whether an AbstractInterval is open, half-open, or closed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.Interval",
    "page": "Docstrings",
    "title": "Intervals.Interval",
    "category": "type",
    "text": "Interval(first, last, [inclusivity::Inclusivity]) -> Interval\nInterval(first, last, [closed_left::Bool, closed_right::Bool]) -> Interval\n\nAn Interval represents a non-iterable range or span of values (non-interable because, unlike a StepRange, no step is defined).\n\nAn Interval can be closed (both first and last are included in the interval), open (neither first nor last are included), or half-open. This openness is defined by an Inclusivity value, which defaults to closed.\n\nExample\n\njulia> i = Interval(0, 100, true, false)\nInterval{Int64}(0, 100, Inclusivity(true, false))\n\njulia> in(0, i)\ntrue\n\njulia> in(50, i)\ntrue\n\njulia> in(100, i)\nfalse\n\njulia> intersect(Interval(0, 25, false, false), Interval(20, 50, true, true)\nInterval{Int64}(20, 25, Inclusivity(true, false))\n\nInfix Constructor: ..\n\nA closed Interval can be constructed with the .. infix constructor:\n\njulia> Dates.today() - Dates.Week(1) .. Dates.today()\nInterval{Date}(2018-01-24, 2018-01-31, Inclusivity(true, true))\n\nNote on Ordering\n\nThe Interval constructor will compare first and last; if it finds that first > last, they will be reversed to ensure that first < last. This simplifies calls to in and intersect:\n\njulia> i = Interval(Date(2016, 8, 11), Date(2013, 2, 13), false, true)\nInterval{Date}(2013-02-13, 2016-08-11, Inclusivity(true, false))\n\nNote that the Inclusivity value is also reversed in this case.\n\nSee also: AnchoredInterval, Inclusivity\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Intervals.superset",
    "page": "Docstrings",
    "title": "Intervals.superset",
    "category": "function",
    "text": "superset(intervals::AbstractArray{<:AbstractInterval}) -> Interval\n\nCreate the smallest single interval which encompasses all of the provided intervals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.union",
    "page": "Docstrings",
    "title": "Base.union",
    "category": "function",
    "text": "union(intervals::AbstractVector{<:AbstractInterval})\n\nFlattens a vector of overlapping intervals into a new, smaller vector containing only non-overlapping intervals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.union!",
    "page": "Docstrings",
    "title": "Base.union!",
    "category": "function",
    "text": "union!(intervals::AbstractVector{<:Union{Interval, AbstractInterval}})\n\nFlattens a vector of overlapping intervals in-place to be a smaller vector containing only non-overlapping intervals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Intervals...Intervals.AbstractIntervalIntervals.AnchoredIntervalIntervals.BeginningIntervals.DirectionIntervals.EndingIntervals.EndpointIntervals.HBIntervals.HEIntervals.HourBeginningIntervals.HourEndingIntervals.InclusivityIntervals.IntervalIntervals.IntervalsIntervals.LeftIntervals.LeftEndpointIntervals.RightIntervals.RightEndpointIntervals.anchorIntervals.canonicalizeIntervals.contiguousIntervals.descriptionIntervals.evalIntervals.firstIntervals.greater_than_disjointIntervals.includeIntervals.inclusivityIntervals.isclosedIntervals.lastIntervals.less_than_disjointIntervals.mergeIntervals.overlapsIntervals.prefixIntervals.spanIntervals.supersetIntervals.time_stringIntervals.unionIntervals.union!Intervals.≪Intervals.≫Intervals.⊆Intervals.⊇Intervals.⊈Intervals.⊉"
},

]}
