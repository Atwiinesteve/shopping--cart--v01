(function() {


  // SELECT WEBSITE ELEMENTS.
  let addToCartBtns = document.querySelectorAll(".add--cart");
  const shoppingBagIcon = document.querySelector(".shopping--bag--img");
  const shoppingCart = document.querySelector(".cart");
  const closeShoppingCart = document.querySelector(".close--cart");


  // BUTTON ACTIONS.

  // DISPLAY ORDER CART.
  shoppingBagIcon.addEventListener("click", function() {
    shoppingCart.classList.add("active");
  })

  // CLOSE ORDER CART.
  closeShoppingCart.addEventListener("click", function() {
    shoppingCart.classList.remove("active");
  })

})();