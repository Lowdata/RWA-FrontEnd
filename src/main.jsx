import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store, { persistor } from "./store"; // Import the store and persistor
import { CircularProgress } from "@mui/material";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
