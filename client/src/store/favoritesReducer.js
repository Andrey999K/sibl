const getProductsFavorites = () => {
  if (localStorage.getItem("products_in_favorites")) {
    return JSON.parse(localStorage.getItem("products_in_favorites"));
  }
  return false;
};

const initialState = {
  favorites: getProductsFavorites() || []
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_FAVORITES":
      if (localStorage.getItem("products_in_favorites")) {
        const massProduct = JSON.parse(localStorage.getItem("products_in_favorites"));
        massProduct.push(action.payload);
        localStorage.setItem("products_in_favorites", JSON.stringify(massProduct));
      } else localStorage.setItem("products_in_favorites", JSON.stringify([action.payload]));
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "DELETE_FROM_FAVORITES":
      if (localStorage.getItem("products_in_favorites")) {
        let massProducts = JSON.parse(localStorage.getItem("products_in_favorites"));
        massProducts = massProducts.filter(item => item.id !== action.payload.id);
        localStorage.setItem("products_in_favorites", JSON.stringify(massProducts));
      }
      return { ...state, favorites: [...state.favorites].filter(product => product.id !== action.payload.id) };
    case "CLEAR_FAVORITES":
      if (localStorage.getItem("products_in_favorites")) {
        localStorage.removeItem("products_in_favorites");
      }
      return { ...state, favorites: [] };
    default:
      return state;
  }
};
