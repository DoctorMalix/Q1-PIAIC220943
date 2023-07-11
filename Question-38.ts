// <<<<< QUESTION-38 >>>>>>>

{ // this block is placed due to variables in this program warns that
    // these variables are already declared in previous programs
  
function describe_city(city: string, country:string = "Pakistan") 
{
    console.log(city, "is in", country)

} 

describe_city("Lahore")
describe_city("Karachi")
describe_city("Sydney","Australia")
describe_city("Berlin","Germany")

}