import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, margin, padding } from "../GlobalStyled";
import { NavBar } from "./NavBar";

const ContainerBox = styled.header`
  width: 100%;
  position: fixed;
  z-index: 999;

  @media screen and (max-width: 860px) {
  }
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: yellow;
  display: flex;
  align-items: center;
  padding: 0 ${padding.side};
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    padding: 0 ${padding.MoSide};
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 900;
  display: flex;
  align-items: center;

  :link {
    display: flex;
    align-items: center;
  }

  img {
    width: 25px;
    margin-right: 8px;

    @media screen and (max-width: 860px) {
      width: 20px;
    }
  }

  h3 {
    color: ${colors.point};
    font-size: 20px;
    @media screen and (max-width: 860px) {
      font-size: 18px;
    }
  }
`;

export const Header = () => {
  return (
    <ContainerBox>
      <Container>
        <Logo>
          <Link to={routes.home}>
            <img src="https://ifh.cc/g/vhd1WG.png" alt="로고" />
            <h3>파인드펫</h3>
          </Link>
        </Logo>
        <NavBar />
      </Container>
    </ContainerBox>
  );
};
