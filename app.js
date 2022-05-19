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
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    if (callbacks) {
      this.onStart = callbacks.onStart
      this.onComplete = callbacks.onComplete
      this.onTick = callbacks.onTick
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }
  start = () => {
    if (this.onStart) {
      this.onStart()
    }
    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
    } else {
      if (this.onTick) {
        this.onTick()
      }
      this.timeRemaining = this.timeRemaining - 1
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started')
  },
  onTick() {
    console.log('Timer just ticked')
  },
  onComplete() {
    console.log('Timer is completed')
  },
})
