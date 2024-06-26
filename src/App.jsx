import BaseRouter from "./constants/Routes";
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/600.css";
import "@fontsource/lora/700.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/500-italic.css";
import "@fontsource/lora/600-italic.css";
import "@fontsource/lora/700-italic.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BaseRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
