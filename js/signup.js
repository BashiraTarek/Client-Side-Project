window.addEventListener('load', function(){ 
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




    UserName=document.getElementById("username");
    Email=document.getElementById("email");
    Birthdaydate=document.getElementById("birthday");
    Phonenumber=document.getElementById("phone");
    Password=document.getElementById("password");
    let uniquename = JSON.parse(localStorage.getItem("uniquename"))||[];
    console.log(uniquename);
    UserName.focus();
   
    UserName.addEventListener('blur',function(){
        if(!isUserNameValid()){
            UserName.className="incorrect";
            UserName.focus();
            UserName.select();
        }else{
            UserName.className="correct";
        };
    });
    Password.addEventListener('blur',function(){
        if(!isPasswordValid()){
            Password.className="incorrect";
            Password.focus();
            Password.select();
        }else{
            Password.className="correct";
        }

    });
    Phonenumber.addEventListener('blur',function(){
        if(!isPhoneNUMValid()){
            Phonenumber.className="incorrect";
            Phonenumber.focus();
            Phonenumber.select();
        }else{
            Phonenumber.className="correct";
        };
    });
   
    Birthdaydate.addEventListener('blur',function(){
        if(!isBirthdayDATEValid()){
            Birthdaydate.className="incorrect";
            Birthdaydate.focus();
            Birthdaydate.select();
        }else{
            Birthdaydate.className="corre(userdatajs);ct";
        };
    });
    Email.addEventListener('blur',function(){
        if(!isUseremailValid()){
            Email.className="incorrect";
            Email.focus();
            Email.select();
        }else{
            Email.className="correct";
        };
    });
  document.getElementById("sp").addEventListener('click',function(e){
        if(!(isUserNameValid()&&isPasswordValid()&&isPhoneNUMValid() &&isBirthdayDATEValid()&&isUseremailValid())){
         e.preventDefault();
         alert("please... Complete Your Data");
         } else if(isUserUniqueName()){
            e.preventDefault();
            alert("This name has been used before , Please choose another one .")
            UserName.focus();
            UserName.select();

        }else{
            
            let rigesterdatajson=JSON.parse(localStorage.getItem('userdata'))||[];
            

            let  userscart =[]
            let userdatajs={
                UserName:UserName.value,
                Password:Password.value,
                Email:Email.value,
                Phonenumber:Phonenumber.value,
                Birthdaydate:Birthdaydate.value
                
            };
              uniquename.push(userdatajs.UserName);
              localStorage.setItem("uniquename",JSON.stringify(uniquename))
              rigesterdatajson.push(userdatajs);
              let arrayuserdatajson= JSON.stringify(rigesterdatajson);
              localStorage.setItem('userdata',arrayuserdatajson);

         
              //userscart.push(userdatajs);
              localStorage.setItem(`${userdatajs.UserName} cart`,JSON.stringify(userscart));
 
              
           location.assign('login.html') ;  
           
            
           
            
        }
        });

        function isUserUniqueName(){
            let enteredname=UserName.value.toLowerCase();
            for (let i=0 ;i< uniquename.length; i++){
                if(uniquename[i].toLowerCase()===enteredname){
                    return true;
                }
            }
            return false;
        }



});//end of load

function isUserNameValid(){
    return UserName.value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);
};
function isPasswordValid(){
    return Password.value.match(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/);
};
function isPhoneNUMValid(){
    return Phonenumber.value.match(/^01\d{9}$/);
};
function isBirthdayDATEValid(){
    return Birthdaydate.value.match(/^\d{4}-\d{2}-\d{2}$/);
};
function isUseremailValid(){
    return Email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
