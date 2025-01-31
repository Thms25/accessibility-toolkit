console.log('script.js is loaded!')

const toggleButton = document.getElementById('toggle')
let isActive = false // Track magnifier state

// Create the magnifier lens
const lens = document.createElement('div')
lens.style.position = 'absolute'
lens.style.pointerEvents = 'none'
lens.style.border = '2px solid black'
lens.style.borderRadius = '50%'
lens.style.width = '150px'
lens.style.height = '150px'
lens.style.overflow = 'hidden'
lens.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
lens.style.transform = 'translate(-50%, -50%)'
lens.style.zIndex = '9999'
lens.style.display = 'none' // Initially hidden
document.body.appendChild(lens)

// Inner magnified area
const zoomContent = document.createElement('div')
zoomContent.style.transform = 'scale(2)'
zoomContent.style.transformOrigin = 'top left'
zoomContent.style.width = '200%'
zoomContent.style.height = '200%'
zoomContent.style.position = 'absolute'
zoomContent.style.top = '0'
zoomContent.style.left = '0'
lens.appendChild(zoomContent)

// Track cursor movement
document.addEventListener('mousemove', event => {
  if (!isActive) return // Only move if active

  const { pageX, pageY } = event

  // Position the lens
  lens.style.left = `${pageX}px`
  lens.style.top = `${pageY}px`

  // Position the zoomed content
  zoomContent.style.left = `-${pageX}px`
  zoomContent.style.top = `-${pageY}px`
})

// Toggle button functionality
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    isActive = !isActive // Toggle state
    lens.style.display = isActive ? 'block' : 'none' // Show/hide magnifier
    toggleButton.textContent = isActive
      ? 'Disable Magnifier'
      : 'Enable Magnifier'
    console.log(`Magnifier ${isActive ? 'activated' : 'deactivated'}`)
  })
} else {
  console.error('Toggle button not found!')
}
