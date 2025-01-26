document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "6796210b0acc06ecb10d3649";

    document.getElementById("signup").addEventListener("click", function (e) {
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
            body: JSON.stringify(jsondata), //to convert script to json file for api
            beforeSend: function () {
              document.getElementById("signup").disabled = true;
              document.getElementById("dets").reset();
            }
        }

          fetch("https://useraccounts-d594.restdb.io/rest/account", settings)
            .then(response => response.json())
            .then(data => {
                document.getElementById("signup").disabled = false;
            });
    });

});