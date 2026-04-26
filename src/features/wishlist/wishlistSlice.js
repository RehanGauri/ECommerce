import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
  const data = localStorage.getItem("wishlist");
  return data ? JSON.parse(data) : [];
};

const initialState = {
  wishlistItems: loadWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const item = action.payload;

      const exists = state.wishlistItems.find((i) => i.id === item.id);
      if (exists) {
        state.wishlistItems = state.wishlistItems.filter(
          (i) => i.id !== item.id,
        );
      } else {
        state.wishlistItems.push(item);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
