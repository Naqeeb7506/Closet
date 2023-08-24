let table_container = document.getElementById("table_container");

let renderCartProducts = () => {
  let cartProducts = JSON.parse(localStorage.getItem("cartproducts"));
  let cartString = "";

  if (cartProducts) {
    cartProducts.map((item, index) => {
      return (cartString += `
      <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td><img src="${item.image}" class="cart-image"/></td>
            <td>${item.price}</td>
            <td class="text-center">
            <button onclick="deleteitem(${index})" class="dltbtn"><i class="fa-solid fa-trash" style="color:red; cursor:pointer;" ></i></button>
            </td>
          </tr>
      `);
    });
    table_container.innerHTML = cartString;
  }
};

renderCartProducts();

let deleteitem = (id) => {
  let cartProducts = JSON.parse(localStorage.getItem("cartproducts"));

  let filtered = cartProducts.filter((item, index) => {
    return index !== id;
  });
  localStorage.setItem("cartproducts", JSON.stringify(filtered));
  renderCartProducts();
  getCartValue();
};

let getCartValue = () => {
  let cart_value = document.getElementById("cart_value");
  let cartvalue = document.querySelector(".cartvalue");

  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"));
  cart_value.innerText = `${cartproducts.length}`;
  cartvalue.innerText = `${cartproducts.length}`;
};

getCartValue();

let wishvalue = () => {
  let wishvalue = document.querySelector(".wishvalue");

  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));

  wishvalue.innerText = `${wishProducts.length}`;
};

wishvalue();
