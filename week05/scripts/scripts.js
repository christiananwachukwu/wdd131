// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 1: Create/get the chapter list array from localStorage or use an empty one
let chaptersArray = getChapterList() || [];

// Step 2: Show the saved chapters when page loads
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Step 3: Handle the Add button click
button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        displayList(chapter);                     // Show on screen
        chaptersArray.push(chapter);              // Add to array
        setChapterList();                         // Save to localStorage
        input.value = '';                         // Clear input
        input.focus();                            // Set focus
    } else {
        alert('Please enter a chapter name before adding.');
    }
});

// Step 4: Function to display a chapter with delete button
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute("aria-label", "Remove " + item);
    li.append(deleteButton);
    list.append(li);

    // When ❌ is clicked
    deleteButton.addEventListener('click', () => {
        deleteChapter(item);           // Remove from array & localStorage
        list.removeChild(li);          // Remove from screen
    });
}

// Step 5: Function to save chaptersArray to localStorage
function setChapterList() {
    localStorage.setItem('bomChapters', JSON.stringify(chaptersArray));
}

// Step 6: Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('bomChapters'));
}

// Step 7: Function to delete a chapter from array and storage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();  // Update localStorage
}