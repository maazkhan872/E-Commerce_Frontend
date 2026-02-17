const API_URL = "https://fakestoreapi.com/products";

let allProducts = [];

/* CART COUNT  */

function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = cart.reduce((total,item)=> total + item.quantity,0);

let cartCount = document.getElementById("cart-count");

if(cartCount){

cartCount.innerText = count;

}

}

updateCartCount();

/* LOAD PRODUCTS  */

if (document.getElementById("products")) {

fetch(API_URL)

.then(res => res.json())

.then(data => {

allProducts = data;

displayProducts(data);

})

.catch(error => console.log(error));

}

/* DISPLAY PRODUCTS */

function displayProducts(products) {

const container = document.getElementById("products");

container.innerHTML = "";

products.forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<img src="${product.image}" height="150">

<h4>${product.title}</h4>

<p>$${product.price}</p>

<button onclick="openProduct(${product.id})">

View Details

</button>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

`;

container.appendChild(card);

});

}

/* FILTER */

function filterProducts(category){

if(category === "all"){

displayProducts(allProducts);

}

else{

let filtered = allProducts.filter(

p => p.category === category

);

displayProducts(filtered);

}

}
/* SEARCH */

function searchProducts(){

let value = document

.getElementById("searchInput")

.value

.toLowerCase();

let filtered = allProducts.filter(product =>

product.title.toLowerCase().includes(value)

);

displayProducts(filtered);

}

/*  ADD TO CART  */

function addToCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let product = allProducts.find(p => p.id === id);

let exist = cart.find(item => item.id === id);


if(exist){

exist.quantity++;

}

else{

product.quantity = 1;

cart.push(product);

}

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert("Product added to cart");

}

/* OPEN PRODUCT */

function openProduct(id){

window.location.href = `product.html?id=${id}`;

}

/* PRODUCT DETAIL */

if(document.getElementById("product-detail")){

let params = new URLSearchParams(window.location.search);

let id = params.get("id");

fetch(`${API_URL}/${id}`)

.then(res=>res.json())

.then(product=>{

document.getElementById("product-detail").innerHTML = `

<img src="${product.image}" height="200">

<h2>${product.title}</h2>

<h3>$${product.price}</h3>

<p>${product.description}</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

`;

});

}

function openCart(){

window.location.href="cart.html";

}
