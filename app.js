console.log('hello')
// APP
// Display a Timer
// Shows an animated border around the timer

// Pseudo Code
// Event Listener to watch for a click on the start button
// Draw a full border around the timer
// Start counting down the timer
// Each time the timer counts down, update the border
// Each time the timer counts down, update the text
// If we counted down and timer reaches 0 Reset the border
// Reset internal timer to get ready for another run

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
