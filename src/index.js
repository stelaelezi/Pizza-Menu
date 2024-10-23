import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pizza from "./components/pizza";
import Menu from "./components/menu";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
