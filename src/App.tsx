import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Blog from "@pages/Blog";
import Contact from "@pages/Contact";
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
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects/*" element={<Projects />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
