import "typeface-work-sans";
import "typeface-eb-garamond";
import "typeface-roboto-mono";

import { toTheme } from "@theme-ui/typography";

let theme = {
  baseFontSize: 20,
  baseLineHeight: 1.45,
  scaleRatio: 2,
  googleFonts: [],
  headerFontFamily: ["Work Sans", "sans-serif"],
  bodyFontFamily: ["EB Garamond", "serif"],
  headerWeight: "800",
  bodyWeight: "normal",
  boldWeight: "bold",
  blockMarginBottom: 0.85
};

export default toTheme(theme);
