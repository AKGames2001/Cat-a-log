import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductRoutes from "./components/ProductRoutes";
import "./resources/css/common.css";

function App() {
  const [apiData, setApiData] = useState([]);
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

  useEffect(() => {
    fetchUserData();
  }, []);

  return isLoading ? <></> : (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home apiData={apiData} />}></Route>
          <Route path="/product/:id" element={<ProductRoutes apiData={apiData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
