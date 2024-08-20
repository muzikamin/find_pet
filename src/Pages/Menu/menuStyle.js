import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";

export const Container = styled.div`
  width: 100%;
  padding: 100px ${padding.side};
  background-color: rgba(44, 255, 0, 0.03);

  @media screen and (max-width: 860px) {
    padding: 100px ${padding.MoSide};
  }
`;

export const ConWrap = styled.div`
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

export const Con = styled.div`
  height: 420px;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 5px 3px 15px #dddddd;
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

export const Img = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 15px;
  position: relative;
`;

export const Icon = styled.div`
  font-size: 20px;
  display: flex;

  h3 {
    margin: 0 10px 10px 0;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: rgba(113, 113, 113, 0.5);
`;

export const DiText = styled.div`
  margin-top: 5px;
  font-size: 16px;
  line-height: 22px;
`;
