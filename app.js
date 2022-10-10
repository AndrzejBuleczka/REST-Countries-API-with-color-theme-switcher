import { renderDashboard } from "./view-dashboard.js";
import { renderDetails } from "./view-detail.js";

if (window.location.search.includes("?country=")) {
  renderDetails();
} else {
  document.querySelector('.filters').classList.add('active')
  renderDashboard();
  }