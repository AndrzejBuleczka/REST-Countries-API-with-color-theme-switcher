import { renderCountriesList } from "./dom-utils.js";
import { renderDashboard } from "./view-dashboard.js";

if (window.location.search.includes("?country=")) {
  console.log('render detail');
} else {
  renderDashboard();

  }