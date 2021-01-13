import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      // @ts-ignore
      xxs: 0,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  palette: {
    primary: { main: "#18A6F5" },
    secondary: { main: "#939CAB" },
    //@ts-ignore
    prim: {
      50: "#F6FAFC",
      100: "#BAE4FC",
      200: "#8CD3FA",
      300: "#5DC1F8",
      400: "#3BB3F7",
      500: "#18A6F5",
      600: "#159EF4",
      700: "#1195F2",
      800: "#0E8BF0",
      900: "#087BEE",
    },
    surface: {
      HighEmphasis: "#001333",
      MediumEmphasis: "#3B4961",
      LowEmphasis: "#939CAB",
      Background: "#F6FAFC",
      Stroke: "#C9DEE8",
      Filled: "#B4C8D1",
      Disabled: "#C2C6CB",
    },
    error: { main: "#E42C2B" },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    h1: {
      fontWeight: 300,
      fontSize: 40,
      lineHeight: "52px",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: "38px",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 300,
      fontSize: 24,
      lineHeight: "32px",
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "28px",
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "26px",
      letterSpacing: "0em",
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "24px",
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 500,
      fontSize: 15,
      lineHeight: "24px",
      letterSpacing: "0.01071em",
    },
    button: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "16px",
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "16px",
      letterSpacing: ".03333em",
    },
  },
  overrides: {},
});
