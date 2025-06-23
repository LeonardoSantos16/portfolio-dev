import { ArrowRight, ReadCvLogo } from "@phosphor-icons/react";
import Button from "../button";
import * as S from "./styles";
import linha from "../../assets/Linha.svg";

const Headline = () => {
  return (
    <S.Container>
      <img src={linha} alt="imagem hero" />
      <S.ContentHead>
        <S.Title>Hi, I’m Leonardo</S.Title>
        <h2>Full-stack developer and innovation enthusiast</h2>
        <p>
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </p>
        <S.CTAButtons>
          <Button
            Icon={ReadCvLogo}
            orderIcon="row"
            text="My resume"
            backgroundHoverColor="#4E4563"
            backgroundColor="#413A4F"
            width="148px"
          />
          <Button
            Icon={ArrowRight}
            orderIcon="row-reverse"
            text="Get in touch"
            backgroundHoverColor="#9955E8"
            backgroundColor="#8A42DB"
            width="148px"
          />
        </S.CTAButtons>
      </S.ContentHead>
    </S.Container>
  );
};

export default Headline;
