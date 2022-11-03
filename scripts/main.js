// Function declarations

// Convert a time value from miliseconds to Hours: Minutes
function convertToHHMM(ms) {
  // input: time in ms
  // output: key value pair of hours: minutes
  
  const hours = Math.floor(ms / (3600000));
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor(ms % 60000 / 1000);
  
  return {hours: hours,
          minutes: minutes,
          seconds: seconds};
}

// 
function updateTime() {
  const currentTime = Date.now()
  // Update text content of display div to current time - start time
  const timeDifferenceMS = currentTime - startTime;
  const timeDifferenceHHMM = convertToHHMM(timeDifferenceMS);

  console.log(timeDifferenceHHMM);

  // Set text content of display div's time to 00:00
  const timeField = document.querySelector('.time');
  timeField.innerText = `${timeDifferenceHHMM.hours}:${timeDifferenceHHMM.minutes}:${timeDifferenceHHMM.seconds}`

  // Recursive-ish call to continue updating time display every minute
  timeoutTag = setTimeout(updateTime, 1000);
}

// Global variables:
let currentDomain;
let startTime = Date.now();
let click = false
let timeoutID;
// when the dom is loaded:
// window.addEventListener('DOMContentLoaded', () => { // make trigger to begin the toggle not DOM loading, target class toggle and listen for click
                                                      // have boolean to track on and off, when turned back off reset to 0 and stop
  
document.querySelector('.toggle').addEventListener('click', () => {
  // update boolean to track change in toggle
  click = !click;

  // if click is true:
  if (click) {

    startTime = Date.now();
        
        // currentDomain = window.location.hostname;

    
    // Get URL on current page, display domain name
    // currentPage = window.location.href;

    // make first call of updateTime
    updateTime();

  } else {
    // if click is false:
    // set display to 00:00:00
    const timeField = document.querySelector('.time');
    timeField.innerText = '00:00:00'
    //return
    clearTimeout(timeoutTag);
    return;

  }
})








  // consider: matches content script, match patterns