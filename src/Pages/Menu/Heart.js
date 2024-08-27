import { useEffect, useState } from "react";
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

export const Heart = ({ heart, setHeart, data }) => {
  const [heartValue, setHeartValue] = useState(false);
  const { id: datailId } = useParams();

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("favorite")) || [];
    const onOff = storageData.some((data) => data.desertionNo === datailId);

    setHeartValue(onOff);
  }, [datailId, heartValue, setHeart]);

  const heartClick = () => {
    if (heartValue === false) {
      setHeart([
        ...heart, //이전의 내용을 불러옴, 대신 배열을 까서 내용만 (...)
        data,
      ]);

      setHeartValue(true);
    }
  };

  const heartDelete = () => {
    if (heartValue === true) {
      setHeart(heart.filter((heart) => heart !== data));

      setHeartValue(false);
    }
  };

  return (
    <HeartIcon role="button">
      {heartValue ? (
        <FaHeart size={26} color="red" onClick={heartDelete} />
      ) : (
        <FaRegHeart size={26} color={colors.point} onClick={heartClick} />
      )}
    </HeartIcon>
  );
};
