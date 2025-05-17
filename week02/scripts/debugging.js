const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Changed from querySelector('area')

let area = 0;
const PI = 3.14159; // Use =, not ==

let radius = 10; // Use let instead of const if you plan to reassign
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;