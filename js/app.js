const dropdown = document.querySelector(".dropdown");

var selectedIndex = 0;

var defaultOption = document.createElement("option");
defaultOption.text = "Choose Country";

dropdown.add(defaultOption);

const url = "https://covid19.mathdro.id/api/countries/";

fetch(url).then((response) => {
  response.json().then((data) => {
    var option;
    for (var i = 0; i < data.countries.length; i++) {
      option = document.createElement("option");
      option.text = data.countries[i].name;
      option.value = data.countries[i].name;
      dropdown.add(option);
    }
  });
});

function getData() {
  const url2 =
    "https://covid19.mathdro.id/api/countries/" +
    dropdown.options[dropdown.selectedIndex].value;
  fetch(url2).then((response) => {
    response.json().then((data) => {
      var confirmed = data.confirmed.value;
      var recovered = data.recovered.value;
      var deaths = data.deaths.value;
      var conf = document.querySelector(".confirmed");
      var rec = document.querySelector(".recovered");
      var dea = document.querySelector(".deaths");
      conf.innerHTML = confirmed;
      rec.innerHTML = recovered;
      dea.innerHTML = deaths;
    });
  });
}
