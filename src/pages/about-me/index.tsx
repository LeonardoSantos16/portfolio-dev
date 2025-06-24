import TechIcon from "../../components/tech-icon";
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
        <Section title="Experiência de Trabalho"></Section>
      </main>
      <aside>
        <Section title="Tech Stack">
          <S.WrapperIcon>
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
            <TechIcon Icon={IoLogoJavascript} size={48} color={"#E44F26"} />
          </S.WrapperIcon>
        </Section>
      </aside>
    </S.Container>
  );
};

export default AboutMe;
