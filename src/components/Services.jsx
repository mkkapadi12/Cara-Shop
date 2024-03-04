import React from "react";
import styled from "styled-components";
import Feature from "../API/features.json";

const Services = () => {
  return (
    <Wrapper>
      {Feature.map((ele) => {
        return (
          <div className="fe-box">
            <img src={ele.img} alt="f1" />
            <h6>{ele.name}</h6>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .fe-box {
    margin: 45px 20px;
    /* height: 200px; */
    border: 1px solid #cce7d0;
    padding: 10px;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);

    img {
      width: 100%;
      background-size: cover;
      margin: 10px 0px;
    }

    h6 {
      width: 130px;
      height: 22px;
      font-size: 15px;
      color: #088178;
      background-color: #fddde4;
      text-align: center;
      border-radius: 4px;
      padding: 2px 0px;
      margin: 7px 28px;
    }
  }
  .fe-box:nth-child(2) h6 {
    background-color: #cdebbc;
  }
  .fe-box:nth-child(3) h6 {
    background-color: #d1e8f2;
  }

  .fe-box:nth-child(4) h6 {
    background-color: #cdd4f2;
  }

  .fe-box:nth-child(5) h6 {
    background-color: #f6dbf6;
  }

  .fe-box:nth-child(6) h6 {
    background-color: #fff2e5;
  }
`;

export default Services;
