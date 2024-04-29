const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v2/all");

req.send();

req.onload = function () {

    const res = JSON.parse(req.response);

    const currency = res.filter((element) => {

        for (let key in element.currencies) {

            if (element.currencies[key].code === "USD") {

                return element;
      }
    }
  });

  console.log("Countries that uses USD currencies", currency);

};