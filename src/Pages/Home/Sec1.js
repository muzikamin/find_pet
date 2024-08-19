import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";
import { PiCat, PiDog } from "react-icons/pi";

export const Container = styled.div`
  width: 100%;
  padding: ${padding.conSide};

  @media screen and (max-width: 760px) {
    padding: 100px ${padding.MoSide};
  }

  h3 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 900;
    margin-bottom: 30px;

    @media screen and (max-width: 1300px) {
      font-size: 26px;
      line-height: 36px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 860px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  h4 {
    font-size: 26px;
    line-height: 36px;

    @media screen and (max-width: 1300px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (max-width: 860px) {
      font-size: 18px;
      line-height: 28px;
    }

    span {
      font-size: 50px;
      font-weight: 900;
      color: ${colors.point};

      @media screen and (max-width: 1300px) {
        font-size: 40px;
      }

      @media screen and (max-width: 860px) {
        font-size: 30px;
      }
    }
  }
`;

export const ConWrap = styled.div`
  width: 100%;
  /* background-color: red; */
  max-width: 1400px;
  border: 1.5px solid ${colors.middle};
  border-radius: 10px;
  padding: 50px;
  margin: 0 auto;
  box-shadow: 5px 3px 15px #eeeeee;
  margin-bottom: 15px;

  @media screen and (max-width: 760px) {
    text-align: center;
  }
`;

const WrapBox = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const ConWrapBox = styled.div`
  width: 49%;
  display: flex;
  /* background-color: red; */
  border: 1.5px solid ${colors.middle};
  border-radius: 10px;
  padding: 50px;
  box-shadow: 5px 3px 15px #eeeeee;

  @media screen and (max-width: 1300px) {
    padding: 30px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-bottom: 15px;
  }

  .icon {
    font-size: 80px;
    color: ${colors.point};
    margin-right: 30px;

    @media screen and (max-width: 1300px) {
      font-size: 60px;
      margin-right: 15px;
    }

    @media screen and (max-width: 1000px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

export const Sec1 = ({ allData, catData, dogData }) => {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <Container>
      <ConWrap>
        <h3>{formattedDate} 유기동물 현황</h3>
        <h4>
          <span>{allData} </span>마리의 동물들이 입양을 기다리고 있어요.
        </h4>
      </ConWrap>
      <WrapBox>
        <ConWrapBox>
          <PiDog className="icon" />
          <h4>
            <span>{dogData} </span>마리의 강아지가
            <br />
            입양을 기다리고 있어요.
          </h4>
        </ConWrapBox>
        <ConWrapBox>
          <PiCat className="icon" />
          <h4>
            <span>{catData} </span>마리의 고양이가
            <br />
            입양을 기다리고 있어요.
          </h4>
        </ConWrapBox>
      </WrapBox>
    </Container>
  );
};
