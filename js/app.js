let products = [
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
  {
    image: "/products/s2.webp",
    name: "Denim Jacket",
    price: "5,000",
  },
  {
    image: "/products/t1.jpeg",
    name: "Plain Blue T-Shirt",
    price: "600",
  },
  {
    image: "/products/j2.jpg",
    name: "Dark Grey Jeans",
    price: "6,000",
  },
  {
    image: "/products/w1.jpg",
    name: "Quartz Watch",
    price: "25,000",
  },
  {
    image: "/products/sh2.jpeg",
    name: "Nike Sneakers",
    price: "80,000",
  },
  {
    image: "/products/s3.webp",
    name: "Black Shirt",
    price: "800",
  },
  {
    image: "/products/t2.webp",
    name: "Full Sleeves Blue T-Shirt",
    price: "2,000",
  },
  {
    image: "/products/w2.jpg",
    name: "Rolex Watch",
    price: "1,20,000",
  },
  {
    image: "/products/j3.jpg",
    name: "Joggers Jeans",
    price: "7,200",
  },
  {
    image: "/products/sh3.webp",
    name: "Nike Air Jordans Sneakers",
    price: "1,50,000",
  },
  {
    image: "/products/t3.jpg",
    name: "Full Sleeves Black T-Shirt",
    price: "1,000",
  },
  {
    image: "/products/j4.jpg",
    name: "Plain Blue Jeans",
    price: "2,200",
  },
  {
    image: "/products/w4.jpg",
    name: "Audemars Piguet Watch",
    price: "2,00,000",
  },
  {
    image: "/products/sh4.webp",
    name: "Nike Air Sneakers",
    price: "1,22,000",
  },
  {
    image: "/products/t4.webp",
    name: "Addidas T-Shirt",
    price: "5,000",
  },
  {
    image: "/products/t5.jpg",
    name: "Addidas T-Shirt",
    price: "5,500",
  },
  {
    image: "/products/sh5.webp",
    name: "Nike Air Sneakers",
    price: "1,50,500",
  },
];

let product_card = document.querySelector(".product_card");

let emptyString = "";

let renderProducts = () => {
  products.map((item, index) => {
    return (emptyString += `
        <div class="card-item">
        <div class="card-img">
        <img src="${item.image}" alt="" />
        </div>
        <div class="card-text">
        <p class="fs-4 line-clamp">${item.name}</p>
        <p>Rs. <b>${item.price}</b></p>
        <div class="buttons">
        <button class="add" onclick="addtocart(${JSON.stringify(item)
          .split('"')
          .join("&quot;")})">Add to cart</button>
        <button class="like" onclick="addtowish(${JSON.stringify(item)
          .split('"')
          .join("&quot;")})"><i class="fa-solid fa-heart"></i></button>
        </div>
        </div>
        </div>
        `);
  });

  product_card.innerHTML = emptyString;
};

renderProducts();

let cart_products = [];
let addtocart = (item) => {
  let cartProducts = JSON.parse(localStorage.getItem("cartproducts"));
  if (!cartProducts) {
    cartProducts = [];
  }
  cart_products = cartProducts;
  cart_products.push(item);
  localStorage.setItem("cartproducts", JSON.stringify(cart_products));

  window.location.reload();
};

let wish_products = [];
let addtowish = (item) => {
  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));
  if (!wishProducts) {
    wishProducts = [];
  }
  wish_products = wishProducts;
  wish_products.push(item);
  localStorage.setItem("wishproducts", JSON.stringify(wish_products));

  window.location.reload();
};
