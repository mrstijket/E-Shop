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

function contains(a, obj) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="pro" onclick="window.location.href='singleproduct.html'; localStorage.setItem('productNumber', ${product.id});">
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

if (document.querySelector('.pro-container')) {
  document.querySelector('.pro-container').innerHTML = productsHTML;
}

function suggestionFunc() {
  let suggestHTML = '';
  let usedSuggestionNumbers = [];
  for (let suggestionCount = 1; suggestionCount < products.length; suggestionCount++) {
    if (suggestionCount <= 4) {
      let suggestion = products[Math.floor(Math.random() * products.length)];
      if (contains(usedSuggestionNumbers, suggestion)) {
        //TODO
        console.log("Same Product suggested, return this code and resolve this!!");
      } else {
        usedSuggestionNumbers[suggestionCount] = suggestion;
        suggestHTML += `
    <div class="pro" onclick="window.location.href='singleproduct.html'; localStorage.setItem('productNumber', ${suggestion.id});">
      <img src="${suggestion.image}">
      <div class="des">
        <span>${suggestion.owner}</span>
        <h5>${suggestion.name}</h5>
        <div class="star"> 
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>${(suggestion.priceCents / 100).toFixed(2)} ₺</h4>
      </div>
      <button id="addCart" onclick="window.location.replace('singleproduct.html/detail/' + ${suggestion.id});">
      <!--<button id="addCart" onclick="detail(${suggestion.id})">-->
      <a><i class="fal fa-shopping-cart cart"></i></a></button>
    </div>
  `;
      }
    };
  }


  if (document.querySelector('.pro-suggestion')) {
    document.querySelector('.pro-suggestion').innerHTML = suggestHTML;
  }
}

suggestionFunc();