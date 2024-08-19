import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, margin, padding } from "../GlobalStyled";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { MdOutlinePets } from "react-icons/md";

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
  background-color: ${(props) => props.bgColor};
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  padding: 0 ${padding.side};
  justify-content: space-between;
  transition: 0.5s ease;

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

  .logoicon {
    font-size: 25px;
    color: ${colors.point};
    margin-right: 5px;

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
  const [headerBg, setHeaderBg] = useState();

  const ScrollHandler = () => {
    const pageY = window.scrollY;

    if (pageY >= 80) {
      setHeaderBg(colors.baseOpacity);
    } else {
      setHeaderBg("rgba(255, 255, 255, 0)");
    }
  };

  window.addEventListener("scroll", ScrollHandler);

  return (
    <ContainerBox>
      <Container bgColor={headerBg}>
        <Logo>
          <Link to={routes.home}>
            <MdOutlinePets className="logoicon" />
            <h3>파인드펫</h3>
          </Link>
        </Logo>
        <NavBar />
      </Container>
    </ContainerBox>
  );
};
