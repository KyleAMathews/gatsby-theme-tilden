import gray from "gray-percentage";
const white = `#fff`;
const grey90 = `#232129`;
const lightGrey = `hsla(0, 0%, 0%, 0.2)`;
const black80 = `#1B1F23`;
const transparentLightYellow = gray(95);
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const transparentLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const purple60 = `#663399`;

export default {
  text: grey90,
  background: white,
  primary: grey90,
  secondary: black80,
  muted: lightGrey,
  highlight: transparentLightYellow,
  heading: grey90,
  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: lightWhite,
      secondary: lightWhite,
      muted: transparentLightWhite,
      highlight: transparentLightWhite,
      heading: white
    }
  }
};
