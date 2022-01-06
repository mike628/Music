
class Note {
    constructor(measure, position, g_string, fret) {
        this._fret = fret;
        this._g_string = g_string;
        this._measure = measure;
        this._position = position;

    }

    set measure(measure) {
        this._measure = measure;
    }
    set position(position) {
        this._position = position;
    }
    set g_string(g_string) {
        this._g_string = g_string;
    }
    set fret(fret) {
        this._fret = fret;
    }
    get fret()
    {
        return this._fret;
    }
}
let note1 = new Note("1","3","G","12")
let note2 = new Note("2","3","G","12")
let note3 = new Note("3","3","G","12")
let notes = [];
notes.push(note1)
notes.push(note2)
notes.push(note3)
console.log(notes);