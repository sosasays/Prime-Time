// Function declarations

// Convert a time value from miliseconds to Hours: Minutes
function convertToHHMM(ms) {
  // input: time in ms
  // output: key value pair of hours: minutes
  
  const hours = Math.floor(ms / (3600000));
  const minutes = Math.floor((ms % 3600000) / 60000);
  
  return {hours: hours,
          minutes: minutes};
}

// 
function updateTime() {
  const currentTime = Date.now()
  // Update text content of display div to current time - start time
  const timeDifferenceMS = currentTime - startTimeMS;
  const timeDifferenceHHMM = convertToHHMM(timeDifferenceMS);

  // Set text content of display div's time to 00:00
  // DIVHERE.innerText = `${startTimeHHMM[hours]}:${startTimeHHMM[minutes]}

  // Recursive-ish call to continue updating time display every minute
  setTimeout(updateTime, 60000)
}

// Logic for getting and rendering time

  // Get URL on current page, display domain name

  // Set start time
  const startTimeMS = Date.now();
  const startTimeHHMM = convertToHHMM(startTimeMS);

  // make first call of updateTime
  updateTime();






  // consider: matches content script, match patterns