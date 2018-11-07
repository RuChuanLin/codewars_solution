/* 8 kyu
  Transportation on vacation solution
  link: https://www.codewars.com/kata/transportation-on-vacation/train/javascript

  Every day you rent the car costs $40. 
  If you rent the car for 7 or more days, you get $50 off your total. 
  Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
  Write a code that gives out the total amount for different days(d).
*/

function rentalCarCost(day) {
    const cost = 40;
    if (day >= 7) return cost * day - 50;
    if (day >= 3) return cost * day - 20;
    return day * cost;
}
const rentalCarCost = d => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);
