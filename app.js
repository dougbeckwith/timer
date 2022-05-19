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

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }
  start = () => {
    this.tick()
    // SetInterval gives us back the timer id.
    // We use this timer id to pause the timer with clearInterval
    this.interval = setInterval(this.tick, 1000)
  }
  tick = () => {
    console.log('tick')
  }
  pause = () => {
    clearInterval(this.interval)
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)
