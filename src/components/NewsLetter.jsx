import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <>
      <Wrapper>
        <div className="newsletter">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="email" name="E-mail" placeholder="Your E-mail address" />
          <button id="Newbtn">Sign Up</button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-image: url("images/banner/b14.png");
  background-position: 20% 30%;
  background-repeat: no-repeat;
  background-color: #041e42;

  .newsletter {
    padding: 15px 0px;

    h4 {
      color: #fff;
      font-size: 33px;
      padding: 5px;
    }

    p {
      color: #9e9e9e;
      font-size: 20px;
      padding: 5px;

      span {
        color: goldenrod;
        margin-left: 5px;
      }
    }
  }

  .form {
    width: 30%;
    display: flex;

    input {
      height: 3.125rem;
      padding: 0 1.25rem;
      font-size: 14px;
      width: 100%;
      border: 1px solid transparent;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      outline: none;
    }

    button {
      width: 150px;
      font-size: 21px;
      font-weight: 500;
      color: #d5ebeb;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
      background-color: #088178;
      border: none;
    }
  }

  @media (max-width: 998px) {
    justify-content: flex-start;
    .form {
      width: 60%;
    }
  }

  @media (max-width: 766px) {
    padding: 20px 5px;

    .newsletter {
      padding: 10px 0px;

      h4 {
        font-size: 28px;
      }
      p {
        font-size: 12px;
      }
    }

    .form {
      width: 70%;

      input {
        height: 2rem;
      }

      button {
        font-size: 15px;
      }
    }
  }
`;

export default NewsLetter;
