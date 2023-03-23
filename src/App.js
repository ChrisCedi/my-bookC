import { Navigation } from "./routes/Navigation";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
