import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ element }) => {
  const { name, brand, price, img } = element;
  //   console.log(element);
  return (
    <>
      <Wrapper>
        <img src={img} alt="product" />
        <div className="des">
          <span>{brand}</span>
          <h5>{name}</h5>
          <div className="star">
            <FaStar />
          </div>
          <h4>${price}</h4>
          <NavLink to="/" className="cart">
            <FaShoppingCart className="cart_icon" />
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 310px;
  height: 350px;
  border: 1px solid black;
  padding: 0px 0px;
  border-radius: 12px;
  margin: 25px 25px;
  box-shadow: 11px 10px 7px #9e9e9e;
  cursor: pointer;
  transition: 1s;

  &&:hover {
    box-shadow: 11px 10px 7px #181515;
  }

  img {
    width: 100%;
    height: 250px;
    padding: 10px 36px;
    border-radius: 12px;
  }

  .des {
    text-align: start;
    padding: 0px 4px;

    span {
      font-size: 20px;
      color: #7f7070;
    }

    h5 {
      font-size: 15px;
      color: black;
    }
  }

  h4 {
    font-size: 18px;
    display: inline-block;
    color: #217973;
    padding: 5px 5px;
  }

  .star {
    color: rgb(239, 209, 35);
    font-size: 18px;
    padding: 2px 2px;
  }

  .cart {
    position: relative;
    left: 230px;
    bottom: 5px;

    .cart_icon {
      color: crimson;
    }
  }
`;
export default Product;
