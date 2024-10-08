import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";

export const Container = styled.div`
  width: 100%;

  padding: 100px ${padding.side};
  background-color: ${colors.backGround};

  @media screen and (max-width: 860px) {
    padding: 100px ${padding.MoSide};
  }
`;

export const Filter = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  h3 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.point};
  }
`;

export const FilterTitle = styled.div`
  display: flex;
  padding: 20px 0;
  font-size: 18px;

  .bg {
    background-color: ${colors.point};
    color: #fff;
    font-weight: 900;
  }
`;

export const Box = styled.div`
  width: 80px;
  padding: 8px 10px;
  border: 1.5px solid ${colors.point};
  border-radius: 20px;
  margin-right: 20px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
`;

export const ConWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
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
  position: relative;

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
