document.getElementById("tolisting").onclick = function() {
    window.location.href = "/html/Listing.html";
};

document.getElementById("to-cat-page").onclick = function() {
    window.location.href = "/html/Category.html";
};


document.querySelector(".cat-dropdown").onclick = function() {
    document.getElementsByClass("search-content").classList.toggle("show");
};

function filterFunction() {
    const input = document.getElementById("search-cat-input");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("option-dropdown");
    const options = div.getElementsByClassName("cat-option"); 

    for (let i = 0; i < options.length; i++) {  // Corrected a.length → options.length
        let txtValue = options[i].textContent || options[i].innerText; // Declared let txtValue
        
        if (txtValue.toUpperCase().includes(filter)) { 
            options[i].style.display = "";  // Show matching options
        } else {
            options[i].style.display = "none";  // Hide non-matching options
        };
    };
};

