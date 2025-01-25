const horizontalScrollContainer = document.querySelector(".scroll-container-horizontal");

function autoScrollHorizontal() {
    horizontalScrollContainer.scrollBy({ left: 1, behavior: "smooth" });

    // Loop back to the start when reaching the end
    if (
        horizontalScrollContainer.scrollLeft + horizontalScrollContainer.offsetWidth >=
        horizontalScrollContainer.scrollWidth
    ) {
        horizontalScrollContainer.scrollLeft = 0;
    }
}

setInterval(autoScrollHorizontal, 50); // Adjust speed as needed
