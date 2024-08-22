import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";

const HeartIcon = styled.div`
  all: unset;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
`;

export const Heart = () => {
  const [heart, setHeart] = useState(false);

  const toggle = () => {
    setHeart((heart) => !heart);
  };

  return (
    <HeartIcon role="button" onClick={toggle}>
      {heart === true ? (
        <FaHeart size={26} color="red" />
      ) : (
        <FaRegHeart size={26} color={colors.point} />
      )}
    </HeartIcon>
  );
};
