const injectedTime = document.createElement('div');
injectedTime.setAttribute('class', 'injectTime');
injectedTime.innerText = '00:00:00';

const body = document.querySelector('body');
body.appendChild(injectedTime);

    // Global variables:
let startTime = Date.now();

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

function updateTime() {
  const currentTime = Date.now();
  // Update text content of display div to current time - start time
  const timeDifferenceMS = currentTime - startTime;
  const timeDifferenceHHMM = convertToHHMM(timeDifferenceMS);

  // Set text content of display div's time to 00:00

  const timeField = document.querySelector('.injectTime');
  const showHours = (timeDifferenceHHMM.hours < 10) ? '0' + timeDifferenceHHMM.hours.toString() : timeDifferenceHHMM.hours.toString();
  const showMinutes = (timeDifferenceHHMM.minutes < 10) ? '0' + timeDifferenceHHMM.minutes.toString() : timeDifferenceHHMM.minutes.toString();
  const showSeconds = (timeDifferenceHHMM.seconds < 10) ? '0' + timeDifferenceHHMM.seconds.toString() : timeDifferenceHHMM.seconds.toString();

  timeField.innerText = `${showHours}:${showMinutes}:${showSeconds}`;

  // Recursive-ish call to continue updating time display every minute
    setTimeout(updateTime, 1000);
}

// Run the functions on document load
startTime = Date.now();
updateTime();