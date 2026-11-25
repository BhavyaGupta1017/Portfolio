
function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}

// Close menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});
