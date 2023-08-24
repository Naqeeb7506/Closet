let getcrtvalue = () => {
  let cartvalue = document.querySelector(".cartvalue");
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"));

  cartvalue.innerText = `${cartproducts.length}`;
};

getcrtvalue();

let getwvalue = () => {
  let wishvalue = document.querySelector(".wishvalue");

  let wishProducts = JSON.parse(localStorage.getItem("wishproducts"));

  wishvalue.innerText = `${wishProducts.length}`;
};

getwvalue();

let search = () => {
  let search = document.getElementById("search").value.toUpperCase();
  let product_card = document.querySelector(".product_card");
  let carditem = document.querySelectorAll(".card-item");
  let pname = product_card.getElementsByTagName("p");

  //   console.log(search);
  //   console.log(product_card);
  //   console.log(carditem);
  //   console.log(pname);

  for (let i = 0; i < pname.length; i++) {
    let match = carditem[i].getElementsByTagName("p")[0];
    // console.log(match);

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(search) > -1) {
        carditem[i].style.display = "";
      } else {
        carditem[i].style.display = "none";
      }
    }
  }
};
