var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TimeFrames-1",
    "page": "Readme",
    "title": "TimeFrames",
    "category": "section",
    "text": "(Image: Package Evaluator)(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)A Julia library that defines TimeFrames (essentially for resampling TimeSeries)."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "julia> Pkg.add(\"TimeFrames\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using TimeFrames\n\njulia> tf = TimeFrame(\"5T\")\nTimeFrames.Minute(5 minutes,Begin::TimeFrames.Boundary = 1)\n\njulia> apply(tf, DateTime(2016, 9, 11, 20, 9))\n2016-09-11T20:05:00\n\njulia> apply(TimeFrame(\"2H\"), DateTime(2016, 9, 11, 20, 9))\n2016-09-11T20:00:00This library is used byTimeSeriesResampler.jl\nTimeSeriesIO.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TimeFrames.@tf_strTimeFrames.AbstractDatePeriodFrameTimeFrames.AbstractPeriodFrameTimeFrames.AbstractTimePeriodFrameTimeFrames.BeginTimeFrames.BoundaryTimeFrames.CustomTimeFrameTimeFrames.DatePeriodFrameTimeFrames.DayTimeFrames.EndTimeFrames.HourTimeFrames.MillisecondTimeFrames.MinuteTimeFrames.MonthBeginTimeFrames.MonthEndTimeFrames.NoTimeFrameTimeFrames.SecondTimeFrames.TimeFrameTimeFrames.TimeFramesTimeFrames.TimePeriodFrameTimeFrames.UndefBoundaryTimeFrames.WeekTimeFrames.YearBeginTimeFrames.YearEndTimeFrames._D_STR2TIMEFRAMETimeFrames._D_STR2TIMEFRAME_ADDITIONALTimeFrames._D_TIMEFRAME2STRTimeFrames._d_f_boundaryTimeFrames._period_stepTimeFrames.applyTimeFrames.dt_grouperTimeFrames.evalTimeFrames.includeTimeFrames.period_stepTimeFrames.promote_timetypeTimeFrames.rangeTimeFrames.tonext"
},

]}
