import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";
import nProgress from "nprogress";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Loading() {
  const [prevLocation, setPrevLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLocation(location.pathname);
    nProgress.start();
    window.scrollTo(0, 0);
    if (location.pathname === prevLocation) {
      setPrevLocation("");
    }
  }, [location]);

  useEffect(() => {
    nProgress.done();
  }, [prevLocation]);

  //     positionUsing: "",

  return (
    <LoadingSection>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
        <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
      </head>
      <h1>LOADING</h1>
    </LoadingSection>
  );
}

export default Loading;

const LoadingSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  color: ${mainColor.beige};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    letter-spacing: -0.2rem;
    padding-right: 20px;
    margin: 32px 0;

  }
`;
