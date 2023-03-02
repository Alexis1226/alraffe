import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";
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
  position: relative;
  background: ${mainColor.beige};
  min-height: 100vh;
`;
