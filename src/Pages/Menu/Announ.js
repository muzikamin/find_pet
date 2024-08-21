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
} from "../Menu/menuStyle";
import { useScrollTop } from "../../lib/useScrollTop";

export const Announ = () => {
  useScrollTop();
  const { data: allData, isLoading } = useQuery({
    queryKey: ["abandonmentPublic?&numOfRows=40&state=notice"],
    queryFn: getNoticeData,
  });

  const result = allData?.response?.body?.items?.item;

  // let result = realData && realData.filter((v) => v.processState == "보호중");

  console.log(result);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ConWrap>
            {result &&
              result.map((data) => (
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
