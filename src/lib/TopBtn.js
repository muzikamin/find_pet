import { GrLinkTop } from "react-icons/gr";
import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.point};
  position: fixed;
  z-index: 9999;
  cursor: pointer;
  right: 40px;
  bottom: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 680px) {
    width: 45px;
    height: 45px;
    right: 25px;
    bottom: 25px;
  }
`;

export const TopBtn = () => {
  const clickEvent = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container onClick={clickEvent}>
      <GrLinkTop fontSize={20} color="white" />
    </Container>
  );
};
