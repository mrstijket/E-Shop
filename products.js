const products = [{
  id: 1,
  owner: "BAW",
  image: [
    "img/product/p1_1.jpg",
    "img/product/p1_2.jpg",
    "img/product/p1_3.jpg",
    "img/product/p1_4.jpg"
  ],
  name: "Kalın Taşlı Alloy Bileklik",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 14999,
  keywords: [
    "kalın",
    "bileklik",
    "alloy"
  ],
  about: "Ürün boyutları; 17,5 cm. uzunluğunda, 12 mm. genişliğinde. 3,5 mm. kalınlığındadır. Ağırlık: 35 gr. Ürün alloy malzemedir. Zirkon taşlıdır. Klipsin yanında iki adet ekstra klips vardır. Bu klipsler ürünün daha sağlam birbirine kenetlenmesini sağlar. Alloy malzemeler kullanıma bağlı olarak kararma yapabilir.(su, ter, parfüm, krem gibi kimyevi maddeler kararma süresini hızlandırabilir)"
},
{
  id: 2,
  owner: "BAW",
  image: [
    "img/product/p2_1.jpg",
    "img/product/p2_2.jpg",
    "img/product/p2_3.jpg",
    "img/product/p2_4.jpg"
  ],
  name: "Su Yolu Renkli Baget Taşlı Bileklik",
  rating: {
    stars: 4,
    count: 17
  },
  priceCents: 11499,
  keywords: [
    "baget",
    "beyaz",
    "su yolu"
  ],
  about: "Ürüne gold plating kaplama yapılmıştır. Ürün boyutları; Özel ayarlı yapısı sayesinde bütün bileklere uyar. 6 x 2,5 mm. AAA kalite baget taşı bulunmaktadır. Anti alerjik. Ürün ağırlığı: 7,30 gr."
},
{
  id: 3,
  owner: "BAW",
  image: [
    "img/product/p3_1.jpg",
    "img/product/p3_2.jpg",
    "img/product/p3_3.jpg",
  ],
  name: "Su Yolu Zirkon Taşlı Bileklik",
  rating: {
    stars: 4,
    count: 45
  },
  priceCents: 8499,
  keywords: [
    "bileklik",
    "zirkon",
    "su yolu"
  ],
  about: "Ürün 1. sınıf zirkon taşlıdır. 24 ayar Beyaz Altın Kaplamadır. Ürün boyutları; 17-18 cm. arasında. Taş boyu: 4 mm. Yaklaşık ağırlık: 7 gr. Alloy malzemeler kullanıma bağlı olarak kararma yapabilir.(su, ter, parfüm, krem gibi kimyevi maddeler kararma süresini hızlandırabilir)"
},
{
  id: 4,
  owner: "BAW",
  image: [
    "img/product/p4_1.jpg",
    "img/product/p4_2.jpg",
    "img/product/p4_3.jpg",
  ],
  name: "Su Yolu Beyaz Baget Taşlı Bileklik",
  rating: {
    stars: 5,
    count: 24
  },
  priceCents: 10999,
  keywords: [
    "beyaz",
    "baget",
    "su yolu"
  ],
  about: "Su Yolu Baget Beyaz Taşlı Asansörlü Kadın Bileklik. Ürüne platin kaplama yapılmıştır. Ürün boyutları; Özel ayarlı yapısı sayesinde bütün bileklere uyar. 3,5 mm. x 2 mm. AAA kalite taşı bulunmaktadır. Anti alerjik. Ürün ağırlığı: 5 gr."
},
{
  id: 5,
  owner: "BAW",
  image: [
    "img/product/p5_1.jpg",
    "img/product/p5_2.jpg",
    "img/product/p5_3.jpg",
  ],
  name: "Tek Taşlı Rodyum Kaplama Bileklik",
  rating: {
    stars: 4,
    count: 11
  },
  priceCents: 5999,
  keywords: [
    "tek taş",
    "rodyum",
    "bileklik"
  ],
  about: "Ürün 1. sınıf AAA zirkon taşlıdır. Rodyum kaplamadır. Ürün boyutları; Taş genişlik: 1 cm. x 1 cm. Uzatmalıdır ve her türlü bileğe uyar."
},
{
  id: 6,
  owner: "BAW",
  image: [
    "img/product/p6_1.jpg",
    "img/product/p6_2.jpg",
    "img/product/p6_3.jpg",
    "img/product/p6_4.jpg",
  ],
  name: "Asansörlü Su Yolu Zirkon Bileklik",
  rating: {
    stars: 5,
    count: 6
  },
  priceCents: 9999,
  keywords: [
    "asansörlü",
    "zirkon",
    "su yolu"
  ],
  about: "Ürün platinium kaplamadır. Ürün boyutları; Asansarlü yapısı sayesinde her bileğe uyar. Yan Taş boyu: 4 mm. Yaklaşık ağırlık: 7,3 gr."
},
{
  id: 7,
  owner: "BAW",
  image: [
    "img/product/p7_1.jpg",
    "img/product/p7_2.jpg",
    "img/product/p7_3.jpg",
    "img/product/p7_4.jpg",
  ],
  name: "Altın Kaplı Swarovski Kare Taş Bileklik",
  rating: {
    stars: 4,
    count: 4
  },
  priceCents: 21999,
  keywords: [
    "altın",
    "swarovski",
    "kare taş"
  ],
  about: "Ürün Swarovski Taşlıdır. 24 ayar Beyaz Altın Kaplamadır. Ürün boyutları; 18 cm. Taş boyu: 5 mm. Yaklaşık ağırlık: 15 gr."
},
{
  id: 8,
  owner: "BAW",
  image: [
    "img/product/p8_1.jpg",
    "img/product/p8_2.jpg",
    "img/product/p8_3.jpg",
    "img/product/p8_4.jpg",
  ],
  name: "Kelepçe Dizayn Roma Rakamlı Bileklik",
  rating: {
    stars: 5,
    count: 9
  },
  priceCents: 3999,
  keywords: [
    "roma",
    "kelepçe",
    "rakam"
  ],
  about: "Üstün kalite metal kadın bileklik. Seçtiğiniz ürüne göre Gold, rose ve platinum kaplama yapılmıştır. Ürün boyutları; Soldan sağa iç çapı: 6 cm. Yukarıdan aşağı iç çapı: 5 cm. Ağırlık: 9 gr. Altı açık olması sayesinde her bileğe uyar."
},
{
  id: 9,
  owner: "BAW",
  image: [
    "img/product/p9_1.jpg",
    "img/product/p9_2.jpg",
    "img/product/p9_3.jpg"
  ],
  name: "Altın Kaplama Zirkon Taşlı Bileklik",
  rating: {
    stars: 5,
    count: 16
  },
  priceCents: 14999,
  keywords: [
    "altın",
    "zirkon",
    "bileklik"
  ],
  about: "Ürün 3 parça bileklikten oluşur. Zirkon Taşlıdır. Gold kaplamadır. Ürün boyutları; 17 ile 22 cm. arasında takabilirsiniz. Zincir genişlikleri: 1. zincir: 6 mm. 2. zincir: 8 mm. 3. zincir: 3 mm. Toplam yaklaşık ağırlık: 16 gr."
},
{
  id: 10,
  owner: "BAW",
  image: [
    "img/product/p10_1.jpg",
    "img/product/p10_2.jpg",
    "img/product/p10_3.jpg"
  ],
  name: "İsme Özel Çelik Künye Bileklik",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 11999,
  keywords: [
    "isme özel",
    "çelik",
    "künye"
  ],
  about: "Sarı, siyah olan ürün ip kaplamadır. Ürün boyutları; künye olan kısmı 1,9 cm. kalınlık: 2 mm. uzunluk: 15,5 - 18,5 cm. arasında takılabilme özelliği. Ağırlık: 3,5 gr. 316 L Stainless Steel Çelik Yapısına sahiptir. 316 L çelik çelik ürünlerin içinde en kalitelisidir. Çelik ürünler zaman içerisinde Kararmaz, Paslanmaz, Ezilmez, Bükülmez, Oksitlenmez. İsme Özel ürünlerde iade mümkün değildir. 2 iş günü içerisinde kargoya verilir. Satın aldığınız sayfada isim yazılacak yer yok ise ürünü satın aldıktan sonra mesaj ile hangi ismi yazdırmak istediğinizi yazmanız yeterlidir."
},
{
  id: 11,
  owner: "BAW",
  image: [
    "img/product/p11_1.jpg",
    "img/product/p11_2.jpg",
    "img/product/p11_3.jpg",
    "img/product/p11_4.jpg"
  ],
  name: "İsme Özel Düz Plaka Çelik Kolye",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 8999,
  keywords: [
    "isme özel",
    "düz plaka",
    "çelik"
  ],
  about: "Çelik üzeri seçtiğiniz renge göre siyah, gold, ip kaplamadır. Ürün boyutları; Kolye: 4 x 0,7 cm. Zinciri: 50 cm. uzunluğunda, 2 mm. kalınlığında. 316 L Stainless Steel Çelik Yapısına sahiptir. 316 L çelik çelik ürünlerin içinde en kalitelisidir. Çelik ürünler zaman içerisinde Kararmaz, Paslanmaz, Ezilmez, Bükülmez, Oksitlenmez. İsme Özel ürünlerde iade mümkün değildir. 2 iş günü içerisinde kargoya verilir. Satın aldığınız sayfada isim yazılacak yer yok ise ürünü satın aldıktan sonra mesaj ile hangi ismi yazdırmak istediğinizi yazmanız yeterlidir."
},
{
  id: 12,
  owner: "BAW",
  image: [
    "img/product/p12_1.jpg",
    "img/product/p12_2.jpg",
    "img/product/p12_3.jpg",
    "img/product/p12_4.jpg"
  ],
  name: "Kalbimin Meleği Kişiye Özel Harfli Gümüş Melek Kolye",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 22999,
  keywords: [
    "kişiye özel harfli",
    "gümüş",
    "kalbimin meleği"
  ],
  about: "Maden: Zinciri dahil 925 Ayar Gümüştür. İstediğiniz harfi seçebilirsiniz. Renk: rose, sarı, gümüş. Yaklaşık Ağırlık: 5 gr. Kolye boyutu: 2,5 cm. x 4 cm. Harf boyutu: 0,8 x 0,5 cm. Taşlar: 1. kalite Zirkon. Zincir: 40 cm. 5 cm. uzatmalı. toplamda 45 cm. Ürün sayfasında harf seçeneğini yazacağınız herhangi bir yer yok ise, mesaj atarak ne yazdırmak istediğinizi belirtebilir, mesaj atacak yer yok ise ürünü satın aldıktan sonra tarafınıza ulaşılıp harf hakkında bilgi istenecektir. İsme özel yapılan ürünlerde iade mümkün değildir."
},
{
  id: 13,
  owner: "BAW",
  image: [
    "img/product/p13_1.jpg",
    "img/product/p13_2.jpg",
    "img/product/p13_3.jpg",
    "img/product/p13_4.jpg"
  ],
  name: "Kanatlı Meleğim Harfli Kişiye Özel Gümüş Melek Kolye",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 20999,
  keywords: [
    "kişiye özel harfli",
    "gümüş",
    "kanatlı meleğim"
  ],
  about: "Maden: Zinciri dahil 925 Ayar Gümüş. Renk: rose, sarı, gümüş. Yaklaşık Ağırlık: 4 gr. Kolye boyutu: 2 cm. x 2,5 cm. Taşlar: 1. kalite Zirkon. Zincir: 40 cm. 5 cm. uzatmalı. toplamda 45 cm. Ürün sayfasında harf seçeneğini yazacağınız herhangi bir yer yok ise, mesaj atarak ne yazdırmak istediğinizi belirtebilir, mesaj atacak yer yok ise ürünü satın aldıktan sonra tarafınıza ulaşılıp harf hakkında bilgi istenecektir."
},
{
  id: 14,
  owner: "BAW",
  image: [
    "img/product/p14_1.jpg",
    "img/product/p14_2.jpg",
    "img/product/p14_3.jpg",
    "img/product/p14_4.jpg"
  ],
  name: "2 Mm. Çelik Ayarlanabilir Gri Kelebek Yüzük",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 6799,
  keywords: [
    "şort",
    "çizgili",
    "yaz"
  ],
  about: "2 mm. Çelik Ayarlanabilir Gri Kelebek Kadın Yüzük. Stainless Steel Çelik Yapısına sahiptir. Çelik ürünler zaman içerisinde Kararmaz, Paslanmaz, Ezilmez, Bükülmez, Oksitlenmez."
},
{
  id: 15,
  owner: "BAW",
  image: [
    "img/product/p15_1.jpg",
    "img/product/p15_2.jpg",
    "img/product/p15_3.jpg",
  ],
  name: "0.03 Carat Pırlanta Melek Kanadı Gümüş Kolye",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 47699,
  keywords: [
    "pırlanta",
    "gümüş",
    "melek kanadı"
  ],
  about: "Ürün özellikleri; 3,8 gr ağırlığında 925 ayar gümüş, 2,1 Carat. Topaz Taşı, 0,03 Carat. Pırlanta. Boyutları: 2,5 cm. - 1,0 cm. Gümüş Zincir uzunluğu 45 cm. Özel Lüx hediyelik kutu da gönderilecektir."
}, {
  id: 16,
  owner: "BAW",
  image: [
    "img/product/p16_1.jpg",
    "img/product/p16_2.jpg",
    "img/product/p16_3.jpg",
  ],
  name: "1.25 Carat Swarovski 14 Ayar Altın Tektaş Kolye",
  rating: {
    stars: 5,
    count: 10
  },
  priceCents: 284999,
  keywords: [
    "14 ayar",
    "altın",
    "tektaş"
  ],
  about: "Kolye Özellikleri; 14 ayar altıntır. Taşın olduğu kısım boyutu: 0,75 x 0,75 cm. Taş Carat: 1,25 Carat. Swarovski taşa sahiptir. Zincir özelliği: 14 Ayar Altındır. 42 cm. uzunluğu vardır. Zincir Yaklaşık ağırlık: 1 gr. Kolye ucu: 1 gr. Toplam: 2 gr. Resimde görünen Özel kutu ve paketinde gönderilecektir."
}];

export default products;