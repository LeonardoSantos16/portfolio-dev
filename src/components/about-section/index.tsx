import * as S from './styles';
import { 
  IoLogoJavascript, 
  IoLogoReact, 
  IoLogoNodejs, 
  IoDocumentTextOutline, 
  IoEyeOutline, 
  IoDownloadOutline 
} from 'react-icons/io5';
import Button from '../button'
import TechIcon from '../tech-icon'
import codingImage from '../../assets/coding-bro.png';

const About = () => {
  const resumePath = "/curriculo-leonardo-mendes.pdf";

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
              Atuação de 2 anos na JBQ Global, com progressão de estagiário a desenvolvedor júnior. Experiência prática no ecossistema JavaScript e estudos voltados para a robustez da plataforma .NET.
            </p>
          </S.ContentText>
          
          <S.ActionsContainer>
            <Button
              Icon={IoDocumentTextOutline}
              orderIcon="row-reverse"
              text="Sobre mim"
              backgroundColor="#8A42DB"
              backgroundHoverColor="#9955E8"
              width="160px"
              href="about-me"
            />

            <a 
              href={resumePath} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                Icon={IoEyeOutline}
                orderIcon="row"
                text="Ver CV"
                backgroundColor="#413A4F"
                backgroundHoverColor="#4E4563"
                width="130px"
              />
            </a>

            <a 
              href={resumePath} 
              download="Curriculo-Leonardo-Mendes.pdf"
              style={{ textDecoration: 'none' }}
            >
              <Button
                Icon={IoDownloadOutline}
                orderIcon="row-reverse"
                text="Baixar CV"
                backgroundColor="#413A4F"
                backgroundHoverColor="#4E4563"
                width="140px"
              />
            </a>
          </S.ActionsContainer>
        </S.ContentWrapper>
      </S.SectionAbout>
    </S.Container>
  )
}

export default About