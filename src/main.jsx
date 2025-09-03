import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind CSS import
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store/store"; // make sure this path is correct
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="1023423865235-is4dicua7gq6r13ges0mm1rbd7rjf1p2.apps.googleusercontent.com">
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </GoogleOAuthProvider>
      </Provider>
    </React.StrictMode>
  );
}
