// <<<<< QUESTION-43 >>>>>>>
{

let MagicArray: string[] = ["Kaboos","Taboos","Naboos","Shaboos"]
let MagicArray_Copy: string[] = MagicArray


    function show_magicians(PrintMagicians: string[])
   {
            console.log(PrintMagicians)
            
    }


    show_magicians(MagicArray)
    
    function make_great( changename: string[])
    {
        let i = 0
        for(i=0; i< changename.length; i++)
        {
            changename[i] = "The Great " + changename[i]
        
        }      

    } 

    console.log("Original Array")
    show_magicians(MagicArray)
    show_magicians(MagicArray_Copy)
    
    make_great(MagicArray_Copy)
    console.log("Array after adding [The Great]")

    
}