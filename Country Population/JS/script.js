

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", "true");

request.send();

request.onload = function () {
  
    const countriesData = JSON.parse(this.response);
  
    const totalPopulation = countriesData.reduce((accumulator, country) => accumulator + country.population, 0);
  
    console.log("Total population of all countries", totalPopulation);

};


