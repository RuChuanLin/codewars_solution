// Given a year, return the century it is in.
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.
function century(year) {
  if (year / 100 == 0) {
    return result;
  } else {
    return (result = Math.ceil(year / 100));
  }
}
function century(year) {
  console.log(Math.ceil(year / 100));
  return Math.ceil(year/100)
}
// centuryFromYear(1705) returns 18
// centuryFromYear(1900) returns 19
century(1705);
century(1900);
