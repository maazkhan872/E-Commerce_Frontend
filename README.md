# E-Commerce_Frontend
Interactive e-commerce web app with dynamic product listing, search, category filters, detailed product pages, shopping cart with real-time updates, localStorage integration, and secure checkout flow. Perfect for online stores, retail shopping, and seamless user shopping experience


## Features

- Dynamic product listing from API
- Search products by name
- Filter products by category (Men, Women, Electronics, Jewelry)
- Product detail page with image, description, and price
- Shopping cart with:
  - Add/Remove items
  - Increase/Decrease quantity
  - Real-time total calculation
  - Persistent cart data using localStorage
- Checkout process with order confirmation page
- Responsive layout suitable for desktop and mobile
- Simple and intuitive user interface

- ## Folder Structure

├─ index.html # Main product listing page
├─ cart.html # Shopping cart page
├─ product.html # Product detail page
├─ success.html # Order confirmation page
├─ style.css # Global CSS styling
├─ script.js # Frontend logic for cart, products, search, filters
└─ README.md # Project instructions and description

Technology Stack

HTML5 – Structure of pages

CSS3 – Styling and responsive design

JavaScript (ES6) – Dynamic functionality

localStorage – Persisting cart data

Fetch API – Fetch product data from server

FakeStore API – Demo product data

How It Works

Products are fetched dynamically from FakeStore API
.

Users can search and filter products by category.

Clicking “Add to Cart” saves products in localStorage.

The cart allows quantity adjustments, removal, and shows total price.

Clicking Checkout clears the cart and redirects to success.html.

Cart count updates automatically in the navbar.
