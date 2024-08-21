import { useQuery } from "@tanstack/react-query";
import { useScrollTop } from "../../lib/useScrollTop";
import { getPetAllData, getPetData } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";
import { useParams } from "react-router-dom";
import { GiFemale, GiMale } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  background-color: ${colors.backGround};
  padding: 50px ${padding.side};
`;

const BoxWrap = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  border: 1.5px solid ${colors.point};
  background-color: #fff;
  box-shadow: 5px 3px 15px #dddddd;
  border-radius: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
`;

const ImgBox = styled.div`
  width: 48%;
`;

const Img = styled.div`
  width: 100%;
  height: 550px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    object-fit: cover;
  }
`;

const State = styled.div`
  width: 100%;
  position: absolute;
  border-radius: 30px;
  bottom: 0;
  left: 0;
  background-color: ${colors.middle};
  color: ${colors.point};
  font-size: 30px;
  font-weight: 900;
  padding: 15px 20px;
`;

const ConBox = styled.div`
  width: 48%;
`;

const ConOne = styled.div`
  width: 100%;
  display: flex;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 900;
`;

const SexCd = styled.div`
  font-size: 40px;
  line-height: 50px;
  margin-left: 18px;
`;

const NoticeNo = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #9c9c9c;
  display: flex;
`;

const DetailBox = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
`;

const DetailText = styled.div`
  width: 50%;
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;
  font-weight: 900;
`;

const Text = styled.h3`
  font-size: 18px;
`;

const CareSpot = styled.div`
  padding: 10px;
`;

const Special = styled.div`
  padding: 10px;
`;

const Border = styled.div`
  width: 100%;
  margin: 10px 0;
  border-bottom: 1.5px solid #e5e5e5;
`;

export const Detail = () => {
  useScrollTop();

  const { data: allData, isLoading } = useQuery({
    queryKey: ["abandonmentPublic?&numOfRows=999"],
    queryFn: getPetAllData,
  });

  const DetailData = allData?.response?.body?.items?.item;
  const { id } = useParams();

  const data = DetailData && DetailData.filter((v) => v.desertionNo == id);
  const realData = { ...data };

  console.log(realData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {realData && (
            <Container>
              <BoxWrap>
                <ImgBox>
                  <Img>
                    <img src={realData[0].popfile} alt={realData[0].kindCd} />
                    <State>{realData[0].processState}</State>
                  </Img>
                </ImgBox>
                <ConBox>
                  <ConOne>
                    <Name>{realData[0].kindCd}</Name>
                    <SexCd>
                      {realData[0].sexCd === "F" ? (
                        <GiFemale color="red" />
                      ) : (
                        <GiMale color="blue" />
                      )}
                    </SexCd>
                  </ConOne>
                  <NoticeNo>{realData[0].noticeNo}</NoticeNo>
                  <Border />
                  <DetailBox>
                    <DetailText>
                      <Title>접수일</Title> <Text>{realData[0].happenDt}</Text>
                    </DetailText>
                    <DetailText>
                      <Title>발견장소</Title>
                      <Text>{realData[0].happenPlace}</Text>
                    </DetailText>
                  </DetailBox>
                  <DetailBox>
                    <DetailText>
                      <Title>색상</Title> <Text>{realData[0].colorCd}</Text>
                    </DetailText>
                    <DetailText>
                      <Title>나이</Title>
                      <Text>{realData[0].age}</Text>
                    </DetailText>
                  </DetailBox>
                  <DetailBox>
                    <DetailText>
                      <Title>무게</Title> <Text>{realData[0].weight}</Text>
                    </DetailText>
                    <DetailText>
                      <Title>중성화여부</Title>
                      <Text>{realData[0].neuterYn}</Text>
                    </DetailText>
                  </DetailBox>
                  <Special>
                    <Title>공고일시</Title>
                    <Text>
                      {realData[0].noticeSdt} - {realData[0].noticeEdt}
                    </Text>
                  </Special>
                  <Special>
                    <Title>특징</Title>
                    <Text>{realData[0].specialMark}</Text>
                  </Special>
                </ConBox>
              </BoxWrap>
              <BoxWrap>
                <CareSpot></CareSpot>
                <CareSpot>
                  <Title>보호장소</Title>
                  <Text>{realData[0].careNm}</Text>
                </CareSpot>
                <CareSpot>
                  <Title>보호주소</Title>
                  <Text>{realData[0].careAddr}</Text>
                </CareSpot>
                <CareSpot>
                  <Title>전화번호</Title>
                  <Text>{realData[0].careTel}</Text>
                </CareSpot>
              </BoxWrap>
            </Container>
          )}
        </>
      )}
    </>
  );
};
