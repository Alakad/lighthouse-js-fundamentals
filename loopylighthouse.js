let count = 100;
let returnResult = false;
let resultString = "";

for ( let x = count; x <= 200; x++ ) {
  if ( count % 3 === 0 ) {
    resultString += "Loopy";
    returnResult = true;
  }

  if ( count % 4 === 0 ) {
    resultString += "Lighthouse";
    returnResult = true;
  }

  if ( returnResult === true ) {
    console.log(resultString);
    resultString = "";
    returnResult = false;
  } else {
    console.log(count);
  }
  
  count++;
}