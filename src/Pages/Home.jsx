import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* height: 100vh; */
`;

export default Home;
