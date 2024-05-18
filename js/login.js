window.addEventListener('load', function () {

    let nav=this.document.getElementById("signout");
    if(JSON.parse(localStorage.getItem('indicate'))==null || JSON.parse(localStorage.getItem('indicate'))===0)
    nav.innerText="Sign In";
     else if(JSON.parse(localStorage.getItem('indicate'))===1){
    
      nav.innerText="Sign Out";
     }
    
   
    nav.addEventListener('click',function(){
  
         if(nav.innerText=="Sign In"){
          
             location.replace('login.html');
             localStorage.setItem('indicate',(0));
         }
         else if(nav.innerText=="Sign Out"){
          
             location.replace('login.html');
             localStorage.setItem('indicate',(0));
         }
     });


    
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let button = document.getElementById("bt");
//console.log("baggdghdhh");
    // Admin data
    const admin = {
        usernameA: "bashira tarek",
        passwordA: "bashira136"
    }
    let USERDATA = JSON.parse(localStorage.getItem('userdata')) || [];
    button.addEventListener('click', function (e) {
      
        //console.log("bbbbbbbbb");
        if (username.value === admin.usernameA && password.value === admin.passwordA) {
            // Redirect admin immediately
     
            location.replace("dashboard.html");
            return;
        } else if(! (username.value === admin.usernameA && password.value === admin.passwordA)) {
            // User submit
           
           var match = false;

            // Loop through local storage data
            for (let i = 0; i < USERDATA.length; i++) {
                // Check if the user data is in local storage
                if (USERDATA[i].UserName === username.value && USERDATA[i].Password === password.value) {
                    console.log("user")
                    match = true;

                    localStorage.setItem('indicate',1);
                    location.replace("gallery.html");
                    localStorage.setItem('currentuser',JSON.stringify(USERDATA[i]) )
                    break; // Exit the loop if a matching user is found
                }
            }
        }
         if (match) {
                alert('You are successfully logged in');
                window.location.replace('gallery.html');
                localStorage.setItem('indicate', 1);
            } else {
                alert('Your username or password is NOT correct');
                 e.preventDefault();
                username.focus();
                username.select();
            }
       
    });
});