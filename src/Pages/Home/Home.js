import { useQuery } from "@tanstack/react-query";
import { getPetData } from "../../api";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["abandonmentPublic?"],
    queryFn: getPetData,
  });
  console.log(data);

  return <>테스트ㅡㅡㅡ</>;
};
