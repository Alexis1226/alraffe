import GlobalStyle from "./styles/globalStyles";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Layout from "@components/layout/Layout";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route
              path="/about/*"
              element={<About />}
            ></Route>
        </Routes>
        </Layout>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
