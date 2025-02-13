document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.getElementById("menu");
    const closeButton = document.querySelector(".close-button");

    function toggleMenu() {
        menu.classList.toggle("show-menu");
    }

    // Toggle menu on button click
    menuButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove("show-menu");
        }
    });
});
