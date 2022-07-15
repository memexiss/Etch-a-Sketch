const container = document.getElementById("container");
const small = document.getElementById("small");
const medium = document.getElementById("medium");
const big = document.getElementById("big");
const clear = document.getElementById("clear");

function makeRows(gridNum) {
  let gridRowCol = ((600 / gridNum) - 2).toFixed(2); 
  let gridSize = Math.pow(gridNum, 2); 

  while (gridSize > 0) {
      let newGrid = document.createElement('div'); 	
      container.appendChild(newGrid); 
      newGrid.classList.add('grid'); 
      newGrid.style.height = gridRowCol + 'px';  
      newGrid.style.width = gridRowCol + 'px'; 
      newGrid.style.border = '1px solid #ddd';             
      gridSize--; 
  }

  let gridCells = document.querySelectorAll('.grid'); 
  gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor)); 
};

function changeColor() {
  this.style.backgroundColor = '#707070';  
} 

small.addEventListener('click', () => {    
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
  }
  makeRows(16)
clear.addEventListener('click', () => {
  while (container.hasChildNodes()) {
  container.removeChild(container.lastChild)
  }
  makeRows(16)
});
});

medium.addEventListener('click', () => {    
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
  }
  makeRows(32)
clear.addEventListener('click', () => {
  while (container.hasChildNodes()) {
  container.removeChild(container.lastChild)
  }
  makeRows(32)
});
});

big.addEventListener('click', () => {    
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
  }
  makeRows(64)
clear.addEventListener('click', () => {
  while (container.hasChildNodes()) {
  container.removeChild(container.lastChild)
  }
  makeRows(64)
});
});

clear.addEventListener('click', () => {
  while (container.hasChildNodes()) {
  container.removeChild(container.lastChild)
  }
  makeRows(16)
});

window.onload = makeRows(16);