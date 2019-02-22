var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#TimeZones.jl-1",
    "page": "Readme",
    "title": "TimeZones.jl",
    "category": "section",
    "text": "(Image: TimeZones v0.4) (Image: TimeZones v0.5) (Image: TimeZones v0.6) (Image: TimeZones v0.7) <br/> (Image: Travis CI) (Image: AppVeyor) (Image: codecov) <br/> (Image: Stable Documentation) (Image: Latest Documentation)IANA time zone database access for the Julia programming language. TimeZones.jl extends the Date/DateTime support for Julia to include a new time zone aware TimeType: ZonedDateTime."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "A new time zone aware TimeType: ZonedDateTime\nSupport for all time zones in the IANA time zone database (also known as the tz/zoneinfo/Olson database)\nZonedDateTime-Period arithmetic similar to that of DateTime\nLocal system time zone information as a TimeZone\nCurrent system time in any TimeZone\nSupport for reading the tzfile format\nString parsing of ZonedDateTime using DateFormat"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "TimeZones.jl can be installed through the Julia package manager:julia> Pkg.add(\"TimeZones\")For detailed installation instructions see the documentation linked above."
},

{
    "location": "autodocs/#TimeZones.@optional",
    "page": "Docstrings",
    "title": "TimeZones.@optional",
    "category": "macro",
    "text": "@optional(expr)\n\nCreates multiple method signatures to allow optional arguments before required arguments. For example:\n\nf(a=1, b=2, c) = ...\n\nbecomes:\n\nf(a, b, c) = ...\nf(a, c) = f(a, 2, c)\nf(c) = f(1, 2, c)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.@tz_str",
    "page": "Docstrings",
    "title": "TimeZones.@tz_str",
    "category": "macro",
    "text": "@tz_str -> TimeZone\n\nConstructs a TimeZone subtype based upon the string at parse time. See docstring of TimeZone for more details.\n\njulia> tz\"Africa/Nairobi\"\nAfrica/Nairobi (UTC+3)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.AmbiguousTimeError",
    "page": "Docstrings",
    "title": "TimeZones.AmbiguousTimeError",
    "category": "type",
    "text": "AmbiguousTimeError(local_datetime, timezone)\n\nThe provided local datetime is ambiguous within the specified timezone. Typically occurs on daylight saving time transitions which \"fall back\" causing duplicate hour long period.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dates.DateTime",
    "page": "Docstrings",
    "title": "Dates.DateTime",
    "category": "type",
    "text": "DateTime(::ZonedDateTime) -> DateTime\n\nReturns an equivalent DateTime without any TimeZone information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.FixedTimeZone",
    "page": "Docstrings",
    "title": "TimeZones.FixedTimeZone",
    "category": "type",
    "text": "FixedTimeZone\n\nA TimeZone with a constant offset for all of time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.NonExistentTimeError",
    "page": "Docstrings",
    "title": "TimeZones.NonExistentTimeError",
    "category": "type",
    "text": "NonExistentTimeError(local_datetime, timezone)\n\nThe provided local datetime is does not exist within the specified timezone. Typically occurs on daylight saving time transitions which \"spring forward\" causing an hour long period to be skipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dates.TimeZone",
    "page": "Docstrings",
    "title": "Dates.TimeZone",
    "category": "type",
    "text": "TimeZone(str::AbstractString) -> TimeZone\n\nConstructs a TimeZone subtype based upon the string. If the string is a recognized time zone name then data is loaded from the compiled IANA time zone database. Otherwise the string is assumed to be a static time zone.\n\nA list of recognized time zones names is available from timezone_names(). Supported static time zone string formats can be found in FixedTimeZone(::AbstractString).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.UTCOffset",
    "page": "Docstrings",
    "title": "TimeZones.UTCOffset",
    "category": "type",
    "text": "UTCOffset\n\nA UTCOffset is an amount of time subtracted from or added to UTC to get the current local time – whether it\'s standard time or daylight saving time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.UnhandledTimeError",
    "page": "Docstrings",
    "title": "TimeZones.UnhandledTimeError",
    "category": "type",
    "text": "UnhandledTimeError(timezone)\n\nThe timezone calculation occurs beyond the last calculated transition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.VariableTimeZone",
    "page": "Docstrings",
    "title": "TimeZones.VariableTimeZone",
    "category": "type",
    "text": "VariableTimeZone\n\nA TimeZone with an offset that changes over time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.ZonedDateTime",
    "page": "Docstrings",
    "title": "TimeZones.ZonedDateTime",
    "category": "type",
    "text": "ZonedDateTime(y, [m, d, h, mi, s, ms], tz, [amb]) -> DateTime\n\nConstruct a ZonedDateTime type by parts. Arguments y, m, ..., ms must be convertible to Int64 and tz must be a TimeZone. If the given DateTime is ambiguous in the given TimeZone then amb can be supplied to resolve ambiguity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.all_timezones",
    "page": "Docstrings",
    "title": "TimeZones.all_timezones",
    "category": "function",
    "text": "all_timezones() -> Array{TimeZone}\n\nReturns all pre-computed TimeZones.\n\n\n\n\n\nall_timezones(criteria::Function) -> Array{TimeZone}\n\nReturns TimeZones that match the given criteria function. The criteria function takes two parameters: UTC transition (DateTime) and transition zone (FixedTimeZone).\n\nExamples\n\nFind all time zones which contain an absolute UTC offset greater than 15 hours:\n\nall_timezones() do dt, zone\n    abs(zone.offset.std) > Dates.Second(Dates.Hour(15))\nend\n\nDetermine all time zones which have a non-hourly daylight saving time offset:\n\nall_timezones() do dt, zone\n    zone.offset.dst % Dates.Second(Dates.Hour(1)) != 0\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.astimezone",
    "page": "Docstrings",
    "title": "TimeZones.astimezone",
    "category": "function",
    "text": "astimezone(zdt::ZonedDateTime, tz::TimeZone) -> ZonedDateTime\n\nConverts a ZonedDateTime from its current TimeZone into the specified TimeZone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.build",
    "page": "Docstrings",
    "title": "TimeZones.build",
    "category": "function",
    "text": "build(version=\"latest\", regions=REGIONS; force=false) -> Void\n\nBuilds the TimeZones package with the specified tzdata version and regions. The version is typically a 4-digit year followed by a lowercase ASCII letter (e.g. \"2016j\"). Users can also specify which regions, or tz source files, should be compiled. Available regions are listed under TimeZones.REGIONS and TimeZones.LEGACY_REGIONS. The force flag is used to re-download tzdata archives.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.first_valid",
    "page": "Docstrings",
    "title": "TimeZones.first_valid",
    "category": "function",
    "text": "first_valid(local_dt::DateTime, tz::VariableTimeZone, step::Period)\n\nConstruct a valid ZonedDateTime by adjusting the local DateTime. If the local DateTime is non-existent then it will be adjusted using the step to be after the gap. When the local DateTime is ambiguous the first ambiguous DateTime will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dates.guess",
    "page": "Docstrings",
    "title": "Dates.guess",
    "category": "function",
    "text": "guess(start::ZonedDateTime, finish::ZonedDateTime, step) -> Integer\n\nGiven a start and end date, indicates how many steps/periods are between them. Defining this function allows StepRanges to be defined for ZonedDateTimes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.interpret",
    "page": "Docstrings",
    "title": "TimeZones.interpret",
    "category": "function",
    "text": "interpret(dt::DateTime, tz::VariableTimeZone, context::Type{Union{Local,UTC}}) -> Array{ZonedDateTime}\n\nProduces a list of possible ZonedDateTimes given a DateTime and VariableTimeZone. The result will be returned in chronological order. Note that DateTimes in the local context typically return 0-2 results while the UTC context will always return 1 result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.istimezone",
    "page": "Docstrings",
    "title": "TimeZones.istimezone",
    "category": "function",
    "text": "istimezone(str::AbstractString) -> Bool\n\nTests whether a string is a valid name for constructing a TimeZone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.last_valid",
    "page": "Docstrings",
    "title": "TimeZones.last_valid",
    "category": "function",
    "text": "last_valid(local_dt::DateTime, tz::VariableTimeZone, step::Period)\n\nConstruct a valid ZonedDateTime by adjusting the local DateTime. If the local DateTime is non-existent then it will be adjusted using the step to be before the gap. When the local DateTime is ambiguous the last ambiguous DateTime will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.localtime",
    "page": "Docstrings",
    "title": "TimeZones.localtime",
    "category": "function",
    "text": "localtime(::ZonedDateTime) -> DateTime\n\nCreates a local or civil DateTime from the given ZonedDateTime. For example the 2014-05-30T08:11:24-04:00 would return 2014-05-30T08:11:24.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.localzone",
    "page": "Docstrings",
    "title": "TimeZones.localzone",
    "category": "function",
    "text": "localzone() -> TimeZone\n\nReturns a TimeZone object that is equivalent to the system\'s current time zone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.next_transition_instant",
    "page": "Docstrings",
    "title": "TimeZones.next_transition_instant",
    "category": "function",
    "text": "next_transition_instant(zdt::ZonedDateTime) -> ZonedDateTime\nnext_transition_instant(tz::TimeZone=localzone()) -> ZonedDateTime\n\nDetermine the next instant at which a time zone transition occurs (typically due to daylight-savings time).\n\nNote that the provided ZonedDateTime isn\'t normally constructable:\n\njulia> instant = next_transition_instant(ZonedDateTime(2018, 3, 1, tz\"Europe/London\"))\n2018-03-25T01:00:00+00:00\n\njulia> instant - Millisecond(1)  # Instant prior to the change\n2018-03-25T00:59:59.999+00:00\n\njulia> instant - Millisecond(0)  # Instant after the change\n2018-03-25T02:00:00+01:00\n\njulia> ZonedDateTime(2018, 3, 25, 1, tz\"Europe/London\")  # Cannot normally construct the `instant`\nERROR: NonExistentTimeError: Local DateTime 2018-03-25T01:00:00 does not exist within Europe/London\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dates.now",
    "page": "Docstrings",
    "title": "Dates.now",
    "category": "function",
    "text": "now(::TimeZone) -> ZonedDateTime\n\nReturns a ZonedDateTime corresponding to the user\'s system time in the specified TimeZone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.parse_tz_format",
    "page": "Docstrings",
    "title": "TimeZones.parse_tz_format",
    "category": "function",
    "text": "parse_tz_format(str) -> TimeZone\n\nParse the time zone format typically provided via the \"TZ\" environment variable. Details on the format can be found under the tzset man page.\n\nCurrently this function handles only the first format which is a fixed time zone without daylight saving time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.read_tzfile",
    "page": "Docstrings",
    "title": "TimeZones.read_tzfile",
    "category": "function",
    "text": "read_tzfile(io::IO, name::AbstractString) -> TimeZone\n\nRead the content of an I/O stream and process it as a POSIX tzfile. The returned TimeZone will be given the suppiled name name unless a FixedTimeZone is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.shift_gap",
    "page": "Docstrings",
    "title": "TimeZones.shift_gap",
    "category": "function",
    "text": "shift_gap(local_dt::DateTime, tz::VariableTimeZone) -> Array{ZonedDateTime}\n\nGiven a non-existent local DateTime in a TimeZone produces two valid ZonedDateTimes that span the gap. Providing a valid local DateTime returns an empty array. Note that this function does not support passing in a UTC DateTime since there are no non-existent UTC DateTimes.\n\nAside: the function name refers to a period of invalid local time (gap) caused by daylight saving time or offset changes (shift).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.show_next_transition",
    "page": "Docstrings",
    "title": "TimeZones.show_next_transition",
    "category": "function",
    "text": "show_next_transition(io::IO=stdout, zdt::ZonedDateTime)\nshow_next_transition(io::IO=stdout, tz::TimeZone=localzone())\n\nDisplay useful information about the next time zone transition (typically due to daylight-savings time). Information displayed includes:\n\nTransition Date: the local date at which the transition occurs (2018-10-28)\nLocal Time Change: the way the local clock with change (02:00 falls back to 01:00) and   the direction of the change (\"Forward\" or \"Backward\")\nOffset Change: the standard offset and DST offset that occurs before and after the  transition\nTransition From: the instant before the transition occurs\nTransition To: the instant after the transition occurs\n\njulia> show_next_transition(ZonedDateTime(2018, 8, 1, tz\"Europe/London\"))\nTransition Date:   2018-10-28\nLocal Time Change: 02:00 → 01:00 (Backward)\nOffset Change:     UTC+0/+1 → UTC+0/+0\nTransition From:   2018-10-28T01:59:59.999+01:00 (BST)\nTransition To:     2018-10-28T01:00:00.000+00:00 (GMT)\n\njulia> show_next_transition(ZonedDateTime(2011, 12, 1, tz\"Pacific/Apia\"))\nTransition Date:   2011-12-30\nLocal Time Change: 00:00 → 00:00 (Forward)\nOffset Change:     UTC-11/+1 → UTC+13/+1\nTransition From:   2011-12-29T23:59:59.999-10:00\nTransition To:     2011-12-31T00:00:00.000+14:00\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.timezone",
    "page": "Docstrings",
    "title": "TimeZones.timezone",
    "category": "function",
    "text": "timezone(::ZonedDateTime) -> TimeZone\n\nReturns the TimeZone used by the ZonedDateTime.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.timezone_abbrs",
    "page": "Docstrings",
    "title": "TimeZones.timezone_abbrs",
    "category": "function",
    "text": "timezone_abbrs -> Array{AbstractString}\n\nReturns a sorted list of all pre-computed time zone abbrevations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.timezone_names",
    "page": "Docstrings",
    "title": "TimeZones.timezone_names",
    "category": "function",
    "text": "timezone_names() -> Array{AbstractString}\n\nReturns a sorted list of all of the valid names for constructing a TimeZone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.timezones_from_abbr",
    "page": "Docstrings",
    "title": "TimeZones.timezones_from_abbr",
    "category": "function",
    "text": "timezones_from_abbr(abbr) -> Array{TimeZone}\n\nReturns all TimeZones that have the specified abbrevation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dates.today",
    "page": "Docstrings",
    "title": "Dates.today",
    "category": "function",
    "text": "today(tz::TimeZone) -> Date\n\nReturns the date portion of now(tz) in local time.\n\nExamples\n\njulia> a, b = now(tz\"Pacific/Midway\"), now(tz\"Pacific/Apia\")\n(2017-11-09T03:47:04.226-11:00, 2017-11-10T04:47:04.226+14:00)\n\njulia> a - b\n0 milliseconds\n\njulia> today(tz\"Pacific/Midway\"), today(tz\"Pacific/Apia\")\n(2017-11-09, 2017-11-10)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.todayat",
    "page": "Docstrings",
    "title": "TimeZones.todayat",
    "category": "function",
    "text": "todayat(tod::Time, tz::TimeZone, [amb]) -> ZonedDateTime\n\nCreates a ZonedDateTime for today at the specified time of day. If the result is ambiguous in the given TimeZone then amb can be supplied to resolve ambiguity.\n\nExamples\n\njulia> today(tz\"Europe/Warsaw\")\n2017-11-09\n\njulia> todayat(Time(10, 30), tz\"Europe/Warsaw\")\n2017-11-09T10:30:00+01:00\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.transition_range",
    "page": "Docstrings",
    "title": "TimeZones.transition_range",
    "category": "function",
    "text": "transition_range(dt::DateTime, tz::VariableTimeZone, context::Type{Union{Local,UTC}}) -> UnitRange\n\nFinds the indexes of the tz transitions which may be applicable for the dt. The given DateTime is expected to be local to the time zone or in UTC as specified by context. Note that UTC context will always return a range of length one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#TimeZones.utc",
    "page": "Docstrings",
    "title": "TimeZones.utc",
    "category": "function",
    "text": "utc(::ZonedDateTime) -> DateTime\n\nCreates a utc DateTime from the given ZonedDateTime. For example the 2014-05-30T08:11:24-04:00 would return 2014-05-30T12:11:24.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "TimeZones.@optionalTimeZones.@tz_strTimeZones.ARCHIVE_DIRTimeZones.AmbiguousTimeErrorTimeZones.COMPILED_DIRTimeZones.DEPS_DIRTimeZones.DateTimeTimeZones.FIXED_TIME_ZONE_REGEXTimeZones.FixedTimeZoneTimeZones.ISOZonedDateTimeFormatTimeZones.LocalTimeZones.NonExistentTimeErrorTimeZones.PKG_DIRTimeZones.TIME_ZONESTimeZones.TZDataTimeZones.TZFILE_MAXTimeZones.TZ_REGEXTimeZones.TZ_SOURCE_DIRTimeZones.TimeErrorTimeZones.TimeZoneTimeZones.TimeZonesTimeZones.TransitionTimeZones.TransitionTimeInfoTimeZones.UTCOffsetTimeZones.UnhandledTimeErrorTimeZones.VariableTimeZoneTimeZones.ZonedDateTimeTimeZones.__init__TimeZones.abbreviationTimeZones.all_timezonesTimeZones.astimezoneTimeZones.buildTimeZones.dayTimeZones.dayofmonthTimeZones.evalTimeZones.first_validTimeZones.firstdayofmonthTimeZones.firstdayofquarterTimeZones.firstdayofweekTimeZones.firstdayofyearTimeZones.guessTimeZones.hourTimeZones.includeTimeZones.interpretTimeZones.isdstTimeZones.istimezoneTimeZones.julian2zdtTimeZones.last_validTimeZones.lastdayofmonthTimeZones.lastdayofquarterTimeZones.lastdayofweekTimeZones.lastdayofyearTimeZones.localtimeTimeZones.localzoneTimeZones.millisecondTimeZones.minuteTimeZones.monthTimeZones.monthdayTimeZones.next_transition_instantTimeZones.nowTimeZones.nullableTimeZones.offset_stringTimeZones.optionalTimeZones.parse_tz_formatTimeZones.read_tzfileTimeZones.read_tzfile_internalTimeZones.secondTimeZones.shift_gapTimeZones.show_next_transitionTimeZones.timezoneTimeZones.timezone_abbrsTimeZones.timezone_namesTimeZones.timezones_from_abbrTimeZones.todayTimeZones.todayatTimeZones.transition_rangeTimeZones.tryparsenext_fixedtzTimeZones.tryparsenext_tzTimeZones.unix2zdtTimeZones.utcTimeZones.utc_tzTimeZones.weekTimeZones.yearTimeZones.yearmonthTimeZones.yearmonthdayTimeZones.zdt2julianTimeZones.zdt2unix"
},

]}
