

const request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all','true');

request.send();

request.onload = function () {

    const countriesData = JSON.parse(this.response);

    countriesData.forEach((element) => {
        
        console.log("Name : ", element.name.common);
        console.log("Capital : ", element.capital);
        console.log("Flag : ", element.flags.svg);

    })

}