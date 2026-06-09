const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter button");
const videos = document.querySelectorAll("main section");

let selectedCategory = "all";

// Search feature
searchInput.addEventListener("input", function () {
    filterVideos();
});

// Category filter feature
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.getAttribute("data-category");

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");

        filterVideos();
    });
});

function filterVideos() {
    const searchText = searchInput.value.toLowerCase();

    videos.forEach(function (video) {
        const title = video.querySelector("h3").textContent.toLowerCase();
        const category = video.getAttribute("data-category");

        const matchesSearch = title.includes(searchText);
        const matchesCategory = selectedCategory === "all" || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
}