var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#QDates-1",
    "page": "Readme",
    "title": "QDates",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)   (Image: QDates) (Image: QDates)   (Image: Coverage Status) (Image: codecov.io)The QDates package provides Japanese \"Kyūreki (旧暦)\" calendrical calculations into Julia.   \"Kyūreki (旧暦)\" is one of the Lunisolar Calendar that has been once used in Japan."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the release version, simply runPkg.add(\"QDates\")on the Julia console. To install the latest development version, run the following command instead:Pkg.clone(\"https://github.com/antimon2/QDates.jl.git\")\nPkg.build(\"QDates\")Then you can run the built-in unit tests withPkg.test(\"QDates\")to verify that everything is functioning properly on your machine."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "QDates has APIs almost compatible with the standard Dates package.using QDates\n\n### construct Kyūreki Date\nqdt = QDate(2017, 5, 1)\n# => 旧2017年05月01日\n\n### get year/month/day values\nDates.yearmonthday(qdt)\n# => (2017,5,1)\n\n### check leapmonth or not\nQDates.isleapmonth(qdt)\n# => false\n\n### arithmetic\nqdt1 = qdt + Dates.Month(1)\n# => 旧2017年閏05月01日\n\n### check leapmonth or not\nQDates.isleapmonth(qdt1)\n# => true\n\n### get year/month/isleapmonth/day values\nQDates.yearmonthleapday(qdt1)\n# => (2017,5,true,1)\n\n### comparison (with constructing leapmonth-date)\nqdt1 == QDate(2017, 5, true, 1)\n# => true\n\n### conversion to Gregorian Date\ndt = Date(qdt)\n# => 2017-05-26\n\n### conversion from Gregorian Date\nqdt0 = QDate(dt)\n# => 旧2017年05月01日\n\n### get today\nqtoday = QDates.today()\n# => 旧2017年04月10日\nqtoday == QDate(Dates.today())\n# => true\n\n### six-day week system\n[QDates.dayname(d) for d=qdt:QDate(2017,5,7)]\n# => 7-element Array{String,1}:\n#     \"大安\"\n#     \"赤口\"\n#     \"先勝\"\n#     \"友引\"\n#     \"先負\"\n#     \"仏滅\"\n#     \"大安\"\n\n[d for d=qdt:qdt1 if QDates.is大安(d)]\n# => 6-element Array{QDates.QDate,1}:\n#     旧2017年05月01日\n#     旧2017年05月07日\n#     旧2017年05月13日\n#     旧2017年05月19日\n#     旧2017年05月25日\n#     旧2017年閏05月01日\n\n### month names (old-fashioned)\n[QDates.monthname(m) for m=QDate(2017,1):Dates.Month(1):QDate(2017,12)]\n# => 13-element Array{String,1}:\n#     \"睦月\"\n#     \"如月\"\n#     \"弥生\"\n#     \"卯月\"\n#     \"皐月\"\n#     \"閏皐月\" # <- means leapmonth(\"閏月\") of \"皐月\"\n#     \"水無月\"\n#     \"文月\"\n#     \"葉月\"\n#     \"長月\"\n#     \"神無月\"\n#     \"霜月\"\n#     \"師走\"\n\n### The number of days in a month (29 or 30, not constant).\n[QDates.daysinmonth(m) for m=QDate(2017,1):Dates.Month(1):QDate(2017,12)]\n# => 13-element Array{Int64,1}:\n#     29 # 1月\n#     30 # 2月\n#     29 # 3月\n#     30 # 4月\n#     29 # 5月\n#     29 # 閏5月\n#     30 # 6月\n#     29 # 7月\n#     30 # 8月\n#     29 # 9月\n#     30 # 10月\n#     30 # 11月\n#     30 # 12月\n\n### leapyear or not (⇔ including leapmonth or not, not constant)\n[QDates.isleapyear(y) for y=QDate(2011):Dates.Year(1):QDate(2020)]\n# => 10-element Array{Bool,1}:\n#     false # 2011\n#      true # 2012\n#     false # 2013\n#      true # 2014\n#     false # 2015\n#     false # 2016\n#      true # 2017\n#     false # 2018\n#     false # 2019\n#      true # 2020\n"
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Julia (VERSION ≥ v\"0.6\")\nQDates v0.0.2 is available for Julia of VERSION < v\"0.6\"\nDates module\nCompat.jl"
},

{
    "location": "#Limitations-1",
    "page": "Readme",
    "title": "Limitations",
    "category": "section",
    "text": "Year range is 445-2100. QDate(2101) throws ArgumentError.\nNot support 32bit-Windows."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "QDates.jl is created by @antimon2 (Shunsuke GOTOH).qref.c (included in Calendrical module) by Tadayoshi FUNABA."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "QDates.DAYS_OFFSETQDates.FIRST_VALUEQDates.FIRST_YEARQDates.ISQDAYOFWEEKQDates.LAST_VALUEQDates.LAST_YEARQDates.QDateQDates.QDatesQDates._DAYS_IN_MONTH_FQDates._check_instantQDates._chk_errorQDates._ciQDates._qrefQDates._rqrefQDates._rqref_strictQDates.date2jdnQDates.dayQDates.dayabbrQDates.daynameQDates.dayofweekQDates.dayofyearQDates.daysQDates.daysinmonthQDates.daysinyearQDates.depsQDates.evalQDates.firstdayofmonthQDates.firstdayofyearQDates.includeQDates.isleapmonthQDates.isleapyearQDates.is仏滅QDates.is先勝QDates.is先負QDates.is友引QDates.is大安QDates.is赤口QDates.jdn2dateQDates.jdn2qdateQDates.lastdayofmonthQDates.lastdayofyearQDates.leap_prefixQDates.libqrefQDates.monthQDates.monthabbrQDates.monthdayQDates.monthleapdayQDates.monthnameQDates.monthsinyearQDates.qdate2jdnQDates.qdaysofweekQDates.qmonthsQDates.todayQDates.yearQDates.yearmonthQDates.yearmonthdayQDates.yearmonthleapQDates.yearmonthleapdayQDates.仏滅QDates.先勝QDates.先負QDates.卯月QDates.友引QDates.大安QDates.如月QDates.師走QDates.弥生QDates.文月QDates.水無月QDates.皐月QDates.睦月QDates.神無月QDates.葉月QDates.赤口QDates.長月QDates.霜月"
},

]}
