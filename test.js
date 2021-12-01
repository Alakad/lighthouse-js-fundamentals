const averageWindSpeed = (weatherEntries) => {
  let count = 0;
  let totalWindSpeed = 0;

  for (let x of weatherEntries) {
    if (x.windSpeed !== null || x.windSpeed === NaN) {
      totalWindSpeed += x.windSpeed;
      count++;
    }
  }
  
  return totalWindSpeed = Math.round(totalWindSpeed / count);;
}

const exampleEntries = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:44.74 
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:14.74 
  }
]  

console.log(averageWindSpeed(exampleEntries));

const exampleEntries2 = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:44 
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:14
  }
] 

console.log(averageWindSpeed(exampleEntries2));
