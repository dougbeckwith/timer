// APP
// Display a Timer
// Shows an animated border around the timer

// Event listener to watch for a click on start button
// Emit an event starting that the timer as started (Watch
// for this event. When it occurs, draw the border)
// Start counting down the timer
// Emit an event that the timer has ticked (Watch for this event. When
// it accous, update the border)
// Each time the timer counts down update the text
// If we counted down and timer reaches 0
// Emmit an event that the timer is done (Watch for this event.
// When it accurs reset the border)
// Reset internal timer to get ready for another run

// Class timer
// constructor(durationInput, startButton, pauseButton)
// Start()
// Pause()
// onDurationChange()
// tick()

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let duration
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    )
  },
  onComplete() {
    console.log('Timer is completed')
  },
})
