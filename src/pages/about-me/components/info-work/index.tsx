import { FaRegBuilding, FaSearchLocation } from 'react-icons/fa'
import * as S from './styles'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
interface InfoWorkProps {
  title: string
  dateEnd: string
  dateBegin: string
  mode: string
  companyName: string
  location?: string
}
import TechIcon from '../../../../components/tech-icon'
const InfoWork = (props: InfoWorkProps) => {
  return (
    <S.Info>
      <S.Head>
        <S.StyleTitle>{props.title}</S.StyleTitle>
        <S.Box>
          <S.StyleType>
            <S.TextStyle>{props.mode}</S.TextStyle>
          </S.StyleType>
        </S.Box>
      </S.Head>
      <S.TextStyle>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur
      </S.TextStyle>
      <S.BottomStyle>
        <S.Content>
          <S.Wrapper>
            <TechIcon Icon={FaRegBuilding} size={16} color="#ffffff" />
            <S.TextStyle>{props.companyName}</S.TextStyle>
          </S.Wrapper>
          {props.location && (
            <S.Wrapper>
              <TechIcon Icon={FaSearchLocation} size={16} color="#ffffff" />
              <S.TextStyle>{props.location}</S.TextStyle>
            </S.Wrapper>
          )}
        </S.Content>
        <S.DateWrapper>
          <S.TextStyle>
            {format(props.dateBegin, 'MMMM yyyy', { locale: ptBR })}
          </S.TextStyle>
          <S.TextStyle>-</S.TextStyle>
          <S.TextStyle>
            {format(props.dateEnd, 'MMMM yyyy', { locale: ptBR })}
          </S.TextStyle>
        </S.DateWrapper>
      </S.BottomStyle>
    </S.Info>
  )
}

export default InfoWork
