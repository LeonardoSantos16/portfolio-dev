import { ReadCvLogo } from '@phosphor-icons/react'
import Button from '../button'
import TechIcon from '../tech-icon'
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from 'react-icons/io5'
import * as S from './styles'
import codingImage from '../../assets/coding-bro.png'
const About = () => {
  return (
    <S.Container>
      <S.SectionAbout>
        <img src={codingImage} alt="imagem sobre" />
        <S.ContentWrapper>
          <S.TeckStack>
            <TechIcon Icon={IoLogoJavascript} color="#9955E8" size={24} />
            <TechIcon Icon={IoLogoReact} color="#9955E8" size={24} />
            <TechIcon Icon={IoLogoNodejs} color="#9955E8" size={24} />
          </S.TeckStack>
          <S.ContentText>
            <span>Sobre mim</span>
            <h2>
              Trajetória Profissional e Acadêmica
            </h2>
            <p>
              Atuação de 2 anos na JBQ Global, com progressão de estagiário a desenvolvedor júnior. Experiência prática no ecossistema JavaScript e estudos voltados para arquitetura de sistemas com .NET
            </p>
          </S.ContentText>
          <Button
            Icon={ReadCvLogo}
            orderIcon="row-reverse"
            text="Meu Resumo"
            backgroundHoverColor="#9955E8"
            backgroundColor="#8A42DB"
            width="160px"
            href="about-me"
          />
        </S.ContentWrapper>
      </S.SectionAbout>
    </S.Container>
  )
}

export default About
