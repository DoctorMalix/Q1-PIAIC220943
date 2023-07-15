/*
Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs,
 such as a color or an optional feature. Print the Object that’s returned 
 to make sure all the information was stored correctly.
*/

function createCar(manufacturer: string, model: string, ...Multiargs: any[]): any {
    const car: any = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Process additional keyword arguments
    for (let i = 0; i < Multiargs.length; i += 2) {
      const key = Multiargs[i];
      const value = Multiargs[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  
  const carInfo = createCar("SUZUKI", "Baleno", "COLOR", "Green", "YEAR", 2020,"Registration",2021);
  console.log(carInfo);
  