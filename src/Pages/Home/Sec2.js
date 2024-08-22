import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";
import { GiFemale, GiMale } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineOtherHouses } from "react-icons/md";
import { routes } from "../../routes";
import { Heart } from "../Menu/Heart";

const Container = styled.div`
  width: 100%;
  padding: 100px ${padding.side};
  background-color: rgba(44, 255, 0, 0.03);

  @media screen and (max-width: 860px) {
    padding: 100px ${padding.MoSide};
  }
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 38px;
  line-height: 48px;
  margin-bottom: 15px;
  font-weight: 900;
  color: ${colors.point};
`;

const SubTitle = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid #fff;
  row-gap: 20px;
  column-gap: 15px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Con = styled.div`
  height: 420px;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 5px 3px 15px #dddddd;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.middle};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 15px;
  position: relative;
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

const Icon = styled.div`
  font-size: 20px;
  display: flex;

  h3 {
    margin: 0 10px 10px 0;
  }
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: rgba(113, 113, 113, 0.5);
`;

const DiText = styled.div`
  margin-top: 5px;
  font-size: 16px;
  line-height: 22px;
`;

const PlusBox = styled.div`
  width: 100%;
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
`;

export const Sec2 = ({ data }) => {
  console.log(data);

  return (
    <Container>
      <ContainerBox>
        <Title>유기동물 목록</Title>
        <SubTitle>동물들의 소중한 반려인이 되어주세요.</SubTitle>
        <ConWrap>
          {data.map((data) => (
            <Con key={data.desertionNo}>
              <Heart />
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
        <Link to={routes.announ}>
          <PlusBox>더보기</PlusBox>
        </Link>
      </ContainerBox>
    </Container>
  );
};
