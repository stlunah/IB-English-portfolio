// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-sidebar');
const body = document.body;
const content = document.querySelector('.content');
const cards = document.querySelectorAll('.card');
const sectionTitles = document.querySelectorAll('.section-title');
const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Check for saved theme in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    content.classList.add('dark-mode');
    cards.forEach(card => card.classList.add('dark-mode'));
    sectionTitles.forEach(title => title.classList.add('dark-mode'));
}

// Toggle sidebar collapse
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
});

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

// Collapsible Sections
const sectionTitlesList = document.querySelectorAll('.section-title');

sectionTitlesList.forEach(title => {
    title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('hidden');
    });
});

// Markdown Preview
markdownInput.addEventListener('input', () => {
    markdownPreview.innerHTML = marked(markdownInput.value);
});
