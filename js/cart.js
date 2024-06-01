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
 
function totalpricevalue(){
    
let currentusername = localStorage.getItem('currentuser');
let item = JSON.parse(localStorage.getItem(`${currentusername} cart`)) || [];
let total=0;

for (let i=0; i< item.length;i++){
    total+=parseInt(item[i].price);
    var totalprice=document.getElementById("price");   
    totalprice.innerText=`Total Price : $${total}`;
    
 
}


console.log('total ' +total)
}


let currentusername = localStorage.getItem('currentuser');
let item = JSON.parse(localStorage.getItem(`${currentusername} cart`)) || [];

const table = document.getElementById("table");

item.forEach(function (product,i){
    


    var productrow= document.createElement('tr'); 
        // create td 
        var producttd=document.createElement('td');
        // create an image element
        var productimg = document.createElement('img');
        productimg.setAttribute("src", product.image);
         // Create a description element
         var productdescription = document.createElement('p');
         
         // Create a price element
         var productprice = document.createElement("p");
         productprice.innerText = 'price:$' + product.price;


          // append the image , description , price, 
          producttd.appendChild(productimg);
          producttd.appendChild(productdescription);
          producttd.appendChild(productprice);
         

        // const deletebutton=document.getElementById('delete')
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style.background="pink"
        deleteButton.style.color="white"
        deleteButton.style.textAlign="center"
        deleteButton.addEventListener('click', function () {
        // Remove the row from the table
           productrow.remove();
   
           // Remove the product from the array
          item.splice(i, 1);
   
            // Save the updated array to local storage
           localStorage.setItem(`${currentusername} cart`,JSON.stringify(item));
           location.reload(); 
           totalpricevalue();

       });
   
       // append the delete button
        producttd.appendChild(deleteButton);
 
          //append the td to tr
          productrow.appendChild(producttd);
    
          // append tr to table
      
          table.appendChild(productrow);
      
          // append table in body
          document.body.appendChild(table)

       
});// end of for each

          // append table in body
          document.body.appendChild(table)
  
        totalpricevalue();
    addbutton=document.getElementById("buyButton");
    addbutton.addEventListener('click',function(){
        location.assign("checkout.html")
});
       
});//end of load