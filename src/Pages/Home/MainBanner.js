import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  background-color: ${colors.mainBanner};
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  margin: 0 auto;
  padding: ${padding.conSide};

  @media screen and (max-width: 860px) {
    padding: 0 ${padding.MoSide};
    max-width: 660px;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    padding: 40px ${padding.MoSide};
  }

  img {
    width: 400px;
    object-fit: contain;

    @media screen and (max-width: 1300px) {
      width: 300px;
    }

    @media screen and (max-width: 1000px) {
      width: 250px;
    }
  }
`;

const ConWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px ${padding.MoSide};
  }
`;

const Text = styled.div`
  h3 {
    margin-bottom: 15px;
    font-size: 70px;
    font-weight: 900;
    line-height: 80px;

    span {
      color: ${colors.point};
    }

    @media screen and (max-width: 1300px) {
      font-size: 50px;
      line-height: 60px;
      margin-bottom: 10px;
    }

    @media screen and (max-width: 1000px) {
      font-size: 36px;
      line-height: 46px;
    }

    @media screen and (max-width: 860px) {
      font-size: 30px;
      line-height: 38px;
    }
  }

  p {
    font-size: 28px;
    line-height: 42px;

    @media screen and (max-width: 1300px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (max-width: 1000px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Button = styled.div`
  width: 120px;
  margin-right: 20px;
  cursor: pointer;
  text-align: center;
  padding: 15px 25px;
  border: 1.5px solid ${colors.point};
  background-color: ${colors.point};
  border-radius: 60px;
  font-size: 18px;

  @media screen and (max-width: 1300px) {
    width: 120px;
    font-size: 16px;
    padding: 15px 25px;
  }

  a {
    color: #fff;
  }

  &:hover {
    border: 1.5px solid ${colors.point};
    background-color: white;

    a {
      color: ${colors.point};
    }
  }
`;

export const MainBanner = () => {
  return (
    <Container>
      <Wrap>
        <ConWrap>
          <Text>
            <h3>
              당신의 반려동물, <br />
              사지말고 <span>입양</span>하세요
            </h3>
            <p>
              유기동물에서, 반려동물로 <br />
              평생을 사랑할 수 있도록.
            </p>
          </Text>
          <BtnBox>
            <Button>
              <Link to={routes.announ}>동물보기</Link>
            </Button>
            <Button>
              <a href="https://www.animal.go.kr/front/community/show.do?boardId=contents&seq=53&menuNo=1000000058">
                입양조건
              </a>
            </Button>
          </BtnBox>
        </ConWrap>
        <img src="https://ifh.cc/g/m8RTL4.png" alt="MainBanner" />
      </Wrap>
    </Container>
  );
};
