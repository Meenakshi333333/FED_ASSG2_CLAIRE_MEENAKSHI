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