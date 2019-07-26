'use strict'

class Matrix {
  constructor(width, height, content) {
    this.width = width;
    this.height = height;
    if (content) {
      this.content = content;
    } else {
      this.content = (() => {
        let matrix = [];
        for (let i = 0; i < this.width; i++) {
          let row = [];
          for (let y = 0; y < this.height; y++) {
            let cell = {
              position: [i, y],
              isAlive: Math.random() > 0.5
            }
            row.push(cell);
          }
          matrix.push(row);
        }
        return matrix;
      })();
    }
  }

  drawGeneration(matrix) {
    const gridNode = document.getElementById('grid');

    for (let i = 0; i < matrix.width; i++) {
      const newRow = document.createElement('div');
      for (let y = 0; y < matrix.height; y++) {
        const checkboxNode = document.createElement('input');
        checkboxNode.type = 'checkbox';
        checkboxNode.checked = matrix.content[i][y].isAlive;
        checkboxNode.setAttribute('data-location', matrix.content[i][y].position)
        newRow.appendChild(checkboxNode);
      }
      gridNode.appendChild(newRow);
    }

    gridNode.addEventListener('click', (e) => {
      if (e.target.nodeName === 'INPUT') {
        let location = e.target.getAttribute('data-location').split(',');
        let cellToChange = matrix.content[location[0]][location[1]];
        console.log(cellToChange);
        cellToChange.isAlive = !cellToChange.isAlive;
        console.log(cellToChange);
      }
    })
  }
  
  setContent(gridLocation, isAlive) {
    for (let row of this.content) {
      for (let cell of row) {
        if (cell.position === gridLocation) {
          cell.isAlive = isAlive;
        }
      }
    }
  }

  //   checkNeighbours() {
  //     this.content.map((row, rowIndex) => {

  //       row.map((cell, cellIndex) => {
  //         let aliveNeighbours = 0;
  //         let deadNeighbours = 0;
  //         let newRow = [];

  //         const neighbourCells = [
  //           [rowIndex - 1, cellIndex - 1],
  //           [rowIndex - 1, cellIndex],
  //           [rowIndex - 1, cellIndex + 1],
  //           [rowIndex, cellIndex - 1],
  //           [rowIndex, cellIndex + 1],
  //           [rowIndex + 1, cellIndex - 1],
  //           [rowIndex + 1, cellIndex],
  //           [rowIndex + 1, cellIndex + 1]
  //         ];

  //         let filteredForMissing = neighbourCells.map(neighbour => {
  //           if (neighbour[0] >= 0 && neighbour[1] >= 0 && neighbour[0] < this.content.length && neighbour[1] < row.length) {
  //             return this.content[neighbour[0]][neighbour[1]];
  //           } else {
  //             return null;
  //           }
  //         })

  //         filteredForMissing.forEach(elem => {
  //           if (elem) {
  //             aliveNeighbours += 1;
  //           } else deadNeighbours += 1;
  //         });

  //         // if (aliveNeighbours < 2 || aliveNeighbours > 3) {
  //         //   newRow[cellIndex] = false;
  //         //   // console.log('a');
  //         // } else if (cell === true && 2 <= aliveNeighbours <= 3) {
  //         //   // console.log('b');
  //         //   newRow[cellIndex] = cell;
  //         // } else if (cell === false && aliveNeighbours === 3) {
  //         //   // console.log('c');
  //         //   newRow[rowIndex] = true;
  //         // } else {
  //         //   newRow[rowIndex] = cell;
  //         // }

  //         console.log(filteredForMissing, deadNeighbours, aliveNeighbours);
  //         console.log(cell);
  //         // console.log(newRow);
  //         // newMatrix.push(newRow);


  //       })
  //     })
  //   }
}

  //   function drawGeneration(matrix) {
  // const gridNode = document.getElementById('grid');

  // for (let i = 0; i < matrix.width; i++) {
  //   const newRow = document.createElement('div');
  //   for (let y = 0; y < matrix.height; y++) {
  //     const checkboxNode = document.createElement('input');
  //     checkboxNode.type = 'checkbox';
  //     checkboxNode.checked = matrix.content[i][y].isAlive;
  //     checkboxNode.setAttribute('data-location', matrix.content[i][y].position)
  //     newRow.appendChild(checkboxNode);
  //   }
  //   gridNode.appendChild(newRow);
  // }

  // gridNode.addEventListener('click', (e) => {
  //   if (e.target.nodeName === 'INPUT') {
  //     let location = e.target.getAttribute('data-location').split(',');
  //     let cellToChange = matrix.content[location[0]][location[1]];
  //     console.log(cellToChange);
  //     cellToChange.isAlive = !cellToChange.isAlive;
  //     console.log(cellToChange);
  //   }
  // })

  //console.log(matrix.content);



let myMatrix = new Matrix(5, 5);
myMatrix.drawGeneration(myMatrix);
