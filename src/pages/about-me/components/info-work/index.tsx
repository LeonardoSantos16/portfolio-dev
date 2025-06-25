import { FaRegBuilding, FaSearchLocation } from "react-icons/fa";
import * as S from "./styles";
interface InfoWorkProps {
  title: string;
  date: string;
  type: string;
  companyName: string;
  location?: string;
}
import TechIcon from "../../../../components/tech-icon";
const InfoWork = (props: InfoWorkProps) => {
  return (
    <S.Container>
      <div>
        <S.StyleTitle>{props.title}</S.StyleTitle>
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
      </div>
      <S.Box>
        <S.StyleType>
          <S.TextStyle>{props.type}</S.TextStyle>
        </S.StyleType>
        <S.TextStyle>{props.date}</S.TextStyle>
      </S.Box>
    </S.Container>
  );
};

export default InfoWork;
