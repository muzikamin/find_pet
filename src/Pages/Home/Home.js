import { useQuery } from "@tanstack/react-query";
import { getPetData } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { MainBanner } from "./MainBanner";

const Box = styled.div``;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["abandonmentPublic?"],
    queryFn: getPetData,
  });
  console.log(data);

  return (
    <>
      <MainBanner />
    </>
  );
};
