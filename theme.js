// theme.js
// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Icon elements (assuming SVG within the button)
    // We will toggle their visibility or path
    const sunIcon = document.getElementById('theme-toggle-sun-icon');
    const moonIcon = document.getElementById('theme-toggle-moon-icon');

    // Function to update icons based on current theme
    const updateIcons = () => {
        if (document.documentElement.classList.contains('dark')) {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    };

    // Initial icon state
    if (themeToggleBtn) {
        updateIcons();

        themeToggleBtn.addEventListener('click', function() {
            // toggle icons inside button
            sunIcon.classList.toggle('hidden');
            moonIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                // if NOT set via local storage previously
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });
    }
});
