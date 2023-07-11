// <<<<< QUESTION-42 >>>>>>>
{
    var MagicArray = ["Kaboos", "Taboos", "Naboos", "Shaboos"];
    function show_magicians(PrintMagicians) {
        console.log(PrintMagicians);
    }
    show_magicians(MagicArray);
    function make_great(changename) {
        var i = 0;
        for (i = 0; i < changename.length; i++) {
            changename[i] = "The Great " + changename[i];
        }
    }
    make_great(MagicArray);
    show_magicians(MagicArray);
}
