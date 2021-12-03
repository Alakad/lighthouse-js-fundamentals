const finalPosition = function (moves) {
  let paradePosition = [0,0];

  for (let m of moves) {
    m === 'north' ? paradePosition[1]++ 
    : m === 'south' ? paradePosition[1]--
    : m === 'east' ? paradePosition[0]++
    : m === 'west' ? paradePosition[0]--
    : console.log("something went wrong");
  }

  return paradePosition;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
