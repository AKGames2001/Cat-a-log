import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import ProductRoutes from "./components/ProductPage/ProductRoutes";
import "./resources/css/common.css";

function App() {
  const [apiData, setApiData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data.products);
        setIsLoading(false);
      });
  };

  function searchItem(keyword) {
    let word = keyword;
    const results = apiData.filter((product) => {
      return product.title.toLowerCase().includes(word.toLowerCase());
    });
    console.log(results);
    setApiData(results);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 850;
        if (ismobile !== isMobile) {
          setIsMobile(ismobile);
        }
      },
      false
    );
  }, [isMobile]);

  return isLoading ? (
    <></>
  ) : (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                apiData={apiData}
                isMobile={isMobile}
                searchItem={searchItem}
              />
            }
          ></Route>
          <Route
            path="/product"
            element={
              <Product
                apiData={apiData}
                isMobile={isMobile}
                searchItem={searchItem}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <About
                apiData={apiData}
                isMobile={isMobile}
                searchItem={searchItem}
              />
            }
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductRoutes apiData={apiData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
