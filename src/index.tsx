import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './styles/index.css'
import reportWebVitals from "./reportWebVitals";
import { Provider as TribeProvider } from "@tribeplatform/react-sdk";

ReactDOM.render(
  <React.StrictMode>
    <TribeProvider
      config={{
        accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJqOElrU0E4UmYiLCJleHRlcm5hbEFjdG9ySWQiOiJBUFA6OkhyWkt5NnNKVUlCUiIsIm5ldHdvcmtJZCI6IjBFZERvYThlZ0giLCJ0b2tlblR5cGUiOiJMSU1JVEVEIiwiZW50aXR5SWQiOiIwRWREb2E4ZWdIIiwicGVybWlzc2lvbkNvbnRleHQiOiJORVRXT1JLIiwicGVybWlzc2lvbnMiOlsiKiJdLCJpYXQiOjE2NDkwMDU4NzAsImV4cCI6MTY1MTU5Nzg3MH0.Oe2mNp7m0XG5JQEUNmad1zUWi0AyAbVWKJdGOlnaAm8",
        baseUrl: "https://app.tribe.so/graphql",
        networkDomain: "testfor-tribe.tribeplatform.com",
      }}
    >
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </TribeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
