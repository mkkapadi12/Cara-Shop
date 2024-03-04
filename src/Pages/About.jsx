import React from "react";
import Heading from "../components/Heading";
import styled from "styled-components";

const About = () => {
  let value = {
    ImgName: "b1",
    name: "#Knowmore",
    nameP: "Lorem ipsum dolor sit amet consectetur",
  };

  return (
    <Wrapper>
      <Heading value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default About;
