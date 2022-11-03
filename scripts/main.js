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
  const timeDifferenceMS = currentTime - startTimeMS;
  const timeDifferenceHHMM = convertToHHMM(timeDifferenceMS);

  // Set text content of display div's time to 00:00
  const timeField = document.querySelector('.time');
  timeField.innerText = `${timeDifferenceHHMM[hours]}:${timeDifferenceHHMM[minutes]}:${timeDifferenceHHMM[seconds]}`

  // Recursive-ish call to continue updating time display every minute
  setTimeout(updateTime, 1000)
}

// Global variables:
let currentDomain;

// when the dom is loaded:
window.addEventListener('DOMContentLoaded', () => {
  
  // If currentDomain has changed, set start time
  if (currentDomain !== window.location.hostname) {
      const startTimeMS = Date.now();
      const startTimeHHMM = convertToHHMM(startTimeMS);

      currentDomain = window.location.hostname;
  }
  
  // Get URL on current page, display domain name
  currentPage = window.location.href;

  // make first call of updateTime
  updateTime();
})








  // consider: matches content script, match patterns