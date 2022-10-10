const createInfoElement = (labelName, value) => {
  const infoElement = document.createElement('div');

  const labelElement = document.createElement('strong');
  labelElement.innerText = `${labelName}: `;

  const valueElement = document.createElement('span');
  valueElement.innerText = value;

  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);

  return infoElement;
}

const createFlagImgElement = (country) => {
  const imgContainer = document.createElement('div')
  const imgElement = document.createElement('img');
  imgElement.src = country.flagUrl;
  imgElement.alt = `${country.name} flag`
  imgContainer.appendChild(imgElement);

  return imgContainer
}

const createCountryItemElement = (country) => {
  const countryElement = document.createElement('li');
  const countryNameElement = document.createElement('strong');
  const anchorElement = document.createElement('a');
  anchorElement.href = `country=${country.name}`

  countryNameElement.innerText = country.name;
  countryNameElement.classList.add('country-name')

  countryElement.appendChild(createFlagImgElement(country));

  const infoContainerElement = document.createElement('div');
  infoContainerElement.classList.add('info-container')

  infoContainerElement.appendChild(countryNameElement);
  infoContainerElement.appendChild(
  createInfoElement('Population', country.population)
  );
  infoContainerElement.appendChild(
    createInfoElement('Region', country.region)
  );
  infoContainerElement.appendChild(
    createInfoElement('Capital', country.capital)
  );

  anchorElement.appendChild(infoContainerElement);
  countryElement.appendChild(anchorElement);

  return countryElement;
}

const createListElement = (countries) => {
  const listElement =  document.createElement('ul')
  countries.forEach(country => {
    listElement.appendChild(createCountryItemElement(country))
  })
  return listElement;
}

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = ""
  rootElement.appendChild(createListElement(countries))
  // console.log(countries);
  //render country list into main element
}