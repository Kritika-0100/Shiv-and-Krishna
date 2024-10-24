// Smooth scroll to sections horizontally
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            var dropdownMenu = this.nextElementSibling;
            
            // Hide all dropdown menus except the one clicked
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            
            // Toggle the clicked dropdown menu
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
            
            event.preventDefault(); // Prevent default anchor behavior
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});
