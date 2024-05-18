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
// cart validation
document.getElementById('cart').addEventListener('click',function(){
    if( JSON.parse(localStorage.getItem("indicate"))==null || JSON.parse(localStorage.getItem("indicate"))===0){
    console.log("ffff")
    location.assign("login.html");}
    else if (JSON.parse(localStorage.getItem("indicate"))===1)
   location.assign("cart.html")
     })

    // Retrieve products from localStorage
    let productDetails = JSON.parse(localStorage.getItem('productdetails'));

    const table = document.getElementById("table");

    productDetails.forEach(function (product) {
        // Create row in table
        var productrow = document.createElement('tr');
        // Create td 
        var producttd = document.createElement('td');
        // Create an image element
        var productimg = document.createElement('img');
        productimg.setAttribute("src", product.image);
       productimg.classList.add('productimg')


        // Create a description element
        var productdescription = document.createElement('p');
        productdescription.innerText = product.name + '\n' + product.description;

        // Create a price element
        var productprice = document.createElement("p");
        productprice.innerText = 'price:$' + product.price;

        // Create add to cart button
        var divbutton = document.createElement('div');
        var addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'add to cart';
        addToCartButton.style.background = "pink";
        addToCartButton.style.color = "white";
        addToCartButton.style.textAlign = "center";
        divbutton.appendChild(addToCartButton);

        // Append the image, description, price, and add to cart button
        producttd.appendChild(productimg);
        producttd.appendChild(productdescription);
        producttd.appendChild(productprice);
        producttd.appendChild(divbutton);

        // Append the td to tr
        productrow.appendChild(producttd);

        // Append tr to table
        table.appendChild(productrow);

        // Append table to body
        document.body.appendChild(table);

        addToCartButton.addEventListener('click', function () {
           // console.log("cart")
            if (JSON.parse(localStorage.getItem("indicate"))==null|| JSON.parse(localStorage.getItem('indicate'))===0){
              // console.log("ddd")
            location.assign("login.html");}
           else if(JSON.parse(localStorage.getItem('indicate'))===1)
            AddDetails(product); 
        });
    });// end of for each
});// end of load

function AddDetails(product) {
    let item = JSON.parse(localStorage.getItem(`${JSON.parse(localStorage.getItem('currentuser')).UserName} cart`)) || [];
    item.push(product);
    localStorage.setItem(`${JSON.parse(localStorage.getItem('currentuser')).UserName} cart`, JSON.stringify(item));
    window.location.href = 'cart.html';
}

