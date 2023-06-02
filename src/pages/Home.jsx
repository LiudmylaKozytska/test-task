import React from "react";
import background_image from "../images/background_image.png";
import { BackgroundImage, HomeSection, Title } from "./PagesStyled";

const Home = () => {
  return (
    <HomeSection>
      <Title>Tweet App</Title>
      <BackgroundImage src={background_image}></BackgroundImage>
    </HomeSection>
  );
};

export default Home;
