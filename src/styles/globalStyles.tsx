import { Global, css } from "@emotion/react";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  @import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");

  html {
    font-size: 18px;
  }

  body {
    font-family: "Roboto", "Lato", sans-serif;
  }

  h1 {
    font-size: 55px;
    font-weight: 400;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
  }

  h3 {
    font-size: 23px;
    font-weight: 500;
  }

  h5 {
    font-size: 20px;
    font-weight: 700;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
