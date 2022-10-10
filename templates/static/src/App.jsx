import React from "react";
import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import GlobaStyles from "./theme/globaStyles";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobaStyles />
      <Login />
    </ThemeProvider>
  );
}
export default App;
