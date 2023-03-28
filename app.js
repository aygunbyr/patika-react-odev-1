import getData from "./getData.js";

// IIFE that gets user data and prints to console
(async function () {
  // get data from module
  const data = await getData(1);

  // print data to console
  console.log(data);
})();
