var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MIDI.jl-1",
    "page": "Readme",
    "title": "MIDI.jl",
    "category": "section",
    "text": "Documentation Travis AppVeyor Citation\n(Image: ) (Image: Build Status) (Image: Build status) (Image: status)MIDI.jl is a complete Julia package for reading and writing MIDI data. Besides fundamentally basic types, like MIDITrack or MetaEvent, we have a robust type that describes a music note."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the latest stable release, use ]add MIDI. To install the development version, use ]dev MIDI."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "For usage examples, documentation, contact info and everything else relevant with how MIDI works please visit the official documentation page: https://juliamusic.github.io/JuliaMusic_documentation.jl/latest/."
},

{
    "location": "#Other-1",
    "page": "Readme",
    "title": "Other",
    "category": "section",
    "text": "For the release history see the CHANGELOG file. For the contributor guide see CONTRIBUTING. For the code of conduit see COC."
},

{
    "location": "autodocs/#MIDI.BPM",
    "page": "Docstrings",
    "title": "MIDI.BPM",
    "category": "function",
    "text": "BPM(midi)\n\nReturn the BPM where the given MIDIFile was exported at.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.GM",
    "page": "Docstrings",
    "title": "MIDI.GM",
    "category": "constant",
    "text": "A dictionary that maps an instrument name (type String) to their hex value (type UInt8).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.MIDI",
    "page": "Docstrings",
    "title": "MIDI.MIDI",
    "category": "module",
    "text": "A Julia library for reading and writing MIDI files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.MIDIEvent",
    "page": "Docstrings",
    "title": "MIDI.MIDIEvent",
    "category": "type",
    "text": "MIDIEvent <: TrackEvent\n\nSee TrackEvent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.MIDIFile",
    "page": "Docstrings",
    "title": "MIDI.MIDIFile",
    "category": "type",
    "text": "MIDIFile <: Any\n\nType representing a file of MIDI data.\n\nFields\n\nformat::UInt16 : The format of the file. Can be 0, 1 or 2.\ntpq::Int16 : The time division of the track, ticks-per-quarter-note.\ntracks::Array{MIDITrack, 1} : The array of contained tracks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.MIDITrack",
    "page": "Docstrings",
    "title": "MIDI.MIDITrack",
    "category": "type",
    "text": "MIDITrack <: Any\n\nMIDITrack is simply a container for TrackEvents, since its only field is events::Vector{TrackEvent}.\n\nTrack chunks begin with four bytes spelling out \"MTrk\", followed by the length (in bytes) of the track (see readvariablelength), followed by a sequence of events.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.MetaEvent",
    "page": "Docstrings",
    "title": "MIDI.MetaEvent",
    "category": "type",
    "text": "MetaEvent <: TrackEvent\n\nSee TrackEvent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.Note",
    "page": "Docstrings",
    "title": "MIDI.Note",
    "category": "type",
    "text": "Note <: AbstractNote\n\nData structure describing a \"music note\".\n\nFields:\n\npitch::UInt8 : Pitch, starting from C0 = 0, adding one per semitone (middle-C is 60).\nvelocity::UInt8 : Dynamic intensity. Cannot be higher than 127 (0x7F).\nposition::UInt : Position in absolute time (since beginning of track), in ticks.\nduration::UInt : Duration in ticks.\nchannel::UInt8 = 0 : Channel of the track that the note is played on. Cannot be higher than 127 (0x7F).\n\nIf the channel of the note is 0 (default) it is not printed with show.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.Notes",
    "page": "Docstrings",
    "title": "MIDI.Notes",
    "category": "type",
    "text": "Notes{N<:AbstractNote}\n\nData structure describing a collection of \"music notes\", bundled with a ticks per quarter note measure.\n\nFields:\n\nnotes::Vector{N}\ntpq::Int16 : Ticks per quarter note. Defines the fundamental unit of measurement  of a note\'s position and duration, as well as the length of one quarter note.  Takes values from 1 to 960.\n\nNotes is iterated and accessed as if iterating or accessing its field notes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.SysexEvent",
    "page": "Docstrings",
    "title": "MIDI.SysexEvent",
    "category": "type",
    "text": "SysexEvent <: TrackEvent\n\nSee TrackEvent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.TrackEvent",
    "page": "Docstrings",
    "title": "MIDI.TrackEvent",
    "category": "type",
    "text": "TrackEvent <: Any\n\nAbstract supertype for all MIDI events.\n\nAll track events begin with a variable length time value (see readvariablelength) and have a field named dT which contains it. This number notes after how many ticks since the last event does the current even takes place.\n\nMIDIEvents then resume with a MIDI channel message defined in constants.jl. They\'re followed by 1 or 2 bytes, depending on the channel message (see MIDI.EVENTTYPETOLENGTH). If no valid channel message is identified, the previous seen channel message is used. After that the MIDI command is encoded.\n\nMetaEvents and SysexEvents both resume with a specific byte (see constants.jl).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.addevent!",
    "page": "Docstrings",
    "title": "MIDI.addevent!",
    "category": "function",
    "text": "addevent!(track::MIDITrack, time::Int, event::TrackEvent)\n\nAdd an event to the track at given time. The time is in absolute time, not relative.\n\nIf you want to add multiple events in one go, you should use the addevents! function instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.addevent_hint!",
    "page": "Docstrings",
    "title": "MIDI.addevent_hint!",
    "category": "function",
    "text": "addevent_hint!(track::MIDITrack, time::Int, event::TrackEvent,\n                eventindex::UInt, eventtime::UInt)\n\nAdd an event to the track at given time. The time is in absolute time, not relative. eventindex and eventtime have to be the index and the absolute time of a known event in track which lays BEFORE the position where event shall be added. This shortens the search for the correct position for event by skipping all TrackEvents before the specified one.\n\nReturns the index and absolute time of the added event.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.addevents!",
    "page": "Docstrings",
    "title": "MIDI.addevents!",
    "category": "function",
    "text": "addevents!(track::MIDITrack, times, events)\n\nAdd given events to given track at given times, internally doing all translations from absolute time to relative time.\n\nUsing this function is more efficient than a loop over single addevent! calls.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.addnote!",
    "page": "Docstrings",
    "title": "MIDI.addnote!",
    "category": "function",
    "text": "addnote!(track::MIDITrack, note::AbstractNote)\n\nAdd given note to given track, internally doing the translation from absolute time to relative time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.addnotes!",
    "page": "Docstrings",
    "title": "MIDI.addnotes!",
    "category": "function",
    "text": "addnotes!(track::MIDITrack, notes)\n\nAdd given notes to given track, internally doing all translations from absolute time to relative time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.addtrackname!",
    "page": "Docstrings",
    "title": "MIDI.addtrackname!",
    "category": "function",
    "text": "addtrackname!(track::MIDI.MIDITrack, name::String)\n\nAdd a name to the given track by attaching the \"track name\" MetaEvent to the start of the track.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.findtextevents",
    "page": "Docstrings",
    "title": "MIDI.findtextevents",
    "category": "function",
    "text": "findtextevents(eventtype, track)\n\nFind all \"text\" events specifield by eventtype in the track. The eventtype can be :text, :lyric, :marker, which will find the appropriate MetaEvents.\n\nFor convenience, this function does not return the events themselves. Instead, it returns three vectors: the first is the strings of the events, the second is the indices of the events in the track and the third is the absolute position of the events (since start of track).\n\nNotice - common music score editors like e.g. MuseScore, GuitarPro, etc., do not export the lyrics and text information when exporting midi files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.get_abs_pos",
    "page": "Docstrings",
    "title": "MIDI.get_abs_pos",
    "category": "function",
    "text": "get_abs_pos(track::MIDITrack, idxs)\n\nReturn the absolute positions (since track start) of the events given by the indices idxs of track.events.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.getnotes",
    "page": "Docstrings",
    "title": "MIDI.getnotes",
    "category": "function",
    "text": "getnotes(midi::MIDIFile, trackno = 2)\n\nFind all NOTEON and NOTEOFF midi events in the trackno track of a midi, that correspond to the same note value (pitch) and convert them into the Note datatype. There are special cases where NOTEOFF is actually encoded as NOTEON with 0 velocity. getnotes takes care of this.\n\nNotice that the first track of a midi typically doesn\'t have any notes, which is why the function defaults to track 2.\n\ngetnotes(track::MIDITrack, tpq = 960)\n\nFind the notes from track directly, passing also the ticks per quarter note.\n\nReturns: Notes{Note}, setting the ticks per quarter note as tpq. You can find the originally exported ticks per quarter note from the original MIDIFile through midi.tpq.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.ms_per_tick",
    "page": "Docstrings",
    "title": "MIDI.ms_per_tick",
    "category": "function",
    "text": "ms_per_tick(tpq, bpm)\nms_per_tick(midi::MIDIFile)\n\nReturn how many miliseconds is one tick, based on the beats per minute bpm and ticks per quarter note tpq.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.name_to_pitch",
    "page": "Docstrings",
    "title": "MIDI.name_to_pitch",
    "category": "function",
    "text": "name_to_pitch(p::String) -> Int\n\nReturn the pitch value of the given note name p, which can be of the form capital_letter*sharp*octave where:\n\ncapital_letter : from \"A\" to \"G\".\nsharp : one of \"#\" \"♯\" or \"\".\noctave : any integer (as a string), the octave number (an octave is 12 pitches). If not given it is assumed \"5\".\n\nWe define E.g. name_to_pitch(\"C4\") === 60 (i.e. string \"C4\", representing the middle-C, corresponds to be pitch 60).\n\nSee http://newt.phys.unsw.edu.au/jw/notes.html and https://en.wikipedia.org/wiki/C(musicalnote) .\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.pitch_to_name",
    "page": "Docstrings",
    "title": "MIDI.pitch_to_name",
    "category": "function",
    "text": "pitch_to_name(pitch) -> string\n\nReturn the name of the pitch, e.g. F5, A♯3 etc. in modern notation given the value in integer.\n\nReminder: middle C has pitch 60 and is displayed as C4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.programchange",
    "page": "Docstrings",
    "title": "MIDI.programchange",
    "category": "function",
    "text": "programchange(track::MIDITrack, time::Integer, channel::UInt8, program::UInt8)\n\nChange the program (instrument) on the given channel. Time is absolute, not relative to the last event.\n\nThe program must be specified in the range 1-128, not in 0-127!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.readMIDIFile",
    "page": "Docstrings",
    "title": "MIDI.readMIDIFile",
    "category": "function",
    "text": "readMIDIFile(filename::AbstractString)\n\nRead a file into a MIDIFile data type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.readvariablelength",
    "page": "Docstrings",
    "title": "MIDI.readvariablelength",
    "category": "function",
    "text": "readvariablelength(f::IO)\n\nVariable length numbers in MIDI files are represented as a sequence of bytes. If the first bit is 0, we\'re looking at the last byte in the sequence. The remaining 7 bits indicate the number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.testmidi",
    "page": "Docstrings",
    "title": "MIDI.testmidi",
    "category": "function",
    "text": "testmidi()\n\nReturn the path to a test MIDI file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.textevent",
    "page": "Docstrings",
    "title": "MIDI.textevent",
    "category": "function",
    "text": "textevent(eventtype, text)\n\nCreate an event using the string text. The eventtype can be :text, :lyric, :marker, which will create the appropriate type of MetaEvent.\n\nThe returned event can be added to a MIDITrack via either addevent! or addevents! for multiple events.\n\nNotice - Cubase can read the marker events and MuseScore can read the lyrics events. We haven\'t seen any editor that can read the text events, so far.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.trackname",
    "page": "Docstrings",
    "title": "MIDI.trackname",
    "category": "function",
    "text": "trackname(track::MIDI.MIDITrack)\n\nReturn the name of the given track as a string, by finding the \"track name\" MetaEvent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.writeMIDIFile",
    "page": "Docstrings",
    "title": "MIDI.writeMIDIFile",
    "category": "function",
    "text": "writeMIDIFile(filename::AbstractString, data::MIDIFile)\n\nWrite a MIDIFile as a \".mid\" file to the given filename.\n\nwriteMIDIFile(filename::AbstractString, notes::Notes)\n\nCreate a MIDIFile directly from notes, using format 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MIDI.writevariablelength",
    "page": "Docstrings",
    "title": "MIDI.writevariablelength",
    "category": "function",
    "text": "writevariablelength(f::IO, number::Int)\n\nWrite on f the given number, firstly converting it to the \"variable length\" format. See the documentation for more.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MIDI.AbstractNoteMIDI.BPMMIDI.CHANNELPRESSUREMIDI.CONTROLCHANGEMIDI.EVENTTYPETOLENGTHMIDI.GMMIDI.LYRICEVMIDI.MARKEREVMIDI.METAMIDI.METASETTEMPOMIDI.METATRACKENDMIDI.MIDIMIDI.MIDIEventMIDI.MIDIFileMIDI.MIDITrackMIDI.MTHDMIDI.MTRKMIDI.MetaEventMIDI.NAME_TO_PITCHMIDI.NOTEOFFMIDI.NOTEONMIDI.NoteMIDI.NotesMIDI.PITCHWHEELCHANGEMIDI.PITCH_TO_NAMEMIDI.POLYPHONICKEYPRESSUREMIDI.PROGRAMCHANGEMIDI.SYSEXMIDI.SysexEventMIDI.TEXTEVMIDI.TrackEventMIDI._notevectorprintMIDI.addevent!MIDI.addevent_hint!MIDI.addevents!MIDI.addnote!MIDI.addnotes!MIDI.addtrackname!MIDI.channelnumberMIDI.dochannelsconflictMIDI.evalMIDI.findtexteventsMIDI.findtracknameMIDI.fromabsolutetime!MIDI.get_abs_posMIDI.getnotesMIDI.getprogramchangeeventsMIDI.includeMIDI.insertsorted!MIDI.isMIDIeventMIDI.isdatabyteMIDI.ismetaeventMIDI.isstatusbyteMIDI.issysexeventMIDI.ms_per_tickMIDI.name_to_pitchMIDI.pitch_to_nameMIDI.programchangeMIDI.readMIDIFileMIDI.readMIDIFileastype0MIDI.readMIDIeventMIDI.readMIDIfileMIDI.readmetaeventMIDI.readsysexeventMIDI.readtrackMIDI.readvariablelengthMIDI.s_to_textMIDI.testmidiMIDI.texteventMIDI.toabsolutetime!MIDI.tracknameMIDI.type0totype1MIDI.type0totype1!MIDI.type1totype0MIDI.type1totype0!MIDI.writeMIDIFileMIDI.writeMIDIfileMIDI.writeeventMIDI.writetrackMIDI.writevariablelength"
},

]}
