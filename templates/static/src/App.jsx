import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./routes";
import GlobaStyles from "./theme/globaStyles";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobaStyles />
      <Router />
    </ThemeProvider>
  );
}
export default App;
