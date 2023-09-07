// react
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, secondary, icon, onClick }) => {
  return <div>Button</div>;
};

export default Button;
