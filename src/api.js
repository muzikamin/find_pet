import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1543061/abandonmentPublicSrvc/",
  params: {
    _type: "json",
    serviceKey:
      "G47LjQsbye2mab+mzvLhCkT6QWR4fSIKUIJe1sRLo8Y0J28Jo5ES5f+v8KPOISJjO1VIBQhEmDVIef0WSnS1IQ==",
  },
});

export const getPetData = () => {
  return instance
    .get("abandonmentPublic?&numOfRows=16")
    .then((res) => res.data);
};

export const getPetAllData = () => {
  return instance
    .get("abandonmentPublic?&numOfRows=999")
    .then((res) => res.data);
};

export const getCatData = () => {
  return instance
    .get("abandonmentPublic?&upkind=422400")
    .then((res) => res.data);
};

export const getDogData = () => {
  return instance
    .get("abandonmentPublic?&upkind=417000")
    .then((res) => res.data);
};

export const getProtectData = () => {
  return instance
    .get(`abandonmentPublic?&numOfRows=20&state=protect&pageNo=1`)
    .then((res) => res.data);
};

export const exProtectData = () => {
  return instance
    .get(`abandonmentPublic?&numOfRows=20&state=protect`)
    .then((res) => res.data);
};

export const getNoticeData = () => {
  return instance
    .get("abandonmentPublic?&numOfRows=40&state=notice")
    .then((res) => res.data);
};
