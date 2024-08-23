import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { exProtectData, getProtectData } from "../../api";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendar } from "react-icons/fa";
import { GiFemale, GiMale } from "react-icons/gi";
import { MdOutlineOtherHouses } from "react-icons/md";
import { Container, ConWrap, Con, Img, Text, DiText, Icon } from "./menuStyle";
import { useScrollTop } from "../../lib/useScrollTop";
import { Heart } from "./Heart";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

export const ProtectEx = () => {
  useScrollTop();

  const {
    data: allData,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery(["protectList"], getProtectData, {
    getNextPageParam: (lastPage) => {
      const page = lastPage.daga.page;
      if (lastPage.data.totalPage == page) return false;
      return page + 1;
    },
  });

  const result = allData?.response?.body?.items?.item;

  const fetchData = async () => {
    try {
      const addData = await result;
      console.log(addData);
    } catch (error) {
      console.log(error);
    }
  };

  // let result = realData && realData.filter((v) => v.processState == "보호중");

  console.log(result);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ConWrap>
            {result && (
              <InfiniteScroll dataLength={20} next={fetchData} hasMore={true}>
                <>
                  {result.map((data) => (
                    <Con key={data.desertionNo}>
                      <Heart />
                      <Link to={`/detail/${data.desertionNo}`}>
                        <Img>
                          <img src={data.popfile} alt={data.kindCd} />
                        </Img>
                        <Icon>
                          <h3>{data.kindCd}</h3>
                          {data?.sexCd === "F" ? (
                            <GiFemale color="red" fontSize="20px" />
                          ) : (
                            <GiMale color="blue" fontSize="20px" />
                          )}
                        </Icon>
                        <Text>
                          <FaRegCalendar /> &nbsp; &nbsp; {data.happenDt}
                        </Text>
                        <Text>
                          <SlLocationPin /> &nbsp; &nbsp; {data.happenPlace}
                        </Text>
                        <Text>
                          <MdOutlineOtherHouses /> &nbsp; &nbsp; {data.careNm}
                        </Text>

                        <DiText>{data.specialMark}</DiText>
                      </Link>
                    </Con>
                  ))}
                </>
              </InfiniteScroll>
            )}
          </ConWrap>
        </Container>
      )}
    </>
  );
};
