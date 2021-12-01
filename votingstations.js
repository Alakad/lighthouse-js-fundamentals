function chooseStations(stations) {
  let goodStations = [];

  for ( const item in stations ) {
    if ( stations[item][1] >= 20 ) {
      if ( stations[item][2] === 'school' || stations[item][2] === 'community centre' ) {
        goodStations.push(stations[item][0]);
      }
    }
  }

  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));