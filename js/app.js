'use strict'

function setSearchParams(link, inputName) {
  let searchFormElement = document.getElementById('search_form');
  let searchInputElement = document.getElementById('search_input');
  searchFormElement.action = link;
  searchInputElement.name = inputName;
}
