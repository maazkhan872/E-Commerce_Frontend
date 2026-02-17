// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-container");

const totalDiv = document.getElementById("total");

// DISPLAY CART

function displayCart(){

container.innerHTML = "";

let total = 0;

cart.forEach((item, index)=>{


// set quantity

if(item.quantity == null || item.quantity == undefined){

item.quantity = 1;

}

// Convert price into numbere

let price = Number(item.price);

// total calculate

total += price * item.quantity;

container.innerHTML += `

<div class="cart-item">

<img src="${item.image}" width="80">

<h4>${item.title}</h4>

<p>$${price}</p>

<button onclick="decrease(${index})">-</button>

<span>${item.quantity}</span>

<button onclick="increase(${index})">+</button>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

// total display

totalDiv.innerHTML = "Total: $" + total.toFixed(2);

// save updated cart

localStorage.setItem("cart", JSON.stringify(cart));

}

// INCREASE QUANTITY

function increase(index){

cart[index].quantity++;

displayCart();

}

// DECREASE QUANTITY

function decrease(index){

if(cart[index].quantity > 1){

cart[index].quantity--;

}

displayCart();

}

// REMOVE ITEM

function removeItem(index){

cart.splice(index, 1);

displayCart();

}

// CHECKOUT

function checkout(){

alert("Order Placed Successfully!");

localStorage.removeItem("cart");

window.location.href = "success.html";

}

// INITIAL LOAD

displayCart();
