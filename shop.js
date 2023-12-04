import products from "./products.js";

let base = document.getElementById("product1");

let pageNumber = localStorage.getItem("pageNumber");

function refreshPage() {
  if (pageNumber == null) {
    base.innerHTML = `<div class="pro-container">
  </div>`;
  }
  if (pageNumber == 1) {
    base.innerHTML = `<div class="pro-container">
  </div>`;
  } else if (pageNumber == 2) {
    base.innerHTML = `<div class="pro-new">
  </div>`;
  } else {
    console.log('problems accured');
  }
  console.log(pageNumber);
}
refreshPage();

let pageHTML = '';
if (products.length > 8) {
  pageHTML = `<button onclick="window.location.href='shop.html'; localStorage.setItem('pageNumber', 1);">1</button>
     <button onclick="window.location.href='shop.html'; localStorage.setItem('pageNumber', 2);">2</button>`;
} else if (products.length > 16) {
  pageHTML = `<button onclick="window.location.href='shop.html'; localStorage.setItem('pageNumber', 1);">1</button>
     <button onclick="window.location.href='shop.html'; localStorage.setItem('pageNumber', 2);">2</button>
     <button href="#"><i class="fal fa-long-arrow-alt-right"></i></button>`;
}
if (document.querySelector('.pagination')) {
  document.querySelector('.pagination').innerHTML = pageHTML;
}