import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import shoppingCartReducer from 'redux/features/ShoppingCartSlice'
import userReducer from 'redux/features/UserSlice'
const config = {
  key: "globalStorage",
  storage: localStorage,
};

const baseReducer = combineReducers({
  shoppingCartReducer,
  userReducer
})

const persistedReducer = persistReducer(config, baseReducer);

export const Store = configureStore({
  reducer: persistedReducer
})

export const persistedStore = persistStore(Store);