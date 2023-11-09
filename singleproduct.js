import products from "./products.js";

let productNumber = localStorage.getItem("productNumber");
let singleproductHTML = '';
let smallImgHTML = '';

products.forEach((product) => {
  if (product.id == productNumber) {
    singleproductHTML += `
    <div class="single-pro-image">
      <img src="${product.image[0]}" width="100%" id="mainImg">
      <div class="small-img-group">
      </div>
    </div>
    <div class="single-pro-details">
      <h4>${product.name}</h4>
      <select>
        <option value="" disabled selected hidden>Select Size</option>
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
      </select>
      <input type="number" value="1">
      <h2>${(product.priceCents / 100).toFixed(2)} ₺</h2>
      <button class="normal">Sepete Ekle</button>
      <h4>Ürün Detayları</h4>
      <span>
        Kumaş: (Düz): %100 pamuk. Melanj: %50-100 pamuk/%0-50 polyester.<br>
        Makinede yıkanabilir.<br>
        Türkiye'de üretilmiştir.<br>
        Not: Malzeme yüzdelerinde fabrikaya bağlı olarak küçük değişiklikler olabilir. Gerçek içerik için
        etiketi kontrol et.<br>
        Gösterilen Renk: Çok Renkli<br>
        Stil: BV6169-063<br>
        Menşe Ülke/Bölge: Antalya,Türkiye
      </span>
    </div>
  `;

    for (let i = 0; i < product.image.length; i++) {
      smallImgHTML += `
        <div class="small-img-col">
          <img src="${product.image[i]}" width="100%" class="smallImg">
        </div>`;
    }
  }
});

document.querySelector('.single-product').innerHTML = singleproductHTML;
document.querySelector('.small-img-group').innerHTML = smallImgHTML;

let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smallImg");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    mainImg.src = smallImg[i].src;
  }
}


function contains(a, obj) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

let suggestHTML = '';
let usedSuggestionNumbers = [];
for (let suggestionCount = 1; suggestionCount < products.length; suggestionCount++) {
  if (suggestionCount <= 4) {
    let suggestion = products[Math.floor(Math.random() * products.length)];
    if (contains(usedSuggestionNumbers, suggestion) || suggestion.id == productNumber) {
      suggestionCount -= 1;
    } else {
      usedSuggestionNumbers[suggestionCount] = suggestion;
      suggestHTML += `
        <div class="pro" onclick="window.location.href='singleproduct.html'; localStorage.setItem('productNumber', ${suggestion.id});">
          <img src="${suggestion.image[0]}">
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
  if (document.querySelector('.pro-suggestion')) {
    document.querySelector('.pro-suggestion').innerHTML = suggestHTML;
  }
}