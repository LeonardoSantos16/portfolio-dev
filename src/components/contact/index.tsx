import Button from "../button";
import Input from "./components/input";
import { ArrowRight } from "@phosphor-icons/react";
import * as S from './styles';
import officeWork from '../../assets/Office work-bro.png';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
const Contact = () => {
    return(
        <S.Container>
                <S.Profile>
                    <img src={officeWork} alt="image profile" />
                    <span>Contact</span>
                    <h2>Enjoyed my work? Let’s work together</h2>
                    <p>I’m always up for a chat. Pop me an email at hi@linalevi.com or give me a shout on social media. </p>
                    <S.Socials>
                        <S.ButtonSocial><IoLogoGithub color="#F5F6F6" size={24}/></S.ButtonSocial>
                        <S.ButtonSocial><IoLogoLinkedin color="#F5F6F6" size={24}/></S.ButtonSocial>
                    </S.Socials>
                </S.Profile>
                <S.Forms>
                    <Input placeholder='Name' />
                    <Input placeholder='E-mail' />
                    <S.Textarea placeholder="Your message" />
                    <Button Icon={ArrowRight} orderIcon="row" text="Send me a message" width='225px' backgroundColor="#8A42DB" backgroundHoverColor="#9955E8"/>
                </S.Forms>
        </S.Container>
    )
}

export default Contact;