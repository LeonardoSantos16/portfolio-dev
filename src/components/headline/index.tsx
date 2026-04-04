import { ArrowRight, ReadCvLogo } from '@phosphor-icons/react'
import Button from '../button'
import * as S from './styles'
import linha from '../../assets/Linha.svg'

const Headline = () => {
  return (
    <S.Container>
      <img src={linha} alt="imagem hero" />
      <S.ContentHead>
        <S.Title>Leonardo Mendes</S.Title>
        <h2>Desenvolvedor Full Stack</h2>
        <p>
         Graduado em Engenharia da Computação com 2 anos de experiência no desenvolvimento de aplicações web utilizando React, NextJs, TypeScript e NodeJs
        </p>
        <S.CTAButtons>
          <Button
            Icon={ReadCvLogo}
            orderIcon="row-reverse"
            text="Meu Resumo"
            backgroundHoverColor="#4E4563"
            backgroundColor="#413A4F"
            width="148px"
            href="/projects"
          />
          <Button
            Icon={ArrowRight}
            orderIcon="row"
            text="Projetos"
            backgroundHoverColor="#9955E8"
            backgroundColor="#8A42DB"
            width="148px"
            href="about-me"
          />
        </S.CTAButtons>
      </S.ContentHead>
    </S.Container>
  )
}

export default Headline
