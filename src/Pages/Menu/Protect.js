import { useQuery } from "@tanstack/react-query";
import { getNoticeData, getProtectData } from "../../api";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendar } from "react-icons/fa";
import { GiFemale, GiMale } from "react-icons/gi";
import { MdOutlineOtherHouses } from "react-icons/md";
import {
  Container,
  ConWrap,
  Con,
  Img,
  Text,
  DiText,
  Icon,
  FilterTitle,
  Filter,
  Box,
} from "../Menu/menuStyle";
import { useScrollTop } from "../../lib/useScrollTop";
import { Heart } from "./Heart";
import { useEffect, useState } from "react";

export const Protect = () => {
  useScrollTop();
  const { data: allData, isLoading } = useQuery({
    queryKey: [`abandonmentPublic?&numOfRows=20&state=protect&pageNo=1`],
    queryFn: getProtectData,
  });

  const result = allData?.response?.body?.items?.item;

  const [pet, setPet] = useState();
  const [color, setColor] = useState("allColor");

  const dog = result?.filter((data) => {
    return data.kindCd.includes("[개]");
  });

  const cat = result?.filter((data) => {
    return data.kindCd.includes("[고양이]");
  });

  const clickHandler = (data) => {
    if (data === "all") {
      setPet(result);
    } else if (data === "dog") {
      setPet(dog);
    } else if (data === "cat") {
      setPet(cat);
    }
  };

  useEffect(() => {
    setPet(result);
  }, []);

  console.log(pet);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Filter>
            <h3>보호중 동물</h3>
            <FilterTitle>
              <Box
                className={`${color === "allColor" ? "bg" : ""}`}
                onClick={() => {
                  clickHandler("all");
                  setColor("allColor");
                }}
              >
                모두
              </Box>
              <Box
                className={`${color === "dogColor" ? "bg" : ""}`}
                onClick={() => {
                  clickHandler("dog");
                  setColor("dogColor");
                }}
              >
                강아지
              </Box>
              <Box
                className={`${color === "catColor" ? "bg" : ""}`}
                onClick={() => {
                  clickHandler("cat");
                  setColor("catColor");
                }}
              >
                고양이
              </Box>
            </FilterTitle>
          </Filter>
          <ConWrap>
            {pet &&
              pet.map((data) => (
                <Con key={data.desertionNo}>
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
                      <FaRegCalendar /> &nbsp; &nbsp; {data.happenDt} -{" "}
                      {data.noticeEdt}
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
          </ConWrap>
        </Container>
      )}
    </>
  );
};
