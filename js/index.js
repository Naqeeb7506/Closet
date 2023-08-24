let getCartValue = () => {
  let cartvalue = document.querySelector(".cartvalue");
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"));

  cartvalue.innerText = `${cartproducts.length}`;
};

getCartValue();

let getWishValue = () => {
  let wishvalue = document.querySelector(".wishvalue");

  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));
  wishvalue.innerText = `${wishProducts.length}`;
};

getWishValue();

// let add = document.querySelectorAll(".add");
// let carditem = document.querySelectorAll(".card-item");
// console.log(carditem);

// add.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(carditem);
//   });
// });

let home_products = [
  {
    image: "/products/item1.jpeg",
    name: "Trackpant",
    price: "400",
  },
  {
    image: "/products/s1.jpg",
    name: "Shirt",
    price: "600",
  },
  {
    image: "/products/j1.webp",
    name: "Regular Fit Jeans",
    price: "1,200",
  },
  {
    image: "/products/sh1.jpeg",
    name: "Nike Zoomx Sneakers",
    price: "30,000",
  },
];

let card_container = document.getElementById("card_container");

let string = "";

home_products.map((item) => {
  return (string += `
  <div class="card-item">
            <div class="card-img">
              <img src="${item.image}" alt="" />
            </div>
            <div class="card-text">
              <p class="fs-4">${item.name}</p>
              <p>Rs.<b>${item.price}</b></p>
              <div class="buttons">
                <button class="add" onclick="AddToCart(${JSON.stringify(item)
                  .split('"')
                  .join("&quot;")})">Add to cart</button>
                <button class="like" onclick="AddToWish(${JSON.stringify(item)
                  .split('"')
                  .join("&quot;")})"><i class="fa-solid fa-heart"></i></button>
              </div>
            </div>
          </div>
  `);
});

card_container.innerHTML = string;

// add to cart
let homeproducts = [];
let AddToCart = (item) => {
  let products = JSON.parse(localStorage.getItem("cartproducts"));
  if (!products) {
    products = [];
  }
  home_products = products;
  home_products.push(item);
  localStorage.setItem("cartproducts", JSON.stringify(home_products));

  console.log(home_products);

  window.location.reload();
};

// add to wish
let wishprod = [];

let AddToWish = (item) => {
  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));
  if (!wishProducts) {
    wishProducts = [];
  }
  wishprod = wishProducts;
  wishprod.push(item);
  localStorage.setItem("wishproducts", JSON.stringify(wishprod));
  window.location.reload();
};
