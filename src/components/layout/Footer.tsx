import PillShape from "@components/buttons/PillShape";
import styled from "@emotion/styled";
import Loading from "@pages/Loading";
import {
  mainColor,
  screenSize,
} from "@styles/globalStyles";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaArrowCircleRight,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface IQuote {
  author?: string;
  authorSlug?: string;
  content: string;
  dateAdded?: string;
  dateModified?: string;
  length?: number;
  tags?: string[];
  _id?: string;
}

function Footer() {
  const [data, setData] = useState<IQuote | null>(null);

  async function updateQuote() {
    try {
      const response = await axios.get(
        "https://api.quotable.io/random"
      );
      console.log("response", response);
      const { status, statusText, ...data } = response;
      if (status !== 200)
        throw new Error(`${status} ${statusText}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  // Do not render until the first quote is loaded
  if (!data) return <Loading />;

  return (
    <Container>
      <InnerBox>
        <TopSide className="sitemap">
          <Circle />
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
          <div>{data?.content}</div>
          <IconBox>
            <FaTwitter
              onClick={() =>
                window.open(
                  "https://twitter.com/alraffe",
                  "_blank"
                )
              }
            />
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

const Circle = styled.div`
  width: 35px;
  height: 35px;
  background: #000;
  border-radius: 999px;
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
