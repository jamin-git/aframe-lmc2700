// This file creates the different camera positions
var camera = document.querySelector("#cam");
document.addEventListener('keyup', event => {
  if (event.code === 'Digit1') {
      camera.setAttribute("position", "0 0 0")
    }
  if (event.code === 'Digit2') {
      camera.setAttribute("position", "0 1 -1")
    }
  if (event.code === 'Digit3') {
      camera.setAttribute("position", "0 2.5 -2")
    }
  if (event.code === 'Digit4') {
      camera.setAttribute("position", "0 3.5 -3")
    }
  if (event.code === 'Digit5') {
      camera.setAttribute("position", "0 5 -4")
    }
  if (event.code === 'Digit6') {
      camera.setAttribute("position", "0 6.5 -5")
    }
  if (event.code === 'Escape') {
      camera.setAttribute("position", "0 4 10")
      camera.setAttribute("rotation", "0 0 0")
    }
})