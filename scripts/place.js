document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
function calculateWindChill(temp, speed, unit) {
  return (unit === 'F' && temp <= 50 && speed > 3)
    ? (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(1)
    : (unit === 'C' && temp <= 10 && speed > 4.8)
    ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1)
    : "N/A";
}
const temperature = 25; // °C
const windSpeed = 20;   // km/h
const windChillElement = document.getElementById('windchill');
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed) + ' °C';
} else {
  windChillElement.textContent = 'N/A';
}