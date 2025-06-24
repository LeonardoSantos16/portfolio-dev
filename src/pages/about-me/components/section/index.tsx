import * as S from "./styles";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: SectionProps) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      {children}
    </S.Container>
  );
};

export default Section;
