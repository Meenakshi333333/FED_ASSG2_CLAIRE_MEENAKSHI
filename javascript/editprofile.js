//loading user data - local storage
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const bio = localStorage.getItem('bio');
    // Apply the data to the elements
    if (username) {
        document.getElementById('username').placeholder = username;
    }

    if (email) {
        document.getElementById('email').placeholder = email;
    }

    if (!name) {
        document.getElementById('name').placeholder = "You have not set a name yet.";
    } else {
        document.getElementById('name').placeholder = name;
    }

    if (!bio) {
        document.getElementById('bio').textContent = "Write your bio here.";
    } else {
        document.getElementById('bio').textContent = bio;
    }

});


//profile picture
document.getElementById("newuserpfp").addEventListener("change", function () {
    const input = this; // File input element
    const img = document.getElementById("userpfp"); // Profile image element

    if (input.files && input.files[0]) {
        const reader = new FileReader(); // Create a FileReader instance

        reader.onload = function (e) {
            img.src = e.target.result; // Set the new image source
        };

        reader.readAsDataURL(input.files[0]); // Read the selected file
    }
});

//save changes
document.getElementById("profile-dets").addEventListener("submit" , function (e) {
    //inputs
    const usernameI = document.getElementById("username");
    const nameI = document.getElementById("email");
    const bioI = document.getElementById("bio");
    const locationI = document.getElementById("location");
    const emailI = document.getElementById("email");
    const genderI = document.getElementById("gender");
    const birthdayI = document.getElementById("birthday");

    
});