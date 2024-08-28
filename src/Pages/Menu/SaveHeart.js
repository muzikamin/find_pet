import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GiFemale, GiMale } from "react-icons/gi";
import { FaRegCalendar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineOtherHouses } from "react-icons/md";
import {
  Container,
  ConWrap,
  Con,
  Img,
  Text,
  DiText,
  Icon,
} from "../Menu/menuStyle";
import { colors } from "../../GlobalStyled";

const Delete = styled.div`
  width: 400px;
  height: 60px;
  background-color: ${colors.point};
  margin: 60px auto 0 auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const Title = styled.div`
  h3 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.point};
    margin-bottom: 30px;
  }
`;

const NoText = styled.div`
  margin: 100px 0;
  font-size: 20px;

  @media screen and (max-width: 860px) {
    /* margin: 100px auto; */
    text-align: center;
  }
`;

const FindPet = styled.div`
  width: 400px;
  height: 60px;
  background-color: ${colors.point};
  margin-top: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 860px) {
    margin: 100px auto;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    margin: 100px auto;
    text-align: center;
  }
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  color: #fff;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveHeart = () => {
  const [favorite, setFavorite] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(data);
  }, [favorite]);

  const deleteKey = () => {
    localStorage.removeItem("favorite");
  };

  console.log(favorite);

  const handleLink = () => {
    navigate("/announ");
  };

  return (
    <Container>
      <Title>
        <h3>내 관심동물</h3>
      </Title>

      {favorite?.length > 0 ? (
        <ConWrap>
          {favorite.map((data) => (
            <Con key={data.desertionNo}>
              <Link to={`/detail/${data.desertionNo}`}>
                <Img>
                  <img src={data.popfile} alt={data.kindCd} />
                  <TextBox>{data.processState}</TextBox>
                </Img>
                <Icon>
                  <h3>{data.kindCd}</h3>
                  {data?.sexCd === "F" ? (
                    <GiFemale color="red" fontSize="20px" />
                  ) : (
                    <GiMale color="blue" fontSize="20px" />
                  )}
                </Icon>
                <Text>
                  <FaRegCalendar /> &nbsp; &nbsp; {data.happenDt}
                </Text>
                <Text>
                  <SlLocationPin /> &nbsp; &nbsp; {data.happenPlace}
                </Text>
                <Text>
                  <MdOutlineOtherHouses /> &nbsp; &nbsp; {data.careNm}
                </Text>

                <DiText>{data.specialMark}</DiText>
              </Link>
            </Con>
          ))}
        </ConWrap>
      ) : (
        <NoText>저장한 동물이 없어요.</NoText>
      )}
      <>
        {favorite?.length === 0 ? (
          <FindPet onClick={handleLink}>가족이 될 동물을 찾아볼까요?</FindPet>
        ) : (
          <Delete onClick={deleteKey}>관심동물 전체삭제</Delete>
        )}
      </>
    </Container>
  );
};
