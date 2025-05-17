// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button
button.addEventListener('click', () => {
    const chapter = input.value.trim(); // remove extra spaces

    if (chapter !== '') {
        // Create list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text content and ARIA label for accessibility
        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute("aria-label","Remove" + chapter);
        // Append the delete button to the list item
        li.append(deleteButton);
        // Append the list item to the list
        list.append(li);

        // Clear and focus the input field
        input.value = '';
        input.focus();

        // Add delete functionality
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
    } else {
        alert('Please enter a chapter name before adding.');
    }
});