document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("imageGrid");

    for (let row = 1; row <= 5; row++) {
        for (let col = 1; col <= 3; col++) {
            const image = document.createElement("img");
            image.src = `https://source.unsplash.com/random/150x150?sig=${row}${col}`;
            image.classList.add("img");
            imageGrid.appendChild(image);
        }
    }
});

