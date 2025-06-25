const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing squares
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.opacity = 0;

    // Hover effect with random color and darkening
    square.addEventListener('mouseenter', () => {
      let opacity = parseFloat(square.dataset.opacity);
      if (opacity < 1) opacity += 0.1;
      square.dataset.opacity = opacity;

      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener('click', () => {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"));
  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Initial grid
createGrid(16);
