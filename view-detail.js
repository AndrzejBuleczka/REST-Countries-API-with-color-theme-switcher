import { renderCountryDetails } from "./dom-utils.js";

export const renderDetails = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get('country');
  console.log(countryCode);
  if (!countryCode) {
    goBacktoDashboard();
  } 

  const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  fetch(API_URL_DETAIL)
    .then(res => res.json())
    .then(([country]) => {
      if (!country) {
        goBacktoDashboard();
      }
      country = {
        capital: country.capital && country.capital[0],
        population: country.population.toLocaleString(),
        name: country.name.common,
        nativeName: Object.values(country.name.nativeName)[0].official,
        code: country.cioc,
        region: country.region,
        subRegion: country.subregion,
        flagUrl: country.flags.png,
        topLevelDomain: country.tld[0],
        currencies: Object.values(country.currencies)
          .map(currency => currency.name)
          .join(', '),
        languages: Object.values(country.languages).join(', '),
        borders: country.border,
      };

      renderCountryDetails(country)
    })

}

const goBacktoDashboard = () => {
  window.location.href = '/';
}