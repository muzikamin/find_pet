import { useQuery } from "@tanstack/react-query";
import { getPetData } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";

const Box = styled.div`
  height: 200vh;
  background-color: red;
`;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["abandonmentPublic?"],
    queryFn: getPetData,
  });
  console.log(data);

  return <Box>테스트ㅡㅡㅡ</Box>;
};
