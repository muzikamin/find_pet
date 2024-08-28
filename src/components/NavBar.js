import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { CgMenuHotdog } from "react-icons/cg";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { colors } from "../GlobalStyled";

const Menu = styled.ul`
  display: flex;
  font-size: 18px;

  @media screen and (max-width: 860px) {
    font-size: 16px;
  }

  li {
    margin-left: 40px;

    @media screen and (max-width: 860px) {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const MoMenu = styled.div`
  display: none;

  @media screen and (max-width: 560px) {
    display: flex;
  }
`;

const MenuBtn = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

const SideBox = styled.div`
  background-color: red;
`;

const SideMenu = styled.ul`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  display: none;
  transition: 1s ease;
  font-size: 16px;
  backdrop-filter: blur(5px);

  &.show_menu {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    justify-content: space-around;
    background-color: ${colors.baseOpacity};
    opacity: 1;
    transition: 0.5s ease;

    li {
      padding: 40px 0;
      border-bottom: 1px solid ${colors.point};
    }

    li:last-child {
      border-bottom: none;
    }
  }

  &.hide_menu {
    display: none;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    justify-content: space-around;
    background-color: ${colors.baseOpacity};
    opacity: 1;
    transition: 0.5s ease;

    li {
      padding: 40px 0;
      border-bottom: 1px solid ${colors.point};
    }

    li:last-child {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 560px) {
    display: block;
  }
`;

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      {/* // 웹 */}
      <Menu>
        <li>
          <Link to={routes.announ}>공고중동물</Link>
        </li>
        <li>
          <Link to={routes.protect}>보호중동물</Link>
        </li>
        <li>
          <Link to={routes.center}>전국보호소</Link>
        </li>
        <li>
          <Link to={routes.saveheart}>내관심동물</Link>
        </li>
      </Menu>
      {/* // 모바일 */}
      <MoMenu>
        <MenuBtn role="button" onClick={toggleSide}>
          {isOpen ? (
            <AiOutlineCloseCircle width={40} />
          ) : (
            <CgMenuHotdog width={40} />
          )}
        </MenuBtn>
        <SideBox>
          <SideMenu className={isOpen ? "show_menu" : "hide_menu"}>
            <li>
              <Link to={routes.announ}>공고중동물</Link>
            </li>
            <li>
              <Link to={routes.protect}>보호중동물</Link>
            </li>
            <li>
              <Link to={routes.center}>보호소찾기</Link>
            </li>
            <li>
              <Link to={routes.saveheart}>관심동물</Link>
            </li>
          </SideMenu>
        </SideBox>
      </MoMenu>
    </>
  );
};
