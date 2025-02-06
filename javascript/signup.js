//photo carousel
let index = 0;
const pcarousel = document.getElementsByClassName("carousel")[0]; // Get the first carousel
const dots = document.getElementsByClassName("dot"); // Get all the dots (use correct class name)
const numphotos = document.getElementsByClassName("photo").length; // Get the number of photos

// active/inactive dots
function updatedots() {
    // Use a loop or Array.from() to iterate over the dots
    Array.from(dots).forEach((dot, i) => {
        dot.classList.toggle("active", i === index); // Toggle the 'active' class based on the index
    });
}

// to move to the next photo
function tonextphoto() {
    index = (index + 1) % numphotos; // Loop back to the first photo after the last one
    pcarousel.style.transform = `translateX(-${index * 100}%)`; // Use template literals for dynamic width
    updatedots(); // Update dots
}

// initializing the photo at given index
function setphoto(photoindex) {
    index = photoindex;
    pcarousel.style.transform = `translateX(-${index * 100}%)`; // Use template literals
    updatedots(); // Update dots
}

// auto movement
setInterval(tonextphoto, 4000);

//API for user acc creation
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "6796210b0acc06ecb10d3649";

    document.getElementById("dets").addEventListener("submit", function (e) {
      e.preventDefault();
  
      let SUusername = document.getElementById("SU_username").value;
      let SUemail = document.getElementById("SU_email").value;
      let SUpassword = document.getElementById("SU_password").value;
  
      let jsondata = {
        "username": SUusername,
        "email": SUemail,
        "password": SUpassword
      };
  
      let settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata)
      };
  
      fetch("https://useraccounts-d594.restdb.io/rest/account", settings)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Account created successfully:", data);
            alert("Account created successfully!");
            document.getElementById("dets").reset();
        })
        .catch(error => {
            console.error("Error:", error.message);
            alert("Failed to create account. Please try again.");
        });
    });
  
});