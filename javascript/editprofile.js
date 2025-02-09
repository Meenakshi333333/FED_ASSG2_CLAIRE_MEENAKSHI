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
    const form = document.getElementById("profile-dets");

    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        usernameI.value = savedUsername;
    };
    const savedName = localStorage.getItem('name');
    if (savedName) {
        nameI.value = savedName;
    };
    const savedBio = localStorage.getItem('bio');
    if (savedBio) {
        bioI.value = savedBio;
    };
    const savedLocation = localStorage.getItem('location');
    if (savedLocation) {
        locationI.value = savedLocation;
    };
    const savedEmail = localStorage.getItem('email');
    if (savedUsername) {
        emailI.value = savedEmail;
    };
    const savedGender = localStorage.getItem('gender');
    if (savedGender) {
        genderI.value = savedGender;
    };
    const savedBday = localStorage.getItem('birthday');
    if (savedUsername) {
        birthdayI.value = savedBday;
    };

    form.addEventListener("submit", function (e) {
        if (usernameI.value !== localStorage.getItem('username')) {
            localStorage.setItem('username', username.value);
        };
    
        if (nameI.value !== localStorage.getItem('name')) {
            localStorage.setItem('name', nameI.valuee);
        };
    
        if (bioI.value !== localStorage.getItem('bio')) {
            localStorage.setItem('bio', bioI.value);
        };
    
        if (locationI.value !== localStorage.getItem('location')) {
            localStorage.setItem('location', locationI.value);
        };
    
        if (emailI.value !== localStorage.getItem('email')) {
            localStorage.setItem('email', emailI.value);
        };
    
        if (genderI.value !== localStorage.getItem('gender')) {
            localStorage.setItem('gender', genderI.value);
        };
    
        if (birthdayI.value !== localStorage.getItem('birthday')) {
            localStorage.setItem('birthday', birthdayI.value);
        };
        
        alert('Data saved successfully!');
    });

    
});