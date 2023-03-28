import getData from "./getData.js";

(async function () {
  const data = await getData(1);
  console.log(data);
})();
