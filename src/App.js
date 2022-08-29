import "./App.css";
import GlobalStyle from "./common/GlobalStyle";
import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
  const isDark = useSelector((state) => state.theme.mode);

  return (
    <>
      <Main />
      <GlobalStyle isDark={isDark} />
    </>
  );
}

export default App;
