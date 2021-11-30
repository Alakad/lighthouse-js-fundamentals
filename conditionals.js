const whichSchool  = function (age) {
  if ( age < 13 ) {
    return "Elementary School";
  } else if ( age >= 13 && age <= 18 ) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log(whichSchool(10));
console.log(whichSchool(13));
console.log(whichSchool(18));
console.log(whichSchool(20));
