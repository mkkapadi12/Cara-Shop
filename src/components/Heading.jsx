import React from "react";
import styled from "styled-components";

const Heading = ({ value }) => {
  let { ImgName, name, nameP } = value;
  return (
    <Wrapper style={{ backgroundImage: `url(/images/banner/${ImgName}.jpg)` }}>
      <div className="head">
        <h4>{name}</h4>
        <p>{nameP}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;

  .head {
    position: absolute;
    top: 155px;
    width: 100%;
    text-align: center;
    font-size: 23px;
    color: #fff;

    h4 {
      font-size: 45px;
      margin: 5px 0px;
    }

    p {
      font-size: 23px;
    }
  }

  @media (max-width: 998px) {
    height: 17vh;

    .head {
      top: 100px;
    }
  }

  @media (max-width: 766px) {
    height: 13vh;

    .head {
      top: 60px;
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export default Heading;
