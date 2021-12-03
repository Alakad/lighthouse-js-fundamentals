function ageCalculator(name, birthYear, currentYear) {
  let age = currentYear - birthYear;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Suzie",1983,2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));