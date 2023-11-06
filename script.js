import products from "./products.js";

// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="pro" onclick="window.location.href='singleproduct.html'">
      <img src="${product.image}">
      <div class="des">
        <span>${product.owner}</span>
        <h5>${product.name}</h5>
        <div class="star"> 
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>${(product.priceCents / 100).toFixed(2)} ₺</h4>
      </div>
      <button id="addCart" onclick="window.location.replace('singleproduct.html/detail/' + ${product.id});">
      <!--<button id="addCart" onclick="detail(${product.id})">-->
      <a><i class="fal fa-shopping-cart cart"></i></a></button>
    </div>
  `;
});

document.querySelector('.pro-container').innerHTML = productsHTML;