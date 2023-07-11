// <<<<< QUESTION-44 >>>>>>>
{
    function make_sandwich() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        /*let i =0
        for(i=0; i< items.length; i++)
          console.log("Making Sandwich with these items\n")*/
        console.log(items);
    }
    make_sandwich("Unda", "Kabab");
    make_sandwich("Unda", "Kabab", "Band gobhi");
    make_sandwich("Unda", "Kabab", "Band gobhi", "Ketchup");
    make_sandwich("Unda", "Kabab", "Band gobhi", "Ketchup", "Mayonease");
}
