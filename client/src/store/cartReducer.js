const fetchProductsCart = () => {
  return JSON.parse(localStorage.getItem("products_in_cart")) || [];
};

const initialState = {
  cart: fetchProductsCart()
};

const updateCartInLocalStorage = (cart) => {
  localStorage.setItem("products_in_cart", JSON.stringify(cart));
};

export const cartReducer = (state = initialState, action) => {
  const product = action.payload;
  let products = state.cart;
  let foundItemIndex = -1;
  switch (action.type) {
    case "ADD_IN_CART":
      foundItemIndex = products.findIndex(item => item.id === product.id);
      if (foundItemIndex > -1) products[foundItemIndex].count += 1;
      else products.push({ ...product, count: 1 });
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "DELETE_FROM_CART":
      products = products.filter(item => item.id !== action.payload.id);
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "DEC_PRODUCT_IN_CART":
      foundItemIndex = products.findIndex(item => item.id === product.id);
      if (foundItemIndex > -1) products[foundItemIndex].count -= 1;
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "EDIT_COUNT_IN_CART":
      foundItemIndex = products.findIndex(item => item.id === product.id);
      if (foundItemIndex > -1) products[foundItemIndex].count = product.count;
      updateCartInLocalStorage(products);
      return { ...state, cart: products };
    case "CLEAR_CART":
      updateCartInLocalStorage([]);
      return { ...state, cart: [] };
    default:
      return state;
  }
};
