window.addEventListener('load',function(){
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



    var productname=this.document.getElementById('productname');
    var productimg=this.document.getElementById('productimg');
    var productprice=this.document.getElementById('productprice')
    var productdescription=this.document.getElementById('productdescription')
    
    productname.addEventListener('blur', function () {
        if (!ProudctNameValid()) {
            productname.className="incorrect";
            productname.focus();
            productname.select();
        } else{
            productname.className="correct";
        }
    });//end of productname blur
    
    productimg.addEventListener('blur', function () {
        if (!ProudctImageValid()) {
            productimg.className="incorrect";
            productimg.focus();
            productimg.select();
        } else{
            productimg.className="correct";
        }
    });//end of productimg blur
    
    productprice.addEventListener('blur', function () {
        if (!ProudctPriceValid()) {
            productprice.className="incorrect";
            productprice.focus();
            productprice.select();
        } else{
            productprice.className="correct";
        }
    });//end of productprice blur
    
    productdescription.addEventListener('blur', function () {
        if (!ProudctDescriptionValid()) {
            productdescription.className="incorrect";
            productdescription.focus();
            productdescription.select();
        } else{
            productdescription.className="correct";
        }
    });//end of product description blur
    
    let products=JSON.parse(localStorage.getItem('currentproducts')) || [];
      
    
    //const addbutton=document.getElementById('add')
    let array=[];
    if (this.localStorage.getItem('newproducts')!=null){
        array=JSON.parse(localStorage.getItem("newproducts"));
    }
    else{
        array=products;
    }
    let newproduct;
    document.forms[0].addEventListener('submit',function(e){
    
    if(!(ProudctNameValid() && ProudctImageValid() && ProudctPriceValid() && ProudctDescriptionValid())){
        e.preventDefault(); 
             alert("please Complete Your Data"); 
    }
    else{
    
        let productname=document.getElementById('productname').value;
        let productimg=document.getElementById('productimg').value;
        productprice=document.getElementById('productprice').value;
        let productdescription=document.getElementById('productdescription').value;
        
    
         newproduct={
            name : productname,
            image : productimg,
            price: productprice,
            description: productdescription,
        };
        array.push(newproduct);
    
        // save data to local storage 
    
        localStorage.setItem('newproducts',JSON.stringify(array));
    }
        
    });
    
    
    
    
    
    const table=document.getElementById("table");// parent of gallery
    
    array.forEach(function(product,i){
        //create row in table
        var productrow= document.createElement('tr'); 
        // create td 
        var producttd=document.createElement('td');
        // create an image element
        var productimg = document.createElement('img');
        productimg.setAttribute("src", product.image);
        productimg.style.width = '100%'; 
        
        //create an description elemnt
        var productdescription=document.createElement('p');
        productdescription.innerText=product.name;
    
        // create an price elemnet
        var productprice=document.createElement("p");
        productprice.innerText='price:$'+product.price;
    
         // append the image , description , price, 
        producttd.appendChild(productimg);
        producttd.appendChild(productdescription);
        producttd.appendChild(productprice);
    
        //append the td to tr
        productrow.appendChild(producttd);
    
        // append tr to table
    
        table.appendChild(productrow);
    
        // append table in body
        document.body.appendChild(table);
        
    
         var deleteButton = document.createElement('button');
         deleteButton.innerText = 'Delete';
         deleteButton.style.background="pink"
         deleteButton.style.color="white"
         deleteButton.style.textAlign="center"
         deleteButton.addEventListener('click', function () {
         // Remove the row from the table
            productrow.remove();
    
            // Remove the product from the array
           array.splice(i, 1);
    
             // Save the updated array to local storage
            localStorage.setItem("newproducts", JSON.stringify(array));
        });
    
        // append the delete button
         producttd.appendChild(deleteButton);
    
        // creation of update button

        var updateButton = document.createElement('button');
        updateButton.innerText = 'update';
        updateButton.setAttribute('style', 'background-color: pink; color: white; text-align: center ; margin-right: 10px;')

         // run  click event listener to the update button
        updateButton.addEventListener('click', function () {

        //  display a prompt for updating
        var updatedName = prompt('Enter updated product name:', product.name);
        var updatedImage = prompt('Enter updated image URL:', product.image);
        var updatedPrice = prompt('Enter updated price:', product.price);
        var updatedDescription = prompt('Enter updated product description:', product.description);

        // Update the product details
        product.name = updatedName;
        product.image = updatedImage;
        product.price = updatedPrice;
        product.description = updatedDescription;

        // Save the updated array to local storage
        localStorage.setItem("newproducts", JSON.stringify(array));

        // Refresh the page to reflect the changes
        location.reload();
    })




    producttd.appendChild(updateButton)
      
    
    })// for each
    
        
    
    
    
    });//end of load
    
    function ProudctNameValid(){
        return productname.value.match(/^[a-zA-Z]+(?: [a-zA-Z]+)?$/);
    }
    function ProudctImageValid(){
        return document.getElementById('productimg').value.match(/\/images\/[a-zA-Z0-9_]+\.(jpg|jpeg|png|gif)/i);
    }
    function ProudctPriceValid(){
        return document.getElementById('productprice').value.match(/^\$?[0-9]+(?:\.[0-9]{1,2})?$/);
    }
    function ProudctDescriptionValid(){
        return document.getElementById('productdescription').value.match(/^[a-zA-Z0-9\s.,!?'"()]+$/);
    }