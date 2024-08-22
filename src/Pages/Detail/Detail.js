import { useQuery } from "@tanstack/react-query";
import { useScrollTop } from "../../lib/useScrollTop";
import { getPetAllData, getPetData } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { colors, padding } from "../../GlobalStyled";
import { useParams } from "react-router-dom";
import { GiFemale, GiMale } from "react-icons/gi";
import { Map } from "./Map";

const Container = styled.div`
  width: 100%;
  background-color: ${colors.backGround};
  padding: 50px ${padding.side};

  @media screen and (max-width: 860px) {
    padding: 50px ${padding.MoSide};
  }
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

  @media screen and (max-width: 960px) {
    padding: 30px;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    padding: 15px;
  }
`;

const ImgBox = styled.div`
  width: 48%;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 550px;

  @media screen and (max-width: 960px) {
    height: 450px;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    object-fit: cover;
  }
`;

const ConBox = styled.div`
  width: 48%;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 15px;
  }
`;

const ConOne = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const State = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.point};
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  padding: 12px 15px;

  @media screen and (max-width: 500px) {
    padding: 10px 12px;
    font-size: 15px;
  }
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 900;

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

const SexCd = styled.div`
  font-size: 40px;
  line-height: 40px;
  margin-left: 18px;

  @media screen and (max-width: 500px) {
    font-size: 28px;
    line-height: 28px;
    margin-left: 8px;
  }
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

  @media screen and (max-width: 680px) {
    flex-direction: column;
    padding: 0;
  }
`;

const DetailText = styled.div`
  width: 50%;

  @media screen and (max-width: 680px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 30px;
  font-weight: 900;
`;

const Text = styled.h3`
  font-size: 18px;
  line-height: 28px;
`;

const CareSpot = styled.div`
  margin-right: 60px;

  @media screen and (max-width: 960px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const CareTitle = styled.div`
  font-size: 24px;
  line-height: 34px;
  padding: 10px;
  font-weight: 900;
  span {
    font-size: 28px;
    color: ${colors.point};

    @media screen and (max-width: 500px) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const CareText = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    padding: 15px;
    flex-direction: column;
  }
`;

const CareTextWrap = styled.div`
  width: 100%;
`;

const Special = styled.div`
  padding: 10px;

  @media screen and (max-width: 680px) {
    padding: 0;
    margin-bottom: 15px;
  }
`;

const Border = styled.div`
  width: 100%;
  margin: 10px 0;
  border-bottom: 1.5px solid #e5e5e5;

  @media screen and (max-width: 680px) {
    margin: 20px 0;
  }
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
                    <img
                      src={
                        realData[0].popfile
                          ? realData[0].popfile
                          : "https://th.bing.com/th/id/OIP.H1gHhKVbteqm1U5SrwpPgwAAAA?rs=1&pid=ImgDetMain"
                      }
                      alt={realData[0].kindCd}
                    />
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
                    <State>{realData[0].processState}</State>
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
                <CareTextWrap>
                  <CareTitle>
                    저는 <span>{realData[0].careNm}</span>에서 기다리고 있어요
                    😄
                  </CareTitle>
                  <CareText>
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
                  </CareText>
                  <Map title={realData[0].careNm} add={realData[0].careAddr} />
                </CareTextWrap>
              </BoxWrap>
            </Container>
          )}
        </>
      )}
    </>
  );
};
