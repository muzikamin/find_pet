import { useQuery } from "@tanstack/react-query";
import { getCatData, getDogData, getKindData, getPetData } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { MainBanner } from "./MainBanner";
import { Sec1 } from "./Sec1";
import { Sec2 } from "./Sec2";
import { useScrollTop } from "../../lib/useScrollTop";

const Box = styled.div``;

export const Home = () => {
  useScrollTop();

  const { data: allData, isLoading } = useQuery({
    queryKey: ["abandonmentPublic?&numOfRows=16"],
    queryFn: getPetData,
  });

  const { data: catData } = useQuery({
    queryKey: ["abandonmentPublic?&upkind=422400"],
    queryFn: getCatData,
  });

  const { data: dogData } = useQuery({
    queryKey: ["abandonmentPublic?&upkind=417000"],
    queryFn: getDogData,
  });

  // console.log(dogData);
  // console.log(catData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {allData && (
            <Box>
              <MainBanner />
              <Sec1
                allData={allData?.response?.body?.totalCount}
                catData={catData?.response?.body?.totalCount}
                dogData={dogData?.response?.body?.totalCount}
              />
              <Sec2 data={allData?.response?.body?.items?.item} />
            </Box>
          )}
        </>
      )}
    </>
  );
};
