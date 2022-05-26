import React from "react";
import styled from "styled-components";
import Code from "../images/svg/code.svg";
import Static from "../images/svg/static_website.svg";

const About = () => {
  return (
    <>
      <AboutHeading>About</AboutHeading>
      <AboutWrapper>
        <img small src={Code} alt="Sitting beside Laptop" />
        <AboutDescription>
          <p>
            I'm a junior developer who has recently started my journey as a web
            developer.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            temporibus in alias ab vitae. Itaque veritatis sequi esse a soluta
            commodi fugit illo, eaque nostrum veniam saepe, voluptatem est vero.
          </p>
        </AboutDescription>
        <div>
          <img src={Static} alt="Standing infront HTML CSS background" />
        </div>
      </AboutWrapper>
    </>
  );
};

const AboutHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 5rem 0 0 0;
`;
const AboutWrapper = styled.section`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  img {
    width: 300px;
    height: 400px;
    align-self: flex-start;
  }
  div {
    align-self: flex-end;
  }
`;

const AboutDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
export default About;
