const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});

// Function to switch to the Pending tab
function switchToPending() {
    document.querySelector('.tab.pending').classList.add('active');
    document.querySelector('.tab.completed').classList.remove('active');
    document.getElementById('pending-content').classList.remove('hidden');
    document.getElementById('completed-content').classList.add('hidden');
}

// Function to switch to the Completed tab
function switchToCompleted() {
    document.querySelector('.tab.pending').classList.remove('active');
    document.querySelector('.tab.completed').classList.add('active');
    document.getElementById('pending-content').classList.add('hidden');
    document.getElementById('completed-content').classList.remove('hidden');
}

// Initial setup to show the Pending tab by default
switchToPending();

// Add click event listeners to the tab headers
document.querySelector('.tab.pending').addEventListener('click', switchToPending);
document.querySelector('.tab.completed').addEventListener('click', switchToCompleted);
