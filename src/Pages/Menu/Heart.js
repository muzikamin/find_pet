import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { useParams } from "react-router-dom";

const HeartIcon = styled.div`
  all: unset;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
`;

export const Heart = ({ data }) => {
  const [heart, setHeart] = useState(false);
  const { id } = useParams();

  const heartTrue = () => {
    let favoriteData = JSON.parse(localStorage.getItem("favorite")) || [];
    favoriteData.push(data);
    const uniqueFavoriteData = Array.from(new Set(favoriteData));
    localStorage.setItem("favorite", JSON.stringify(uniqueFavoriteData));

    setHeart(true);
  };

  const heartFalse = () => {
    setHeart(false);

    const favoriteData = JSON.parse(localStorage.getItem("favorite")) || [];
    // const deleteData = favoriteData.filter((v) => v.data !== data);
    // localStorage.setItem("favorite", JSON.stringify(deleteData));
  };

  return (
    <HeartIcon role="button">
      {heart === true ? (
        <FaHeart size={26} color="red" onClick={heartFalse} />
      ) : (
        <FaRegHeart size={26} color={colors.point} onClick={heartTrue} />
      )}
    </HeartIcon>
  );
};
