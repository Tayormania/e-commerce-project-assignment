document.getElementById("cart").style.display = 'none';
document.getElementById("homeButton").style.color = 'rgb(249, 194, 92) ';
document.getElementById("modalbody2").style.display = 'none';

document.getElementById("showcart").addEventListener("click", function () {
    document.getElementById("cart").style.display = 'block';
    showcart.style.display = "none";
    showcart2.style.display = "block";
  });
  
  document.getElementById("showcart2").addEventListener("click", function () {
    document.getElementById("cart").style.display = 'none';
    showcart2.style.display = "none";
    showcart.style.display = "block";
  });
  
  document.getElementById("shopSection").style.display = 'none';
  
  document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById("shopSection").style.display = 'none';
    document.getElementById("homeSection").style.display = 'block';
    document.getElementById("homeButton").style.color = 'rgb(249, 194, 92) ';
    document.getElementById("shopButton").style.color = 'white';


    
    
});

document.getElementById('shopButton').addEventListener('click', function() {
    document.getElementById("homeSection").style.display = 'none';
    document.getElementById("shopSection").style.display = 'block';
    document.getElementById("shopButton").style.color = 'rgb(249, 194, 92) ';
    document.getElementById("homeButton").style.color = 'white';



  });
  

  document.getElementById('signup').addEventListener('click', function() {
    document.getElementById("modalbody1").style.display = 'none';
    document.getElementById("modalbody2").style.display = 'block';

  });

  document.getElementById('signin').addEventListener('click', function() {
    document.getElementById("modalbody2").style.display = 'none';
    document.getElementById("modalbody1").style.display = 'block';

  });

    // Array of objects representing store items
    const items = [
        {
            itemName: "Apple i-watch",
            itemPrice: 19.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-6.jpg"
        },
        {
            itemName: "Sony camera",
            itemPrice: 39.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-1.jpg"
        },
        {
            itemName: "Drone",
            itemPrice: 49.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-5.jpg"
        },
        {
            itemName: "Lace female top",
            itemPrice: 19.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-7.jpg"
        },
        {
            itemName: "Sneakers",
            itemPrice: 49.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-4.jpg"
        },,
        {
            itemName: "T-Shirt",
            itemPrice: 49.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-2.jpg"
        },,
        {
            itemName: "Bed Lamp",
            itemPrice: 49.99,
            itemImage: "https://themewagon.github.io/multishop/img/product-3.jpg"
        },
    ];
    const cart = [];

    // Function to display items
    function displayItems() {
        const itemContainer = document.getElementById('itemContainer');
        items.forEach(item => {
            itemContainer.innerHTML += `
            <div class="col-lg-4 mt-5  mb-5 border shadow cards pb-1 shadow-sm">
             <div class="product-item bg-light mb-4">
                 <div class="product-img position-relative overflow-hidden">
                     <img class="img-fluid w-100" src=${item.itemImage} alt="">
                     <div class="product-action">
                         <a class="btn btn-outline-dark btn-square p-2 animate__swing animate__animated animate__infinite "  onclick="addToCart('${item.itemName}', ${item.itemPrice}, '${item.itemImage}')"><i class="fa fa-shopping-cart"></i></a>
                         <a class="btn btn-outline-dark btn-square p-2" ><i class="far fa-heart"></i></a>
                         <a class="btn btn-outline-dark btn-square p-2" ><i class="fa fa-sync-alt"></i></a>
                         <a class="btn btn-outline-dark btn-square p-2" ><i class="fa fa-search"></i></a>
                     </div>
                 </div>
                 <div class="text-center py-4">
                     <a class="h6 text-decoration-none text-truncate" href="">${item.itemName}</a>
                     <div class="d-flex align-items-center justify-content-center mt-2">
                         <h5>$${item.itemPrice}</h5><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                     </div>
                     <div class="d-flex align-items-center justify-content-center mb-1">
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small>(99)</small>
                     </div>
                 </div>
             </div>
         </div>
            `;
        });
    }
   
    // Function to add items to the cart
    function addToCart(name, price, image) {
        // Create an item object
        const item = {
            itemName: name,
            itemPrice: price,
            itemImage: image
        };
        
        // Add the item to the cart array
        cart.push(item);
        displayCart();
    }


    // Function to display items in the cart
    function displayCart() {
        const cartItemsContainer = document.getElementById('cartshow');
        cartItemsContainer.innerHTML = ''; // Clear previous cart items
        
        cart.forEach((item, index) => {
            cartItemsContainer.innerHTML += `
            <div class="item-card shadow-sm border row col-12 mt-1 bg-white">
            <div class="col-3 ps-3"><img width="95px" height="85px" src=${item.itemImage} alt=""></div>
            <div class="col-5 my-auto ps-4"><h6>${item.itemName}</h6>
              <small>$$${item.itemPrice}</small>
            </div>
            <div class="form-floating d-flex col-1 my-auto ms-3">
              <input type="number" name="" id="" class="form-control d-flex" value="1">
            </div>
            <div class="col-2 my-auto">
            <button class="btn ps-2 btn-sm" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash" style="color: #e01b24;"></i></button>
        </div>
                
            </div>
            `;
        });
    }
    function removeFromCart(index) {
        cart.splice(index, 1);
        displayCart(); 
    }
    // Call the function to display items
    displayItems();