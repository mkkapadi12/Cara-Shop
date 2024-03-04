import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";

const Shop = () => {
  let value = {
    ImgName: "20",
    name: "#stayhome",
    nameP: "Save more with coupans & up to 7",
  };

  return (
    <Wrapper>
      <Heading value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Shop;
