// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";

// react
import { FC, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return <div>Reveal</div>;
};

export default Reveal;
