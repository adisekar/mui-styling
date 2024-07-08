import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/scaffold/Layout";
import { outerTheme } from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
