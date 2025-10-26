/**
 * Main JavaScript file for Docelícias landing page
 */

// Constants
const COUNTDOWN_KEY = 'docelicias_countdown';
const COUNTDOWN_DURATION = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

/**
 * Initialize the application
 */
function init() {
  setCurrentYear();
  initCountdown();
  initAccessibility();
}

/**
 * Set current year in footer
 */
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Initialize countdown timer
 */
function initCountdown() {
  let endTime = localStorage.getItem(COUNTDOWN_KEY);
  
  if (!endTime) {
    endTime = Date.now() + COUNTDOWN_DURATION;
    localStorage.setItem(COUNTDOWN_KEY, endTime);
  }
  
  startCountdownTimer(parseInt(endTime));
}

/**
 * Start the countdown timer
 * @param {number} endTime - End time in milliseconds
 */
function startCountdownTimer(endTime) {
  function updateCountdown() {
    const remainingTime = endTime - Date.now();
    const countdownElements = document.querySelectorAll('.countdown');
    
    countdownElements.forEach(element => {
      element.textContent = remainingTime > 0 
        ? formatTime(remainingTime) 
        : 'Oferta encerrada';
    });
    
    if (remainingTime > 0) {
      setTimeout(updateCountdown, 1000);
    }
  }
  
  updateCountdown();
}

/**
 * Format time in milliseconds to readable format
 * @param {number} milliseconds - Time in milliseconds
 * @returns {string} Formatted time string
 */
function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return `${hours}h ${minutes}m ${seconds}s`;
}

/**
 * Initialize accessibility features
 */
function initAccessibility() {
  const detailsElements = document.querySelectorAll('details');
  
  detailsElements.forEach(details => {
    details.addEventListener('keyup', handleDetailsKeyup);
  });
}

/**
 * Handle keyup events for details elements
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleDetailsKeyup(event) {
  if (event.key === 'Enter') {
    event.target.open = !event.target.open;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);