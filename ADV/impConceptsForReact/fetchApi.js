// Fetch is only work on browser not in node environment

// Weather api from "weatherapi.com" free
const url =
  "http://api.weatherapi.com/v1/current.json?key=2df43019bd5b4127bfe123441220306&q=Kolkata&aqi=no";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let temp = data.current.temp_c + " degree C";
    console.log(temp);
  });
