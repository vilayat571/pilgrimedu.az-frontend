import ReactDOM from "react-dom/client";
import App from "./pages/Main/App.tsx";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import React from "react";
import { HelmetProvider } from "react-helmet-async";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
