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

    let theme = localStorage.getItem('theme') || 'light';

    const modeSwitchingButton = document.querySelector('.mode');

    modeSwitchingButton.addEventListener('click', () => {
      // document.querySelector('body').classList.toggle('dark');
      // document.querySelector('header').classList.toggle('dark');
      // document.querySelector('#query').classList.toggle('dark');
      // document.querySelector('#region').classList.toggle('dark');
      // document.querySelectorAll('li').forEach(li => li.classList.toggle('dark'));
      // document.querySelectorAll('li a').forEach(a => a.classList.toggle('dark'));
      // modeSwitchingButton.classList.toggle('dark');
      // document.querySelector('i').classList.toggle('fa-solid');
      if (theme === 'dark') {
        document.querySelector('body').classList.remove('dark');
        document.querySelector('header').classList.remove('dark');
        document.querySelector('#query').classList.remove('dark');
        document.querySelector('#region').classList.remove('dark');
        document.querySelectorAll('li').forEach(li => li.classList.remove('dark'));
        document.querySelectorAll('li a').forEach(a => a.classList.remove('dark'));
        modeSwitchingButton.classList.remove('dark');
        document.querySelector('i').classList.remove('fa-solid');
        theme = 'light';
      } else {
        document.querySelector('body').classList.add('dark');
        document.querySelector('header').classList.add('dark');
        document.querySelector('#query').classList.add('dark');
        document.querySelector('#region').classList.add('dark');
        document.querySelectorAll('li').forEach(li => li.classList.add('dark'));
        document.querySelectorAll('li a').forEach(a => a.classList.add('dark'));
        modeSwitchingButton.classList.add('dark');
        document.querySelector('i').classList.add('fa-solid');
        theme = 'dark';
      }
      localStorage.setItem('theme', theme);
    })
    console.log(theme);

    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('header').classList.add('dark');
      document.querySelector('#query').classList.add('dark');
      document.querySelector('#region').classList.add('dark');
      document.querySelectorAll('li').forEach(li => li.classList.add('dark'));
      document.querySelectorAll('li a').forEach(a => a.classList.add('dark'));
      modeSwitchingButton.classList.add('dark');
      document.querySelector('i').classList.add('fa-solid');
    }


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