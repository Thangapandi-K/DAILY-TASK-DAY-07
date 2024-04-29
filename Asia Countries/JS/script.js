

const request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all','true');

request.send();

request.onload=function () {

    const countriesData = JSON.parse(this.response);

    const asia = countriesData.filter((a) => {

        if (a.region === 'Asia') {

            return a.name;

        }

    })

    console.log("Countries in Asian Region", asia);

}
