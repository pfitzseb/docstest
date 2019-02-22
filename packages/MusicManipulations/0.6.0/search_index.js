var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Documentation Travis AppVeyor\n(Image: ) (Image: Build Status) (Image: Build status)Manipulate music data (translate/transpose etc)\nAdvanced music data extraction\nQuantize/classify notes\nTake your music practice to the next level\nPrint notes and midi files (the Julia structs) directly into a staff using MuseScore."
},

{
    "location": "#Coming-soon-1",
    "page": "Readme",
    "title": "Coming soon",
    "category": "section",
    "text": "Humanize"
},

{
    "location": "autodocs/#MusicManipulations.MoreVelNote",
    "page": "Docstrings",
    "title": "MusicManipulations.MoreVelNote",
    "category": "type",
    "text": "MoreVelNote\n\nEnables velocities higher than 127 but other than that identical with Note.\n\nWhen Notes with MoreVelNote are written into a MIDITrack, any velocity higher than 127 is equaled to 127.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.allowedpitches",
    "page": "Docstrings",
    "title": "MusicManipulations.allowedpitches",
    "category": "function",
    "text": "allowedpitches(notes::Notes, allowed) -> newnotes\n\nOnly keep the notes that have a pitch specified in allowed (one or many pitches).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.classify",
    "page": "Docstrings",
    "title": "MusicManipulations.classify",
    "category": "function",
    "text": "classify(notes::Notes, grid)\nclassify(note::AbstractNote, grid, tpq::Integer)\n\nClassify given notes according to the given grid.\n\nReturns an integer (or vector of integers) that corresponds to the index of the closest grid point to the note position modulo the quarter note. 1 means start of the grid and length(grid) means end of the grid (i.e. next quarter note).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.firstnotes",
    "page": "Docstrings",
    "title": "MusicManipulations.firstnotes",
    "category": "function",
    "text": "firstnotes(notes, grid)\n\nReturn the notes that first appear in each grid point, without quantizing them.\n\nThis function does not consider the notes modulo the quarter note! Different quarter notes have different grid points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.getnotnotes",
    "page": "Docstrings",
    "title": "MusicManipulations.getnotnotes",
    "category": "function",
    "text": "getnotnotes(track::MIDI.MIDITrack) -> (abs_pos, events)\n\nFind all events in track that are not NOTEON or NOTEOFF. Return the found events and their positions in absolute time (in ticks).\n\nEach event can be added to another MIDITrack using\n\nfor ev in zip(abs_pos, events)\n    MIDI.addevent!(newtrack, ev...)\nend\n\nSee also replace_notes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.MuseScore.musescore",
    "page": "Docstrings",
    "title": "MusicManipulations.MuseScore.musescore",
    "category": "function",
    "text": "musescore(file, notes | midi; display = true, rmmidi = false)\n\nUse the open source software \"MuseScore\" to create a score and save the output to file. By default it will also display the created file, which can be either a .pdf or a .png. The function must first create a MIDI file (uses the same name as file). You can choose to delete it afterwards (rmmidi).\n\nMuseScore must be accessible from the command line. In Windows try MuseScore -v to ensure that, otherwise mscore -v.\n\nIf given a .png the actual file name will end with -1, -2 etc. for each page of the score. Notice that MuseScore must be accessible from the command line for this function to work.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.note_to_fundamental",
    "page": "Docstrings",
    "title": "MusicManipulations.note_to_fundamental",
    "category": "function",
    "text": "note_to_fundamental(note(s))\n\nReturn a String or Vector{String} with the fundamental pitch of the notes (i.e. without the octave information).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.pitch_frequency",
    "page": "Docstrings",
    "title": "MusicManipulations.pitch_frequency",
    "category": "function",
    "text": "pitch_frequency(notes)\n\nReturn the pitches (without octaves) in the given notes, sorted by most to least frequent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.quantize",
    "page": "Docstrings",
    "title": "MusicManipulations.quantize",
    "category": "function",
    "text": "quantize(notes::Notes, grid, duration = true)\nquantize(note::AbstractNote, grid, tpq::Integer)\n\nReturn a quantized copy of the given notes on the given grid, which can be any sorted iterable that starts on 0 and ends on 1.\n\nEach note is quantized (relocated) to its closest point of the grid, by first identifying that point using classify. It is assumed that the grid is the same for all quarter notes of the track.\n\nIf duration is true, the function also quantizes the duration of the notes on the same grid.\n\nThis function respects the notes\' absolute position and quantizes in absolute position, not relative.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.quantize_duration!",
    "page": "Docstrings",
    "title": "MusicManipulations.quantize_duration!",
    "category": "function",
    "text": "quantize_duration!(notes::Notes, grid)\nquantize_duration!(note::Note, grid, tpq)\n\nQuantize the duration of given notes on the grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.random_notes_sequence",
    "page": "Docstrings",
    "title": "MusicManipulations.random_notes_sequence",
    "category": "function",
    "text": "random_notes_sequence(motifs::Vector{Notes{N}}, q, δq = 0; weights)\n\nCreate a random sequence from a pool of notes (motifs) such that it has total length ℓ exactly q - δq ≤ ℓ ≤ q + δq. Notice that q is measured in ticks. Optionally pass keyword weights to sample different motifs with different weights (either as frequencies or as probabilities).\n\nReturn the result as a single Notes container, and also return the sequence of motifs used.\n\nThis function uses random_sequence from the module MotifSequenceGenerator, adapted to the Notes struct.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.randomnotes",
    "page": "Docstrings",
    "title": "MusicManipulations.randomnotes",
    "category": "function",
    "text": "randomnotes(n::Int, tpq = 960)\n\nGenerate some random notes that start sequentially.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.replace_notes",
    "page": "Docstrings",
    "title": "MusicManipulations.replace_notes",
    "category": "function",
    "text": "replace_notes(oldtrack::MIDITrack, notes::Notes) -> newtrack\n\nCreate a new midi track that copies all MIDIEvents that are not NOTEON or NOTEOFF from the oldtrack while it also adds all notes from notes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.scale_identification",
    "page": "Docstrings",
    "title": "MusicManipulations.scale_identification",
    "category": "function",
    "text": "scale_identification(notes)\n\nReturn the most probable scale that represents the given notes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.separatepitches",
    "page": "Docstrings",
    "title": "MusicManipulations.separatepitches",
    "category": "function",
    "text": "separatepitches(notes::Notes [, allowed])\n\nGet a dictionary \"pitch\"=>\"notes of that pitch\". Optionally only keep pitches that are contained in allowed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.subdivision",
    "page": "Docstrings",
    "title": "MusicManipulations.subdivision",
    "category": "function",
    "text": "subdivision(n::Int, tpq)\n\nReturn how many ticks is the duration of the subdivision of a 4/4-bar into n equal parts, assuming the ticks per quarter note are tpq.\n\nFor example, for sixteenth notes you would do subdivision(16, tpq), for eigth-note triplets subdivision(12, tpq) and so on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.timeseries",
    "page": "Docstrings",
    "title": "MusicManipulations.timeseries",
    "category": "function",
    "text": "timeseries(notes::Notes, property, f [, grid]) -> tvec, ts\n\nProduce a timeseries of the property of the given notes, optionally first quantizing on the given grid.\n\nAfter quantization, it is often the case that many notes are in the same bin of the grid. The function f denotes which value of the vector of the property of the notes to keep. Typical values are minimum, maximum, mean, etc (for type stability the returned timeseries are always Float64).\n\nThe property can be :velocity, :pitch, or :duration. Grid bins without any notes are given the value 0. This can be problematic if you request for :pitch and your notes also include notes which actually have pitch 0, i.e. C0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MusicManipulations.translate",
    "page": "Docstrings",
    "title": "MusicManipulations.translate",
    "category": "function",
    "text": "translate(notes, ticks)\n\nTranslate the notes for the given amount of ticks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.transpose",
    "page": "Docstrings",
    "title": "Base.transpose",
    "category": "function",
    "text": "transpose(notes, semitones)\n\nTranspose the notes for the given amount of semitones.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MusicManipulations.AbstractNoteMusicManipulations.BPMMusicManipulations.DrumsMusicManipulations.JazzMusicManipulations.MIDIMusicManipulations.MIDIEventMusicManipulations.MIDIFileMusicManipulations.MIDITrackMusicManipulations.MetaEventMusicManipulations.MoreVelNoteMusicManipulations.MuseScoreMusicManipulations.MusicManipulationsMusicManipulations.NoteMusicManipulations.NotesMusicManipulations.SCALESMusicManipulations.SysexEventMusicManipulations.TrackEventMusicManipulations._add_note_to_dict!MusicManipulations.addevent!MusicManipulations.addevents!MusicManipulations.addnote!MusicManipulations.addnotes!MusicManipulations.addtrackname!MusicManipulations.allowedpitchesMusicManipulations.classifyMusicManipulations.closest_pointMusicManipulations.closest_realgridMusicManipulations.durationsMusicManipulations.evalMusicManipulations.findtexteventsMusicManipulations.firstnotesMusicManipulations.getfirstnotesMusicManipulations.getnotesMusicManipulations.getnotnotesMusicManipulations.getprogramchangeeventsMusicManipulations.includeMusicManipulations.isgridMusicManipulations.modpositionsMusicManipulations.ms_per_tickMusicManipulations.musescoreMusicManipulations.name_to_pitchMusicManipulations.note_to_fundamentalMusicManipulations.notes_limitsMusicManipulations.pitch_frequencyMusicManipulations.pitch_to_nameMusicManipulations.pitchesMusicManipulations.positionsMusicManipulations.quantizeMusicManipulations.quantize!MusicManipulations.quantize_duration!MusicManipulations.random_notes_sequenceMusicManipulations.randomnotesMusicManipulations.readMIDIFileMusicManipulations.readMIDIfileMusicManipulations.readvariablelengthMusicManipulations.replace_notesMusicManipulations.scale_identificationMusicManipulations.separatepitchesMusicManipulations.subdivisionMusicManipulations.testmidiMusicManipulations.texteventMusicManipulations.timeseriesMusicManipulations.timesortMusicManipulations.tracknameMusicManipulations.translateMusicManipulations.transposeMusicManipulations.type0totype1MusicManipulations.type0totype1!MusicManipulations.type1totype0MusicManipulations.type1totype0!MusicManipulations.velocitiesMusicManipulations.writeMIDIFileMusicManipulations.writeMIDIfileMusicManipulations.writevariablelength"
},

]}
