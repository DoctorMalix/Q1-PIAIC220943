// <<<<< QUESTION-43 >>>>>>>
{
    var MagicArray = ["Kaboos", "Taboos", "Naboos", "Shaboos"];
    var MagicArray_Copy = MagicArray;
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
    console.log("Original Array");
    show_magicians(MagicArray);
    make_great(MagicArray_Copy);
    console.log("Array after adding [The Great]");
    show_magicians(MagicArray_Copy);
}
