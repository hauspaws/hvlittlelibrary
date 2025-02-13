document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const menu = document.getElementById("menu");

    function toggleMenu() {
        menu.classList.toggle("show-menu");
        menuButton.classList.toggle("hide");
        closeButton.classList.toggle("show");
    }

    // Toggle menu on button click
    menuButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    // Close menu when clicking outside, but keep it open when clicking inside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target) && !closeButton.contains(event.target)) {
            menu.classList.remove("show-menu");
            menuButton.classList.remove("hide");
            closeButton.classList.remove("show");
        }
    });

    // Ensure menu closes when a menu link is clicked
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show-menu");
            menuButton.classList.remove("hide");
            closeButton.classList.remove("show");
        });
    });
});
