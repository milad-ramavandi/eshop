import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
  totalCount: 0,
  totalCountForItem: 0,
  totalPrice: 0,
  totalPriceWithDiscount: 0,
  totalDiscountPercent: 0,
  totalPriceWithoutDiscount: 0,
};
const calculateTotals = (state) => {
  state.totalCount = 0;
  state.totalCountForItem = 0;
  state.totalPrice = 0;
  state.totalPriceWithDiscount = 0;
  state.totalPriceWithoutDiscount = 0;
  state.items.map((item) => {
    state.totalCount += item.count;
    state.totalCountForItem = item.count;
    state.totalPrice +=
      item.priceWithDiscount === 0
        ? item.count * item.price
        : item.count * item.priceWithDiscount;
    state.totalPriceWithoutDiscount += item.price * item.count;
    state.totalPriceWithDiscount =
      state.totalPriceWithoutDiscount - state.totalPrice;
    state.totalDiscountPercent =
      (state.totalPriceWithDiscount / state.totalPriceWithoutDiscount) * 100;
  });
  return state;
};
export const ShoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
      return calculateTotals(state);
    },
    removeItem: (state, action) => {
      state = {
        items: state.items.filter((item) => item.id !== action.payload),
      };
      return calculateTotals(state);
    },
    increaseCountItem: (state, action) => {
      state.items.filter((item) => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count += 1) };
        }
      });
      return calculateTotals(state);
    },
    decreaseCountItem: (state, action) => {
      state.items.filter((item) => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count -= 1) };
        }
      });
      return calculateTotals(state);
    },
    deleteItems: (state) => {
      state.items = [];
      return calculateTotals(state);
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseCountItem,
  decreaseCountItem,
  deleteItems,
} = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
