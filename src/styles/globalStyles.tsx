import { Global, css } from "@emotion/react";

export const screenSize = {
  primary: "1600px",
  small: "1140px",
  tablet: "840px",
  mobile: "540px",
  mini: "320px",
};

export const mainColor = {
  orange: "#D04019",
  beige: "#D9D5CD",
};

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  @import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");

  html {
    font-size: 18px;
  }

  body {
    font-family: "Roboto", "Lato", sans-serif;
    background: ${mainColor.beige};
  }

  h1 {
    font-size: 55px;
    font-weight: 400;

    @media (min-width: ${screenSize.tablet}) {
      font-size: 85px;
    }
    @media (min-width: ${screenSize.small}) {
      font-size: 125px;
    }
    @media (min-width: ${screenSize.primary}) {
      font-size: 165px;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 400;

    @media (min-width: ${screenSize.small}) {
      font-size: 38px;
    }
    @media (min-width: ${screenSize.primary}) {
      font-size: 45px;
    }
  }

  h3 {
    font-size: 23px;
    font-weight: 500;
  }

  h4 {
    font-size: 20px;
    font-weight: 500;

    @media (min-width: ${screenSize.small}) {
      font-size: 22px;
    }
    @media (min-width: ${screenSize.primary}) {
      font-size: 24px;
    }
  }

  h5 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 20px;

    @media (min-width: ${screenSize.small}) {
      font-size: 22px;
    }
    @media (min-width: ${screenSize.primary}) {
      font-size: 24px;
    }
  }

  section,
  div,
  button {
    box-sizing: border-box;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  button {
    background: none;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.4, 0.4, 0, 1);
  }

  /* icon mouse and color hover effect */
  .iconHoverEffect {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: white;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
