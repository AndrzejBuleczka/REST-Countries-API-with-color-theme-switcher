import { renderCountriesList } from "./dom-utils.js";

export const renderDashboard = () => {
  const API_URL_ALL = "https://restcountries.com/v3.1/all";
  let countries;
  let query = "";
  let region = "";

  fetch(API_URL_ALL)
    .then((res) => res.json())
    .then((countriesRaw) => {
      countries = countriesRaw.map((country) => {
        return {
          capital: country.capital && country.capital[0],
          population: country.population.toLocaleString(),
          name: country.name.common,
          code: country.cioc,
          region: country.region,
          flagUrl: country.flags.png
        };
      });
      renderCountriesList(countries)
    });


    const modeSwitchingButton = document.querySelector('.mode');

    modeSwitchingButton.addEventListener('click', () => {
      document.querySelector('body').classList.toggle('dark');
      document.querySelector('header').classList.toggle('dark');
      document.querySelector('#query').classList.toggle('dark');
      document.querySelector('#region').classList.toggle('dark');
      document.querySelectorAll('li').forEach(li => li.classList.toggle('dark'));
      document.querySelectorAll('li a').forEach(a => a.classList.toggle('dark'));
      modeSwitchingButton.classList.toggle('dark');
      document.querySelector('i').classList.toggle('fa-solid');
      // modeSwitchingButton.innerHTML = '<i class="fa-solid fa-moon"></i>Dark Mode'
    })

    const filterDataAndRenderCountriesList = () => {
      const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(query) && (!region || country.region === region)
      })
    
      renderCountriesList(filteredCountries)
    }

    document.querySelector('#query').addEventListener('input', (e) => {
      //render countries based on query
      query = e.target.value.toLowerCase().trim();
      filterDataAndRenderCountriesList();

    })

    document.querySelector('#region').addEventListener('change', (e) => {
      region = e.target.value;
      filterDataAndRenderCountriesList();
    })
}