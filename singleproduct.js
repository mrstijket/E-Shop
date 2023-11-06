import products from "./products.js";
import detail from ".shop.html";

console.log(detail());

let singleproductHTML = '';

products.forEach((product) => {
  singleproductHTML += `
    <div class="pro">
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
      <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
    </div>
  `;
});

document.querySelector('.pro-container').innerHTML = singleproductHTML;