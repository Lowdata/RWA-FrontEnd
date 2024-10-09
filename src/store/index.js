import { configureStore } from "@reduxjs/toolkit";
import earningsReducer from "./earningSlice";
import authReducer from "./authSlice";
import adminReducer from "./adminSlice";
import userReducer from "./editSlice";
import paymentReducer from "./paymentSlice"
import {persistStore, persistReducer} from "redux-persist";
import businessReducer from "./businessSlice";

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const earningsPersistConfig = {
  key: "earnings",
  storage,
  whitelist: [
    "rank",
    "totalEarnings",
    "referralEarnings",
    "matrixEarnings",
    "nativeBnbBalance",
    "usdtBalance ",
    "rwaUsdBalance ",
    "rwaTokenBalance ",
  ],
};

const paymentPersistConfig = {
  key: "payment",
  storage,
};



const adminPersistConfig = {
  key: "admin",
  storage,
  whitelist: ["users", "sourcingPartners", "earningsDetails"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: [
    "isLoggedIn",
    "email",
    "userName",
    "role",
    "publicKey",
    "privateKey",
    "approval",
    "userId",
  ],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);
const persistedEarningsReducer = persistReducer(
  earningsPersistConfig,
  earningsReducer
);
const persistedPaymentReducer = persistReducer(
  paymentPersistConfig,
  paymentReducer
);

  

const store = configureStore({
  reducer: {
    admin: persistedAdminReducer,
    auth: persistedAuthReducer,
    earrnings: persistedEarningsReducer,
    user: userReducer,
    payment: persistedPaymentReducer,
    business: businessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

export default store;

