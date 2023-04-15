import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";
import nProgress from "nprogress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Loading() {
  const location = useLocation();

  useEffect(() => {
    nProgress.settings = {
      minimum: 0.08,
      easing: "linear",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleSpeed: 200,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template:
        '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    };
    nProgress.start();
    nProgress.done();
  }, [location.pathname]);

  return (
    <LoadingSection>
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
  text-align: right;

  h1 {
    letter-spacing: -0.2rem;
    padding-right: 20px;
  }
`;
