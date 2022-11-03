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
  const showHours = (timeDifferenceHHMM.hours < 10) ? '0' + timeDifferenceHHMM.hours.toString() : timeDifferenceHHMM.hours.toString();
  const showMinutes = (timeDifferenceHHMM.minutes < 10) ? '0' + timeDifferenceHHMM.minutes.toString() : timeDifferenceHHMM.minutes.toString();
  const showSeconds = (timeDifferenceHHMM.seconds < 10) ? '0' + timeDifferenceHHMM.seconds.toString() : timeDifferenceHHMM.seconds.toString();

  timeField.innerText = `${showHours}:${showMinutes}:${showSeconds}`;

  // Recursive-ish call to continue updating time display every minute
  if (click) {
    setTimeout(updateTime, 1000);

  // return;
  } else if (click === false) {
    console.log('Click is false, resetting timer')
    // if click is false:
    // set display to 00:00:00
    const timeField = document.querySelector('.time');
    timeField.innerText = '00:00:00'
    //return
    // clearTimeout(timeoutTag);
    return;

  }
}

// Global variables:
let currentDomain;
let startTime = Date.now();
let click = false
let timeoutID;
// when the dom is loaded:
// window.addEventListener('DOMContentLoaded', () => { // make trigger to begin the toggle not DOM loading, target class toggle and listen for click
                                                      // have boolean to track on and off, when turned back off reset to 0 and stop
  
document.querySelector('.toggle-button').addEventListener('click', () => {
  // update boolean to track change in toggle
  console.log('event listener triggered')
  click = !click;
  console.log('Click changed to: ', click)
  buttonText = document.querySelector('.toggle-button').innerText;

  // if click is true:
  if (click === true) {
    buttonText = 'Stop';
    console.log('Click is true, starting time')
    startTime = Date.now();
        
        // currentDomain = window.location.hostname;

    
    // Get URL on current page, display domain name
    // currentPage = window.location.href;

    // make first call of updateTime
    updateTime();

  // } else if (click === false) {
  //   console.log('Click is false, resetting timer')
  //   // if click is false:
  //   // set display to 00:00:00
  //   const timeField = document.querySelector('.time');
  //   timeField.innerText = '00:00:00'
  //   //return
  //   // clearTimeout(timeoutTag);
  //   return;
  } else {
    buttonText = 'Start';
  }
})



