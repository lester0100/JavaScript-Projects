"use strict";

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = "...";
  for (let i = 1; i <= arr.length; i++) {
    forecast += arr[i - 1] + "`C in " + i + " days ... ";
  }
  return forecast;
};

console.log(printForecast(temps1));
console.log(printForecast(temps2));
