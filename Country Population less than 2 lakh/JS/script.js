
const request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all','true');

request.send();

request.onload = function () {

    const countriesData = JSON.parse(this.response);

    const population = countriesData.filter((element) => {

        return element.population < 200000

    })

    console.log("Countries with population less than 2 Lakh", population);

}