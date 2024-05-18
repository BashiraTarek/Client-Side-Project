window.addEventListener('load', function () {
    let nav = document.getElementById("signout");

    if (JSON.parse(localStorage.getItem('indicate')) == null || JSON.parse(localStorage.getItem('indicate')) === 0)
        nav.innerText = "Sign In";
    else if (JSON.parse(localStorage.getItem('indicate')) === 1) {
        
        nav.innerText = "Sign Out";
    }

    nav.addEventListener('click', function () {
        if (nav.innerText == "Sign In") {
            location.replace('login.html');
            localStorage.setItem('indicate', 0);
        } else if (nav.innerText == "Sign Out") {
            location.replace('login.html');
            localStorage.setItem('indicate', 0);
        }
    });
// cart validation
    document.getElementById('cart').addEventListener('click',function(){
        if( JSON.parse(localStorage.getItem("indicate"))==null || JSON.parse(localStorage.getItem("indicate"))===0){
        
        location.assign("login.html");}
        else if (JSON.parse(localStorage.getItem("indicate"))===1)
       location.assign("cart.html")
         })

    
    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
       
    
        sendMail();
    });
    
    function sendMail() {
        (function () {
            emailjs.init("qFMCQ2dUJWBE4IlaK"); // Account Public Key
        })();

        var params = {
            to: JSON.parse(localStorage.getItem('currentuser')).Email,
            name: JSON.parse(localStorage.getItem('currentuser')).UserName,
        };

        var serviceID = "service_ahzh9kb"; // Email Service ID
        var templateID = "template_yvkuuqc"; // Email Template ID

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                alert("Email sent successfully!!");
            })
            .catch(error => {
                console.error("Error sending email:", error);
            });
    }
});
