const createListElement = (countries) => {
  const listElement =  document.createElement('ul')
  return listElement;
}

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector('#main');
   rootElement.appendChild(createListElement(countries))
  // console.log(countries);
  //render country list into main element
}