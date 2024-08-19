import { BounceLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <Container>
      <BounceLoader color={colors.middle} size={80} />
    </Container>
  );
};
