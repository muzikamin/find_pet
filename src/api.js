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
  return instance.get("abandonmentPublic?").then((res) => res.data);
};
