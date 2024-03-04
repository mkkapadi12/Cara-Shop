import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";

const Blog = () => {
  let value = {
    ImgName: "b19",
    name: "#readmore",
    nameP: "Read all case studies about our products!",
  };

  return (
    <Wrapper>
      <Heading value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Blog;
