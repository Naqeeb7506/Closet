// get cart value
let GetcartValue = () => {
  let cartvalue = document.querySelector(".cartvalue");
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"));

  cartvalue.innerText = `${cartproducts.length}`;
};

GetcartValue();

let wish_container = document.getElementById("wish_container");

let getproducts = () => {
  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));
  let wishstring = "";

  if (wishProducts) {
    wishProducts.map((item, index) => {
      return (wishstring += `
      <div class="card-item">
            <div class="card-img">
              <img src="${item.image}" alt="" />
            </div>
            <div class="card-text">
              <p class="fs-4 line-clamp">${item.name}</p>
              <p>Rs.<b>${item.price}</b></p>
              <div class="buttons">
                <button class="add" onclick="addTocart(${JSON.stringify(item)
                  .split('"')
                  .join("&quot;")})">Add to cart</button>
                <button class="deletebtn" onclick="deleteproduct(${index})"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>
      `);
    });

    wish_container.innerHTML = wishstring;
  }
};
getproducts();

// wishlist value
let getwishvalue = () => {
  let wish_value = document.getElementById("wish_value");
  let wishvalue = document.querySelector(".wishvalue");

  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));
  wish_value.innerText = `${wishProducts.length}`;
  wishvalue.innerText = `${wishProducts.length}`;
};

getwishvalue();

// delete products from wishlist
let deleteproduct = (id) => {
  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));

  let filtered = wishProducts.filter((item, index) => {
    return index !== id;
  });
  localStorage.setItem("wishproducts", JSON.stringify(filtered));
  console.log(wishProducts);
  getproducts();
  getwishvalue();
};

// let deletebtn = document.querySelectorAll(".deletebtn");
// console.log(deletebtn);

// deletebtn.forEach((item) => {
//   item.addEventListener("click", deleteproduct());
// });

// add to cart
let c_products = [];
let addTocart = (item) => {
  let cartProducts = JSON.parse(localStorage.getItem("cartproducts"));
  if (!cartProducts) {
    cartProducts = [];
  }
  c_products = cartProducts;
  c_products.push(item);
  localStorage.setItem("cartproducts", JSON.stringify(c_products));
  window.location.reload();
};
