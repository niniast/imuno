/* არცხენა მხარეს ჩამონათვალის დაკლიკებისას რომ შეიცვალოს */ const links =
    document.querySelectorAll(".sidebar a");

links.forEach((link) => {
    link.addEventListener("click", function () {
        document.querySelector(".sidebar a.active")?.classList.remove("active");
        this.classList.add("active");
    });
});
