// Creators for Dashboard view
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
  anchorElement.href = `?country=${country.code}`;

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

// Creators of Detail View

const createDetailElement = (country) => {
  const detailContainerElement = document.createElement('div');
  detailContainerElement.classList.add('detail-container');

  const flagImgElement = createFlagImgElement(country);
  flagImgElement.classList.add('flag-element');
  
  const detailContentElement = document.createElement('div')
  detailContentElement.classList.add('detail-content')
  
  const leftColumnElement = document.createElement('div');
  leftColumnElement.classList.add('left-column') 

  const rightColumnElement = document.createElement('div');
  rightColumnElement.classList.add('right-column')

  const detailNameElement = document.createElement('strong');
  detailNameElement.innerText = country.name; 
  detailNameElement.classList.add('detail-name')

  detailContainerElement.appendChild(flagImgElement);
  detailContentElement.appendChild(detailNameElement);

  leftColumnElement.appendChild(createInfoElement('Native name', country.nativeName));
  leftColumnElement.appendChild(createInfoElement('Population', country.population));
  leftColumnElement.appendChild(createInfoElement('Region', country.region));
  leftColumnElement.appendChild(createInfoElement('Sub Region', country.subRegion));
  rightColumnElement.appendChild(createInfoElement('Top Level Domain', country.topLevelDomain));
  rightColumnElement.appendChild(createInfoElement('Currencies', country.currencies));
  rightColumnElement.appendChild(createInfoElement('Languages', country.languages));

  detailContentElement.appendChild(leftColumnElement);
  detailContentElement.appendChild(rightColumnElement);

  if (country.borders && country.borders.length > 0) {
    detailContentElement.appendChild(createBorderCountriesContainer(country))
  }

  detailContainerElement.appendChild(detailContentElement);

  return detailContainerElement
}

const createDetailButtonElement = (link, text) => {
  const anchorBackElement = document.createElement('a');
  anchorBackElement.innerHTML =  text;
  anchorBackElement.classList.add('detail-button');
  anchorBackElement.href = link;

  return anchorBackElement;
}

const createBorderCountriesContainer = (country) => {
  const borderCountriesContainerElement = document.createElement('div');
  borderCountriesContainerElement.classList.add('border-countries-container')
  const labelBorderElement = document.createElement('strong');
  labelBorderElement.innerText = 'Border Countries: ';
  borderCountriesContainerElement.appendChild(labelBorderElement);

  country.borders.forEach((border) => {
    borderCountriesContainerElement.appendChild(
      createDetailButtonElement(`/?country=${border}`, border)
      );
  })
  return borderCountriesContainerElement;
}

//rendering of both views

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries))
}

export const renderCountryDetails = (country) => {  
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = '';
  rootElement.appendChild(createDetailButtonElement('/', '<i class="fa-solid fa-arrow-left-long"></i>  Back'));
  rootElement.appendChild(createDetailElement(country));
}