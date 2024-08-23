import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Delete = styled.div`
  margin: 300px;
  width: 120px;
  height: 120px;
  border: 1px solid red;
`;

export const SaveHeart = () => {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    const data = localStorage.getItem("favorite");
    setFavorite(data);
  }, []);

  const deleteKey = () => {
    localStorage.removeItem("favorite");
  };

  return (
    <Container>
      {favorite}
      <Delete onClick={deleteKey}>삭제</Delete>
    </Container>
  );
};
