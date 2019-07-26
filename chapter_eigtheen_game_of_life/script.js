'use strict'

let myMatrix;
let running = null;

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

    for (let i = 0; i < matrix.height; i++) {
      const newRow = document.createElement('div');
      for (let y = 0; y < matrix.width; y++) {
        const checkboxNode = document.createElement('input');
        checkboxNode.type = 'checkbox';
        checkboxNode.checked = matrix.content[y][i].isAlive;
        checkboxNode.setAttribute('data-location', matrix.content[y][i].position)
        newRow.appendChild(checkboxNode);
      }
      gridNode.appendChild(newRow);
    }

    gridNode.addEventListener('click', (e) => {
      if (e.target.nodeName === 'INPUT') {
        let location = e.target.getAttribute('data-location').split(',');
        let cellToChange = matrix.content[location[0]][location[1]];
        cellToChange.isAlive = !cellToChange.isAlive;
      }
    })
  }

  createNewGeneration(matrix) {
    let newContent = [];

    matrix.content.forEach((row, rowIndex) => {
      let newRow = [];

      row.forEach((cell, cellIndex) => {
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

        if (cell.isAlive && (aliveNeighbours < 2 || aliveNeighbours > 3)) {
          cell.isAlive = false;
        }
        if (cell.isAlive && 2 <= aliveNeighbours <= 3) {
          cell.isAlive = true;
        }
        if (!cell.isAlive && aliveNeighbours === 3) {
          cell.isAlive = true;
        }

        newRow.push(cell);
      })

      newContent.push(newRow);
    })
    return new Matrix(matrix.width, matrix.height, newContent);
  }
}

window.onload = () => {
  let matrix = new Matrix(30, 15);
  matrix.drawGeneration(matrix);
  myMatrix = matrix;
}

document.querySelector('button#next').addEventListener('click', () => {
  myMatrix.drawGeneration(myMatrix.createNewGeneration(myMatrix));
})

document.querySelector('button#autorun').addEventListener('click', () => {
  if (!running) {
    running = setInterval(() => {
      myMatrix.drawGeneration(myMatrix.createNewGeneration(myMatrix))
    }, 400);
  } else {
    clearInterval(running, 400);
  }
})
