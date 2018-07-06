var number = function(busStops){
//create a place to hold total number of people
let totalPeople = 0;

//loop to iterate through the array
for (let i= 0; i < busStops.length; i++){
//1st number is ppl getting on
// 2nd number is ppl getting off
  let currentStop = busStops[i];
  let gettingOn = currentStop[0]; //first number in array for people getting on
  let gettingOff = currentStop[1] //2nd number for ppl getting off
  //   store how many ppl got on and how many ppl got off

  totalPeople += gettingOn;
  totalPeople -= gettingOff;
  }
  // return final result
  return totalPeople;
}
