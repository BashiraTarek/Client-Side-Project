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
    
    const products = [
        { id: 1 , name: "Huda Beauty Foundation", description: `The true filter effect gives instant coverage so seamless that it immediately unifies skin tone and texturInfusede as it blurs skin to give a radiant finish,high coverage ,shade vanilia`, price: 1700, image: "/images/img1.png" },
        { id: 2 , name: "Rare Beauty Blush", description: " lightweight liquid formula blends and builds effortlessly for a soft flush of color. ,shade grace", price: 1400, image: "/images/img2.png" },
        { id: 3 , name: "Tarte Shape Tape Concelar", description: "s infused with licorice root to brighten the look of dark circles.,shade fair,", price: 1200, image: "/images/img3.png" },
        { id: 4 , name: "Lancome Mascara", description: "waterproof mascara,An iconic mascara that creates clean and defined, natural-looking lashes. A great addition to every makeup bag and professional makeup kit", price: 1400, image: "/images/img4.png" },
        { id: 5 , name: "Lifter Gloss Maybelline", description: "Its breakthrough formula with Hyaluronic Acid visibly smooths lip surface and enhances lip contour with high shine for hydrated, fuller-looking lips. No Filler.", price: 390, image: "/images/img5.png" },
        {id: 6 , name: "Super Stay lipstick", description: "The formula is long-lasting and gives a flawless matte finish in 10 super-saturated shades ranging from classic Red liquid lipstick to nude and bold bright lipstick shades.,shade 25", price: 450, image: "/images/img6.png" },
        {id: 7 , name:"Charlotte Tilbury Magic Serum" ,description:" A Vitamin C and Polyglutamic Acid anti-aging serum that reduces appearance of dark spots, fine lines and wrinkles, visibly brightens, and plumps skin for flawless makeup application." ,price:1600 ,image:"/images/skincare7.png" },        
        {id: 8 , name:"Mac Compact Powder" ,description:"A one-step powder and foundation that gives skin a smooth, flawless, all-matte finish with medium to full coverage. Long-wearing, velvety texture allows skin to breathe.",price: 1500,image:"/images/img7.png"},    
        {id: 9 ,name:"Laneige Sleeping Mask" ,description:"The Cica Sleeping Mask is a rich cream texture that helps soothe & nourish. Water Sleeping Mask is a light gel cream that helps boost hydration and radiance",price: 1200 ,image:"/images/skincare1.png" },    
        {id: 10 ,name:"The Ordinary Matrixyl* 10% + HA" ,description:"Matrixyl 10% + HA offers an advanced formula that targets fine lines and wrinkles by promoting firmer, plumper skin. With two generations of MatrixylTM and hyaluronic acid, this lightweight serum improves the appearance of facial areas .",price: 1000,image:"/images/skincare2.png" },    
        {id: 11 ,name:"E.L.F. Power Grip Primer" ,description:"grabs hold of your makeup all day long, while giving skin a soft-focus effect for a smooth complexion. The formula is enriched with beneficial ingredient Hyaluronic Acid to moisturize, prep, and give skin a soft-focus.",price:1250 ,image:"/images/MK1.jpg" }, 
        {id: 12 ,name:"Glossier Balm Doctom And Skin Salve" ,description: "ULTRA MOISTURIZING: Glossier Balm Dotcom is a highly moisturizing lip balm that provides intense hydration to keep your lips smooth and well-nourished. ANTIOXIDANT-RICH FORMULA: This lip balm and skin salve contains antioxidants.",price:800 ,image:"/images/skincare5.png" },    
        /*{id:13 ,name:"Mini Grape Water Mositurizing Face Mist" ,description:" An antioxidant-rich, vegan face mist that uses 100 percent grape water to deliver intense hydration, reduce redness and soothe sensitive skin . Highlighted Ingredients: - 100 percent Grape Water: Moisturizes, soothes, and acts as an antioxidant.",price:1200 ,image:"/images/skincare6.png"},    
        {id:14 ,name:"Charlotte Tilbury Magic Serum" ,description:" A Vitamin C and Polyglutamic Acid anti-aging serum that reduces appearance of dark spots, fine lines and wrinkles, visibly brightens, and plumps skin for flawless makeup application." ,price:1600 ,image:"/images/skincare7.png" },    
        {id:15 ,name:"St Barts Ouai Cleaning Scalp & Body Sugar Scrub" ,description:"Cleansing sugar scrub that efoliates and nourishes the scalp and body, in OUAI's new tropical scent. A skincare-inspired serum to balance and hydrate your scalp to help create an ideal environment for thicker, fuller hair.",price:700 ,image:"/images/skincare8.png" },    
        {id:16 ,name:"Laneige Glowy Makeup Serum" ,description:" A lightweight, hydrating serum that keeps oil in check for visibly smoother skin and longer-lasting makeup wear. Highlighted Ingredients: - Diamond Mineral Powder: Creates a visibly translucent glow and smooths skin's appearance. - Light Fit Prep Technology: Helps makeup last longer.",price:1700 ,image:"/images/skincare9.png" },    
        {id:17 ,name:"E.L.F. Power Grip Primer" ,description:"grabs hold of your makeup all day long, while giving skin a soft-focus effect for a smooth complexion. The formula is enriched with beneficial ingredient Hyaluronic Acid to moisturize, prep, and give skin a soft-focus, improving the look and feel of your skin.",price:1250 ,image:"/images/MK1.jpg" },    
        {id:18 ,name: "Anastasia Beverly Hills Dipbrow",description:"Color: Ash Brown Creamy, waterproof brow color ideal for defining and sculpting precise, smudge-free brows. Use with Brush #12 for a completely smooth, effortless application. Waterproof brow color ideal for sculpting, defining, and carving perfectly precise brows that won't fade",price: 850,image:"/images/mk2.jpg" },    
       // {id:19 ,name: "Glow Up Highlighter Palette",description:"With a full-size Beverly Hills, and Minis of Rodeo Drive, Blissful, and Star Island, your glow goals will hit ultralight with these smooth, beaming, and shook-inducing highlighters. Hit pan? Refill or remix the shades in this magnetic palette that is perfect for travel and has a full-sized mirror.",price:1500,image:"/images/mk3.jpg"},    */
     
    
    ]; // add product details 

    let array = [];
    if (localStorage.getItem('newproducts') != null) {
        array = JSON.parse(localStorage.getItem("newproducts"));
    } else {
        array = products;
        localStorage.setItem("currentproducts", JSON.stringify(array));
    }


    

    const table = document.createElement("table"); 
    let productrow;

    array.forEach(function (product, i) {
        // create row in table
        if (i % 3 === 0) {
            productrow = document.createElement('tr');
        }

        // create td 
        var producttd = document.createElement('td');

        // create an image element
        var productimg = document.createElement('img');
        productimg.setAttribute("src", product.image);
        productimg.setAttribute("width", "50");
        productimg.setAttribute("height", "100");

        // create a description element
        var productdescription = document.createElement('p');
        productdescription.innerText = product.name ;

        // create a price element
        var productprice = document.createElement("p");
        productprice.innerText = 'price:$' + product.price;





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
        AddToCart(product);
    });

    });

    // append table in body
    document.body.appendChild(table);


// call addtocart function
    
    
  

}); // end of load



    function AddToCart(products) {
        // put current product within array
        let productdetails = [products];
    
        // store array in local storage, replace array for each new product
        localStorage.setItem('productdetails', JSON.stringify(productdetails));
        window.location.href = 'productpage.html';
    }
