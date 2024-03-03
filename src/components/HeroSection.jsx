import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <div class="hero-content">
          <h4>trand-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 70% off</p>

          <NavLink to="/shop">
            <button>Shop Now</button>
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 110vh;
  background-image: url("/images/hero4.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0% right 30%;

  .hero-content {
    position: absolute;
    top: 200px;
    left: 130px;
    height: 350px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h4 {
      font-size: 20px;
      padding: 4px 0px;
    }
    h1 {
      font-size: 46px;
      padding: 0px 0px;
      color: #088178;
    }
    p {
      font-size: 20px;
      padding: 12px 0px;
    }

    button {
      width: 230px;
      height: 50px;
      background: transparent;
      background-image: url("/images/button.png");
      border: none;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      color: #088178;
      font-size: 21px;
    }
  }

  @media (max-width: 998px) {
    height: 60vh;
    background-position: top 0% right 20%;

    .hero-content {
      width: 500px;
      height: 200px;
      padding: 0px 0px;
      position: relative;
      top: 190px;
      left: 12px;

      h4 {
        font-size: 25px;
      }
      h2 {
        font-size: 40px;
      }
      h1 {
        font-size: 46px;
      }
    }
  }

  @media (max-width: 766px) {
    height: 70vh;
    background-position: top 0% right 28%;

    .hero-content {
      width: 300px;
      height: 200px;
      padding: 0px 0px;
      position: relative;
      top: 190px;
      left: 12px;

      h4 {
        font-size: 20px;
      }

      h2 {
        font-size: 30px;
      }

      h1 {
        font-size: 30px;
      }
      p {
        font-size: 15px;
      }
      button {
        width: 170px;
        height: 35px;
      }
    }
  }
`;

export default HeroSection;
