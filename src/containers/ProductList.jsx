import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import "./../styles/Input.scss";
import useGetProducts from "../hooks/useGetProducts";
import Input from "../components/Input";
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
    console.log(response.data);
  }, []);

  let searchedProducts = [];
  if (!searchProducts.length >= 1) {
    searchedProducts = products;
  } else {
    searchedProducts = products.filter((product) => {
      const nameText = product.title.toLowerCase();
      const productSearch = searchProducts.toLowerCase();
      return nameText.includes(productSearch);
    });
  }

  return (
    <section className="main-container">
      <Input
        products={products}
        setProducts={setProducts}
        setSearchProduct={setSearchProducts}
      />
      <div className="ProductList">
        {searchedProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
