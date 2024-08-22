import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./routes";
import { colors } from "./GlobalStyled";

const Container = styled.div`
  width: 100%;
  padding: 200px 100px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 860px) {
    padding: 100px 40px;
  }
`;

const Button = styled.div`
  width: 180px;
  margin-top: 50px;
  font-size: 30px;
  border: 3px solid ${colors.point};
  padding: 15px;
  background-color: ${colors.point};
  font-weight: 900;
  color: #fff;
  border-radius: 10px;

  @media screen and (max-width: 860px) {
    font-size: 18px;
    line-height: 28px;
    margin-top: 30px;
    width: 120px;
    padding: 10px;
  }

  &:hover {
    background-color: #fff;
    color: ${colors.point};
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 80px;
    line-height: 90px;
    font-weight: 900;
    color: coral;
    margin-bottom: 30px;

    @media screen and (max-width: 860px) {
      font-size: 60px;
      line-height: 70px;
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 40px;
    line-height: 50px;

    @media screen and (max-width: 860px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

const Img = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Text>
        <h3>Page Not Found</h3>
        <p>페이지를 찾을 수 없습니다.</p>

        <Link to={routes.home}>
          <Button>홈으로</Button>
        </Link>
      </Text>
      <Img>
        <img src="https://images.mypetlife.co.kr/content/uploads/2020/01/09151442/35_%EC%95%84%ED%94%88-%EA%B0%95%EC%95%84%EC%A7%801-1536x864.png" />
      </Img>
    </Container>
  );
};
