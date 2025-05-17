// Get references to the input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the button
button.addEventListener('click', () => {
  if (input.value.trim() === '') {
    input.focus(); // Keep focus on the input
    return; // Stop if input is empty
  }

  // Create list item and delete button
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Set the list item's text and button content
  li.textContent = input.value;
  deleteButton.textContent = '❌';

  // Accessibility label
  deleteButton.setAttribute('aria-label', 'Remove ${input.value}');

  // Add delete functionality
  deleteButton.addEventListener('click', () => {
    list.removeChild(li); // Remove the list item
  });

  // Put button inside list item, and list item inside the list
  li.appendChild(deleteButton);
  list.appendChild(li);

  // Clear the input and refocus
  input.value = '';
  input.focus();
});
