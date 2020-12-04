const navHeader = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item");
    // toggle nav
    burger.addEventListener("click", () => {
        console.log("done burger");
        nav.classList.toggle("nav-active");

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                .1}s`;
            }
        });
        //   burger animation
        burger.classList.toggle("toggle");
        console.log("done burger menu");
    });
};
navHeader();