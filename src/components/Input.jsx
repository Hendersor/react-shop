import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./../styles/Input.scss";

const Input = ({ searchProduct, setSearchProduct }) => {
  const lookforProduct = (event) => {
    setSearchProduct(event.target.value);
  };
  return (
    <div className="inputContainer">
      <figure>
        <IoSearchOutline />
      </figure>
      <input
        onChange={lookforProduct}
        type="text"
        placeholder="Search product"
      />
    </div>
  );
};

export default Input;
