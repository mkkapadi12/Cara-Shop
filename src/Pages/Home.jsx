import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <Services />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Home;
