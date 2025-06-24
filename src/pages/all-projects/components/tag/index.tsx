import * as S from "./styles";

interface TagProps {
  title: string;
  isActive: boolean;
  onClick: (title: string) => void;
}

const Tag = ({ title, isActive, onClick }: TagProps) => {
  return (
    <S.Container onClick={() => onClick(title)} $active={isActive}>
      <span>{title}</span>
    </S.Container>
  );
};

export default Tag;
