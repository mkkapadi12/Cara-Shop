import React from "react";
import Heading from "../components/Heading";
import styled from "styled-components";

const Contact = () => {
  let value = {
    ImgName: "20",
    name: "#let's_talk",
    nameP: "LEAVE A MESSAGE, We love to hear from you!",
  };

  return (
    <Wrapper>
      <Heading value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
