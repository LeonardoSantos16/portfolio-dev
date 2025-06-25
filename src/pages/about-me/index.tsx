import TechIcon from "../../components/tech-icon";
import InfoWork from "./components/info-work";
import Section from "./components/section";
import * as S from "./styles";
import { IoLogoJavascript } from "react-icons/io5";

const AboutMe = () => {
  return (
    <S.Container>
      <main>
        <Section title="Sobre mim">
          <S.InfoProfile>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </S.InfoProfile>
        </Section>
        <Section title="Experiência de Trabalho">
          <InfoWork
            title="Junior Web Developer"
            date="Sep 2021 - Dec 2021"
            type="Full Time"
            location="Bengaluru"
            companyName="Dr. Rajkumar’s Learning App"
          />
          <InfoWork
            title="Web Development Intern"
            date="Sep 2021 - Dec 2021"
            type="Internship"
            location="Bengaluru"
            companyName="IonPixelz Web Solutions"
          />
          <InfoWork
            title="SEO / SEM Specialist"
            date="Sep 2021 - Dec 2021"
            type="Internship"
            location="Bengaluru"
            companyName="HAAPS"
          />
        </Section>
        <Section title="Education">
          <InfoWork
            title="Bachelor in Electronics & Communication"
            date="Aug 2015 - Dec 2020"
            type="Full Time"
            companyName="Bangalore Instutute of Technology"
          />
        </Section>
      </main>
      <aside>
        <Section title="Tech Stack">
          <S.WrapperIcon>
            <S.StyleIcon>
              <TechIcon Icon={IoLogoJavascript} size={48} color={"#F5DE19"} />
            </S.StyleIcon>
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#924e3b"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={72} color={"#E44F26"} />
          </S.WrapperIcon>
        </Section>
      </aside>
    </S.Container>
  );
};

export default AboutMe;
