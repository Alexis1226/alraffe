import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}

export default Layout;

const Container = styled.section`
  background: #d9d5cd;
  min-height: 100vh;
`;
