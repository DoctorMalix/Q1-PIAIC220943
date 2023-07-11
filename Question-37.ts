// <<<<< QUESTION-37 >>>>>>>

{ // this block is placed due to variables in this program warns that
    // these variables are already declared in previous programs
  
    function make_shirt(size: string ="Large", msg: string = "I love TypeScript" )
    {
      console.log("The size of the Shirt-> ",size)
      console.log("The message is------>",msg)
    }
  
    make_shirt("Medium","Pakistan is a Greate country...")
    make_shirt()
    make_shirt("Small", "I Love Small Shirts")
    make_shirt("Extra Large", "I Love Extra Large Shirts")

}