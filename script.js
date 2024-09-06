// Saving notes to local storage
const notesTextarea = document.getElementById('notes-area');

notesTextarea.addEventListener('input', () => {
    localStorage.setItem('notes', notesTextarea.value);
});

// Load saved notes from local storage
document.addEventListener('DOMContentLoaded', () => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesTextarea.value = savedNotes;
    }

    const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const cards = document.querySelectorAll('.card');
const sectionTitles = document.querySelectorAll('.section-title');

// Check for saved theme in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    content.classList.add('dark-mode');
    cards.forEach(card => card.classList.add('dark-mode'));
    sectionTitles.forEach(title => title.classList.add('dark-mode'));
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    sidebar.classList.toggle('dark-mode');
    content.classList.toggle('dark-mode');
    cards.forEach(card => card.classList.toggle('dark-mode'));
    sectionTitles.forEach(title => title.classList.toggle('dark-mode'));

    // Save the current theme to local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
