import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import About from "@pages/About";
import Blog from "@pages/Blog";
import Contact from "@pages/Contact";
import Layout from "@components/layout/Layout";
import Loading from "@components/Loading";
import Projects from "@pages/Projects";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
