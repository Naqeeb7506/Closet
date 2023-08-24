let GetCartValue = () => {
  let cartvalue = document.querySelector(".cartvalue");
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"));

  cartvalue.innerText = `${cartproducts.length}`;
};

GetCartValue();

let GetWishValue = () => {
  let wishvalue = document.querySelector(".wishvalue");

  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));

  wishvalue.innerText = `${wishProducts.length}`;
};

GetWishValue();
