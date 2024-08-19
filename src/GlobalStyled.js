import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#307E7C",
  middle: "#B7DCC7",
  base: "#69AD98",
  mainBanner: "#daf1e4",
  baseOpacity: "rgba(255, 255, 255, 0.7)",
};

export const padding = {
  side: "80px",
  MoSide: "20px",
  conSide: "120px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {box-sizing: border-box;}

body {
font-family: 'Spoqa Han Sans Neo', 'sans-serif';
letter-spacing: -1px;
color: #151515;
}

a {
    text-decoration: none;
    color: #151515;
}


`;
