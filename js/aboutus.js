window.addEventListener('load', function () {
    let nav=document.getElementById("signout");
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
     

//cart validation
         document.getElementById('cart').addEventListener('click',function(){
            if( JSON.parse(localStorage.getItem("indicate"))==null || JSON.parse(localStorage.getItem("indicate"))===0){
            console.log("ffff")
            location.assign("login.html");}
            else if (localStorage.getItem("indicate")===1)
           location.assign("cart.html")
             })
    });