// react
import { FC } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
}

const Card: FC<CardProps> = ({ imgSrc, title }) => {
  return <div>Card</div>;
};

export default Card;
