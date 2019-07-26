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
              position: [y, i],
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
    gridNode.innerHTML = '';

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
        console.log(matrix.content[location[0]][location[1]])
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

  createNewGeneration(matrix) {
    let newContent = [];

    matrix.content.map((row, rowIndex) => {
      let newRow = [];

      row.map((cell, cellIndex) => {
        let aliveNeighbours = 0;

        const neighbourCells = [
          [rowIndex - 1, cellIndex - 1],
          [rowIndex - 1, cellIndex],
          [rowIndex - 1, cellIndex + 1],
          [rowIndex, cellIndex - 1],
          [rowIndex, cellIndex + 1],
          [rowIndex + 1, cellIndex - 1],
          [rowIndex + 1, cellIndex],
          [rowIndex + 1, cellIndex + 1]
        ];

        let filteredForMissing = neighbourCells.map(neighbour => {
          if (neighbour[0] >= 0 && neighbour[1] >= 0 && neighbour[0] < this.content.length && neighbour[1] < row.length) {
            return this.content[neighbour[0]][neighbour[1]];
          } else {
            return null;
          }
        })

        cell.neighbours = filteredForMissing.filter(neighbour => neighbour != null);

        cell.neighbours.forEach(neighbour => {
          if (neighbour.isAlive) {
            aliveNeighbours++;
          }
        })

        // console.log(cell);

        if (cell.isAlive && (aliveNeighbours < 2 || aliveNeighbours > 3)) {
          cell.isAlive = false;
        } else if (cell.isAlive && 2 <= aliveNeighbours <= 3) {
          cell.isAlive = true;
        } else if (!cell.isAlive && aliveNeighbours === 3) {
          cell.isAlive = true;
        } else {
          cell.isAlive = cell.isAlive;
        }

        newRow.push(cell);
      })

      newContent.push(newRow);
    })
    // console.log(newContent);
    // console.log('new matrix created');
    return new Matrix(matrix.width, matrix.height, newContent);
    // console.log(newContent);
  }
}

let myMatrix = new Matrix(10, 10);

document.querySelector('button').addEventListener('click', () => {
  myMatrix.drawGeneration(myMatrix.createNewGeneration(myMatrix));
})
// myMatrix.createNewGeneration(myMatrix);
