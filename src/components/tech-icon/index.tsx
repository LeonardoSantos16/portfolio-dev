import { IconProps } from "@phosphor-icons/react";

interface TechIconProps {
  Icon: React.ComponentType<IconProps>;
  size: number;
  color: string;
}
const TechIcon = ({ Icon, size, color }: TechIconProps) => {
  return <Icon size={size} color={color} />;
};

export default TechIcon;
