import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "../button";
import Input from "./components/input";
import { ArrowRight } from "@phosphor-icons/react";
import * as S from "./styles";
import officeWork from "../../assets/Office work-bro.png";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_syc2kl7",
          "template_gla7cj9",
          form.current,
          "BN7D-gwERwiJLLuOU"
        )
        .then(() => {
          alert("Mensagem enviada com sucesso!");
          form.current!.reset();
        })
        .catch((error) => {
          alert("Erro ao enviar a mensagem, tente novamente");
          console.error(error.text);
        });
    }
  };

  return (
    <S.Container>
      <S.Profile>
        <img src={officeWork} alt="image profile" />
        <span>Contact</span>
        <h2>Enjoyed my work? Let’s work together</h2>
        <p>
          I’m always up for a chat. Pop me an email at hi@linalevi.com or give
          me a shout on social media.{" "}
        </p>
        <S.Socials>
          <S.ButtonSocial
            href="https://github.com/LeonardoSantos16"
            target="_blank"
          >
            <IoLogoGithub color="#F5F6F6" size={24} />
          </S.ButtonSocial>
          <S.ButtonSocial
            href="https://www.linkedin.com/in/leonardo-mendes-ferreira-/"
            target="_blank"
          >
            <IoLogoLinkedin color="#F5F6F6" size={24} />
          </S.ButtonSocial>
        </S.Socials>
      </S.Profile>
      <S.Forms ref={form} onSubmit={sendEmail}>
        <Input name="user_name" placeholder="Name" />
        <Input name="user_email" placeholder="E-mail" />
        <S.Textarea name="message" placeholder="Your message" />
        <Button
          type="submit"
          Icon={ArrowRight}
          orderIcon="row"
          text="Send me a message"
          width="225px"
          backgroundColor="#8A42DB"
          backgroundHoverColor="#9955E8"
        />
      </S.Forms>
    </S.Container>
  );
};

export default Contact;
