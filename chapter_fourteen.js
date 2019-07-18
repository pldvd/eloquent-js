'use strict'

const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function generateMoountains(mountains) {
  const domParent = document.getElementById('mountains');
  const tableElement = document.createElement('table');
  const headerRow = document.createElement('tr');
  const nameHeader = headerRow.appendChild(document.createElement('th'));
  nameHeader.innerText = 'name';
  const heightHeader = headerRow.appendChild(document.createElement('th'));
  heightHeader.innerText = 'height';
  const placeHeader = headerRow.appendChild(document.createElement('th'));
  placeHeader.innerText = 'place';
  domParent.appendChild(tableElement);
  domParent.firstElementChild.appendChild(headerRow);
  
  for (let mountain of mountains) {
    const table = document.getElementsByTagName('table');
    const newRow = document
  }
}

generateMoountains();