//photo carousel
let index = 0;
const pcarousel = document.getElementsByClassName("carousel")[0];
const dots = document.getElementsByClassName("dot");
const numphotos = document.getElementsByClassName("photo").length; //number of photos

// active/inactive dots
function updatedots() {
    // Use a loop or Array.from() to iterate over the dots
    Array.from(dots).forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// to move to the next photo
function tonextphoto() {
    index = (index + 1) % numphotos; // loop back to the first photo after the last one
    pcarousel.style.transform = `translateX(-${index * 100}%)`;
    updatedots();
}

// initializing the photo at given index
function setphoto(photoindex) {
    index = photoindex;
    pcarousel.style.transform = `translateX(-${index * 100}%)`;
    updatedots();
}

// auto movement
setInterval(tonextphoto, 4000);

// check log in details
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "6796210b0acc06ecb10d3649";

    document.getElementById("dets").addEventListener("submit", async function (e) {
      e.preventDefault();
  
      let LIusername = document.getElementById("LI_username").value;
      let LIemail = document.getElementById("LI_email").value;
      let LIpassword = document.getElementById("LI_password").value;
  
      let jsondata = {
        "username": LIusername,
        "email": LIemail,
        "password": LIpassword
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
  
      try {
        let checkResponse = await fetch(`https://useraccounts-d594.restdb.io/rest/account?q={"email": "${LIemail}"}`, {
            headers: {
                "x-apikey": APIKEY
            }
        });

        if (!checkResponse.ok) {
            throw new Error(`Error checking existing user: ${checkResponse.status}`);
        }

        let existingUser = await checkResponse.json();

        if (existingUser.length === 0) {
            alert("This email is not registered. Please create account instead.");
            return;
        }

        let user = existingUser[0];
        if (user.password === LIpassword && user.username === LIusername) {
            alert("Login successful!");
            localStorage.setItem("username", LIusername);
            localStorage.setItem("email", LIemail);
            setTimeout(() => {
                window.location.replace("/html/home.html"); 
            }, 500);
        } else {
            alert("Incorrect username and/or password")
        }
      } catch (error) {
            console.error("Error:",error.message);
            alert("Error occured while checking for account. Please try again.")
      }

    });
  
});

// to sign up

document.getElementById("signupbttn").onclick = function() {
    window.location.href = "/html/signup.html";
};