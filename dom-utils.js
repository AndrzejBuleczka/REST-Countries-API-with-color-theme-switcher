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

const createDetailElement = (country) => {
  const detailContainerElement = document.createElement('div');
  const flagImgElement = createFlagImgElement(country);
  const detailNameElement = document.createElement('strong');
  detailNameElement.innerText = country.name; 
  detailContainerElement.appendChild(flagImgElement);
  detailContainerElement.appendChild(detailNameElement);

  detailContainerElement.appendChild(createInfoElement('Native name', country.nativeName));
  detailContainerElement.appendChild(createInfoElement('Population', country.population));
  detailContainerElement.appendChild(createInfoElement('Region', country.region));
  detailContainerElement.appendChild(createInfoElement('Sub Region', country.subRegion));
  detailContainerElement.appendChild(createInfoElement('Top Level Domain', country.topLevelDomain));
  detailContainerElement.appendChild(createInfoElement('Currencies', country.currencies));
  detailContainerElement.appendChild(createInfoElement('Languages', country.languages));

  return detailContainerElement
}

const createDetailButtonElement = (link, text) => {
  const anchorBackElement = document.createElement('a');
  anchorBackElement.innerHTML =  text;
  anchorBackElement.classList.add('back-button');
  anchorBackElement.href = link;

  return anchorBackElement;
}

const createBorderCountriesContainer = (country) => {
  const borderCountriesContainerElement = document.createElement('div');

  const labelBorderElement = document.createElement('strong')
  labelBorderElement.innerText = 'Border Countries'
}

export const renderCountriesList = (countries) => {
  if (!country.borders || country.borders.length === 0) {
    return;
  }
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries))
  // console.log(countries);
  //render country list into main element
}

export const renderCountryDetails = (country) => {  
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = '';
  rootElement.appendChild(createDetailButtonElement('/', '<i class="fa-sharp fa-solid fa-arrow-left"></i> Back'))
  rootElement.appendChild(createDetailElement(country))
}