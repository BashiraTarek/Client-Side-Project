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
    console.log("ffff")
    location.assign("login.html");}
    else if (JSON.parse(localStorage.getItem("indicate"))===1)
   location.assign("cart.html")
     })

    const Name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById('message');

    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        if (!(isUserNameValid() && isUserEmailValid() && isUserSubjectValid() && isUserMessageValid())) {
            alert("Please complete your data ");
            return;
        }

        // email code here 
        Email.send({
            SecureToken: "bf1ada76-4732-4b44-97e0-96d1cca59ad5",
            To: 'bashiratarek567@gmail.com',
            From: "bashiratarek567@gmail.com",
            Subject: email.value,
            Body: message.value
        }).then(
            message => {
                alert("Message sent successfully");
                document.forms[0].reset(); // Reset the form after successful email send
            }
        );
    });

    Name.addEventListener('blur', function () {
        if (!isUserNameValid()) {
            Name.className = "incorrect";
            Name.focus();
            Name.select();
        } else {
            Name.className = "correct";
        }
    });//end of name blur

    email.addEventListener('blur', function () {
        if (!isUserEmailValid()) {
            email.className = "incorrect";
            email.focus();
            email.select();
        } else {
            email.className = "correct";
        }
    });//end of email blur

    subject.addEventListener('blur', function () {
        if (!isUserSubjectValid()) {
            subject.className = "incorrect";
            subject.focus();
            subject.select();
        } else {
            subject.className = "correct";
        }
    });//end of subject blur

    message.addEventListener('blur', function () {
        if (!isUserMessageValid()) {
            message.className = "incorrect";
            message.focus();
            message.select();
        } else {
            message.className = "correct";
        }
    });//end of message blur

});// end of load

function isUserNameValid() {
   
    return document.getElementById("name").value.match(/^[A-Za-z]+(\s[a-zA-Z]+)*$/);
}

function isUserEmailValid() {
    return document.getElementById("email").value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

function isUserSubjectValid() {
    return  document.getElementById("subject").value.match(/\S+/);
}

function isUserMessageValid() {
    
    return document.getElementById("message").value.match(/\S+/);
}
