window.addEventListener('load', function (){
    let nav=this.document.getElementById("signout");
    if(JSON.parse(localStorage.getItem('indicate'))==null || JSON.parse(localStorage.getItem('indicate'))===0)
    nav.innerText="Sign In";
     else if(JSON.parse(localStorage.getItem('indicate'))===1){
    //   document.getElementById('ls').style.display="none";
    //   document.getElementById('lo').style.display="none";
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
      


    // cart validation
    document.getElementById('cart').addEventListener('click',function(){
        if( JSON.parse(localStorage.getItem("indicate"))==null || JSON.parse(localStorage.getItem("indicate"))===0){
        console.log("ffff")
        location.assign("login.html");}
        else if (JSON.parse(localStorage.getItem("indicate"))===1)
       location.assign("cart.html")
         })


  let products=JSON.parse(localStorage.getItem('currentproducts')) || [];
    const table = document.createElement("table"); 
    let array = [];
    if (localStorage.getItem('newproducts') != null) {
        array = JSON.parse(localStorage.getItem("newproducts"));
    } else {
        array = products;
        localStorage.setItem("currentproducts", JSON.stringify(array));
    }

   
   

    
    let productrow;

  for(let i=0 ;i < 7 ;i++) {
        // create row in table
        if (i % 3 === 0) {
            productrow = document.createElement('tr');
        }

        // create td 
        var producttd = document.createElement('td');

        // create an image element
        var productimg = document.createElement('img');
        productimg.setAttribute("src", array[i].image);
        productimg.setAttribute("width", "50");
        productimg.setAttribute("height", "100");

        // create a description element
        var productdescription = document.createElement('p');
        productdescription.innerText = array[i].name ;

        // create a price element
        var productprice = document.createElement("p");
        productprice.innerText = 'price:$' + array[i].price;





        // create add button
        var viewButton = document.createElement('button');
        viewButton.id = 'viewButton';  // Assign a specific id
        viewButton.innerText = 'view details';
        viewButton.style.background = "pink";
        viewButton.style.color = "white";
        viewButton.style.textAlign = "center";
        viewButton.style.display = 'block';
        viewButton.style.margin = "0 auto";
       


        // append the image, description, price 
        producttd.appendChild(productimg);
        producttd.appendChild(productdescription);
        producttd.appendChild(productprice);
        producttd.appendChild(viewButton);

        // append the td to tr
        productrow.appendChild(producttd);

        // append tr to table only when 3 tds are added or it's the last product
        if (i % 3 === 2 || i === array.length - 1) {
            table.appendChild(productrow);
        }
          // append table in body
    document.body.appendChild(table);
    viewButton.addEventListener('click', function () {
        AddToCart(array);
    });

    };

    // append table in body
    document.body.appendChild(table);


// call addtocart function
    

  

}); // end of load



    //function AddToCart(products) {
        // put current product within array
        function AddToCart(products) {
            // Retrieve current product details from localStorage
            let productDetails = JSON.parse(localStorage.getItem('productdetails')) || [];
        
            // Append the new products to the existing array
            productDetails.push(products);
        
            // Store the updated array in localStorage
            localStorage.setItem('productdetails', JSON.stringify(productDetails));
        
            // Redirect to the product page
            window.location.href = 'productpage.html';
        }
           

