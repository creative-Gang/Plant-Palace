const searchBox = document.getElementById("searchBox"); // Make sure your search box has a unique ID "searchBox"
const containers = document.querySelectorAll(".box-container, .box, .box-container, .filter-item all new, .filter-item all best-sellers"); // Updated class selectors

searchBox.addEventListener("input", function () {
    const searchTerm = searchBox.value.toLowerCase();

    containers.forEach(container => {
        const items = container.getElementsByClassName("box");
        Array.from(items).forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.style.display = "block"; // Display the item
            } else {
                item.style.display = "none";  // Hide the item
            }
        });
    });


    containers.forEach(container => {
        const items = container.getElementsByClassName("filter-item all best-sellers");
        Array.from(items).forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.style.display = "block"; // Display the item
            } else {
                item.style.display = "none";  // Hide the item
            }
        });
    });

    containers.forEach(container => {
        const items = container.getElementsByClassName("filter-item all specials");
        Array.from(items).forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.style.display = "block"; // Display the item
            } else {
                item.style.display = "none";  // Hide the item
            }
        });
    });

    containers.forEach(container => {
        const items = container.getElementsByClassName("filter-item all new");
        Array.from(items).forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.style.display = "block"; // Display the item
            } else {
                item.style.display = "none";  // Hide the item
            }
        });
    });
});

