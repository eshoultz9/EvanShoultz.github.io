/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){

  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  var KEY = {
    "ENTER": 13,
    "DOWN": 40,
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
  };

  var walker = {
    "positionx": 0,
    "positiony": 0,
    "speedx": 0,
    "speedy": 0,
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp)

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    
    }
    else if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedx = -10;
    }
    else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedx = 10;
    }
    else if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedy = 10;
    }
    else if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedy = -10;
    }
  }

  function handleKeyUp(){
    walker.speedx = 0
    walker.speedy = 0
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
  walker.positionx += walker.speedx;
  walker.positiony += walker.speedy;
}

function redrawGameItem(){
  $("#walker").css("left", walker.positionx);
  $("#walker").css("top", walker.positiony);
}



}
