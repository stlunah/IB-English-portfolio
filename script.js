// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const pages = document.querySelectorAll('.page');
const pageLinks = document.querySelectorAll('.sidebar a');
const editButtons = document.querySelectorAll('.edit-page');

// Check for saved theme in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Sidebar Toggle
document.querySelector('.toggle-sidebar').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('collapsed');
});

// Page Navigation
pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = document.querySelector(`#${link.dataset.page}`);

        pages.forEach(page => page.classList.remove('active'));
        targetPage.classList.add('active');
    });
});

// Initialize Quill Editor (Optional, for a richer text editor)
const quill = new Quill('#editor-container', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image']
        ]
    }
});

// Editing Mode
editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contentDiv = button.nextElementSibling;
        contentDiv.contentEditable = contentDiv.contentEditable === "true" ? "false" : "true";
        contentDiv.focus();
    });
});
