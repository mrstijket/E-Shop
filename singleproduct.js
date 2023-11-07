import products from "./products.js";

let productNumber = localStorage.getItem("productNumber");
let singleproductHTML = '';

products.forEach((product) => {
  if (product.id == productNumber) {
    singleproductHTML += `
    <div class="single-pro-image">
      <img src="${product.image}" width="100%" id="mainImg">
      <div class="small-img-group">
          <div class="small-img-col">
              <img src="${product.image}" width="100%" class="smallImg">
          </div>
          <div class="small-img-col">
              <img src="${product.image}" width="100%" class="smallImg">
          </div>
          <div class="small-img-col">
              <img src="${product.image}" width="100%" class="smallImg">
          </div>
          <div class="small-img-col">
              <img src="${product.image}" width="100%" class="smallImg">
          </div>
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
  }
});

document.querySelector('.single-product').innerHTML = singleproductHTML;