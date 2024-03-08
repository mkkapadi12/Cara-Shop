import React from "react";
import styled from "styled-components";
import { useProductContext } from "../Context/ProductContext";
import Product from "./Product";

const ProductSecion = () => {
  const { product } = useProductContext();
  //   console.log("product :", product);
  return (
    <Wrapper className="container">
      {product.map((ele, index) => {
        return <Product element={ele} key={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export default ProductSecion;
