// <<<<< QUESTION-42 >>>>>>>
{

let MagicArray: string[] = ["Kaboos","Taboos","Naboos","Shaboos"]

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

    make_great(MagicArray)
    show_magicians(MagicArray)


    
}