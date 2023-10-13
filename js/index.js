// Create a button dynamically with JavaScript...
const button = document.createElement("button")
button.innerText = "BUTTON"
// ... and add it to the page
document.body.appendChild(button)


// Get a pointer to the button created in the HTML file...
const colorChange = document.getElementById("color-changer")

// ... and provided it with a way to set the...
// :root { --custom-color: #rrggbb }
// ... custom CSS property
colorChange.addEventListener("click", changeColor, false)

function changeColor() {
  const hexBits = "ABCDEF01234567890"
  let color = "#"

  for ( let ii = 0; ii < 6; ii += 1 ) {
    const random = Math.floor(Math.random() * 16)
    const bit = hexBits[random]
    color += bit
  }

  // Inefficient: rootElement could be declared and
  // assigned outside the changeColor function so that
  // it is only create once.
  const rootElement = document.documentElement;

  // Update the var(--custom-color), so that it will be
  // applied automatically _by CSS_ to all buttons.
  rootElement.style.setProperty("--custom-color", color);
}