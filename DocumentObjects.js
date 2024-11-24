// Function to update window size display
function updateWindowSize() {
    const sizeDisplay = document.getElementById('size');
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeDisplay.textContent = `Window Size: ${width}px x ${height}px`;
}

// Call the updateWindowSize function when the window resizes
window.addEventListener('resize', updateWindowSize);

// Initial call to display window size on page load
updateWindowSize();

// Function to change background color
function changeBackgroundColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffcc99', '#cc99ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add event listener to the button for background color change
document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);

// Alert on button click
document.getElementById('colorBtn').addEventListener('click', function() {
    window.alert('Background color changed!');
});
