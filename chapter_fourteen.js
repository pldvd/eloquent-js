'use strict'

// build a table

const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function styleNumberValues() {
  const allRows = document.getElementsByTagName('tr');

  for (let i = 0; i < allRows.length; i++) {
    if ( i === 0) continue;
    const numberValue = allRows[i].firstElementChild.nextElementSibling;
    numberValue.style.textAlign = 'right';
  }
}

function generateMountainTable(mountains) {
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
    const newRow = document.createElement('tr');
    
    for (let mountainData in mountain) {
      const newData = document.createElement('td');
      newData.innerText = mountain[mountainData];
      newRow.appendChild(newData);
    }
    table[0].appendChild(newRow);
  }
  styleNumberValues();
}

generateMountainTable(MOUNTAINS);


//own implemnetation of getElementsByTagName

function byTagName(node, tagName) {
  let solution = [];
  
  function find(node, tagName) {
    const nodeChildren = Array.from(node.children);
    const name = tagName.toUpperCase();
  
    nodeChildren.forEach((child) => {
      if (child.nodeName === name) {
       solution.push(child);
      }
      if (child.children) {
        return find(child, name);
      }
    })
  }
  find(node, tagName);
  return solution;
}

console.log(byTagName(document.body, 'tr').length);