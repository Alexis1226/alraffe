import PillShape from "@components/buttons/PillShape";
import { Circle } from "@components/shape/Circle";
import styled from "@emotion/styled";
import { getQuote, IQuote } from "@features/quote";
import Loading from "@components/Loading";
import { mainColor, screenSize } from "@styles/globalStyles";
import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [quote, setQuote] = useState<IQuote>();

  async function saveQuote() {
    try {
      const data = await getQuote();
      setQuote(data);
    } catch (error) {
      console.error("quoteError:", error);
    }
  }

  // 페이지 최초 렌더링 시 실행
  useEffect(() => {
    saveQuote();
  }, []);

  // Do not render until the first quote is loaded
  if (!quote) return <Loading />;

  return (
    <Container>
      <InnerBox>
        <TopSide className="sitemap">
          <Circle size="35px" />
        </TopSide>
        <BottomSide className="sitemap">
          <div>
            <p>Alraffe.</p>
          </div>
          <div>
            <ul>
              <Link to={"/"}>
                <li>Home page</li>
              </Link>
              <Link to={"/about"}>
                <li>About me</li>
              </Link>
              <Link to={"/projects"}>
                <li>Projects</li>
              </Link>
              <Link to={"/blog"}>
                <li>Blog</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </BottomSide>
      </InnerBox>
      <InnerBox>
        <TopSide className="linkArea">
          <PillShape link="/contact">
            Contact Now
            <FaArrowCircleRight />
          </PillShape>
        </TopSide>
        <BottomSide className="linkArea">
          <div>{quote?.content}</div>
          <IconBox>
            <FaTwitter onClick={() => window.open("https://twitter.com/alraffe", "_blank")} />
          </IconBox>
        </BottomSide>
      </InnerBox>
    </Container>
  );
}

export default Footer;

const Container = styled.section`
  margin: 70px 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px 10px;

  @media (min-width: ${screenSize.small}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InnerBox = styled.div``;

const TopSide = styled.div`
  display: flex;
  height: 95px;
  align-items: flex-end;
  border-bottom: 5px solid black;
  padding-bottom: 30px;

  &.sitemap {
    justify-content: flex-start;
  }

  &.linkArea {
    justify-content: flex-end;
  }
`;

const BottomSide = styled.div`
  display: grid;
  padding-top: 30px;
  grid-template-columns: 1fr 1fr;

  &.sitemap {
    margin: 0 0 0 auto;
  }

  &.linkArea {
    margin: 0 auto 0 0;
  }

  /* 왼쪽 영역 */
  & p {
    font-size: 32px;
  }

  & > div > ul {
    /* reset link style */
    a {
      color: #000;
      text-decoration: none;
      outline: none;
      transition: all 0.3s ease-in-out;
    }
    a:hover,
    a:active {
      text-decoration: none;
      color: ${mainColor.orange};
      background-color: #f59000;
    }

    & > li {
      font-size: 20px;
      line-height: 1.4;
    }
  }

  @media (min-width: ${screenSize.small}) {
    max-width: 640px;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${mainColor.orange};
    }
  }
`;
