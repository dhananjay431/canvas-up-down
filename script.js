const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 400;
canvas.height = 800;

// Rectangle properties
let rectX = 150; // X position of the rectangle
let rectY = 0; // Initial Y position of the rectangle
const rectWidth = 100;
const rectHeight = 50;
const speed = 2; // Speed of the rectangle
let direction = 1; // Direction: 1 for down, -1 for up

// Animation function
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the rectangle
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, rectY, 400, rectHeight);

  // Update the rectangle's position
  rectY += speed * direction;

  // Reverse direction if it hits the top or bottom boundary
  if (rectY + rectHeight >= canvas.height || rectY <= 0) {
    direction *= -1;
  }

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
