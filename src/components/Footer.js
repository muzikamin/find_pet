import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.point};
  padding: 60px;
  text-align: center;
  color: ${colors.point};
  font-size: 14px;
`;

export const Footer = () => {
  return <Container>&copy; Minzy Kim | 2024</Container>;
};
