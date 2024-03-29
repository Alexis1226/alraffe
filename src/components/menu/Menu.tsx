import styled from "@emotion/styled";
import { RxCross1 } from "react-icons/rx";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import HomeSquare from "@components/buttons/HomeSquare";
import { Link } from "react-router-dom";
import { mainColor, screenSize } from "@styles/globalStyles";
import { Dispatch, SetStateAction } from "react";
import { IQuote } from "@features/quote";

interface menuProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  quote: IQuote | undefined;
}

export default function Menu(props: menuProps) {
  return (
    <Container>
      <UpperDiv>
        <HomeSquare setMenuOpen={props.setMenuOpen} />
        <RxCross1 onClick={() => props.setMenuOpen(false)} size={40} className="iconHoverEffect" />
      </UpperDiv>
      <MidDiv>
        <Link
          onClick={() => props.setMenuOpen(false)}
          style={{
            textDecoration: "none",
          }}
          to={"/about"}
        >
          <MenuButton>
            <div className="hoverSquare" />
            <h1>About me</h1>
          </MenuButton>
        </Link>
        <Link onClick={() => props.setMenuOpen(false)} style={{ textDecoration: "none" }} to={"/projects"}>
          <MenuButton>
            <div className="hoverSquare" />
            <h1>Projects</h1>
          </MenuButton>
        </Link>
        <Link onClick={() => props.setMenuOpen(false)} style={{ textDecoration: "none" }} to={"/blog"}>
          <MenuButton>
            <div className="hoverSquare" />
            <h1>Blog</h1>
          </MenuButton>
        </Link>
        <Link onClick={() => props.setMenuOpen(false)} style={{ textDecoration: "none" }} to={"/contact"}>
          <MenuButton>
            <div className="hoverSquare" />
            <h1>Contact</h1>
          </MenuButton>
        </Link>
      </MidDiv>
      <BelowDiv>
        <div>
          <h4>{props.quote?.content}</h4>
        </div>
        <div className="icons">
          <FaLinkedin
            size={24}
            className="iconHoverEffect"
            onClick={() =>
              window.open("https://www.linkedin.com/in/%EC%9A%B0%EB%A6%AC-%EC%84%9C-958732230/", "_blank")
            }
          />
          <FaSquareXTwitter
            size={24}
            className="iconHoverEffect"
            onClick={() => window.open("https://twitter.com/alraffe", "_blank")}
          />
        </div>
      </BelowDiv>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: ${mainColor.orange};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
`;

const UpperDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MidDiv = styled.div`
  height: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const MenuButton = styled.button`
  display: flex;
  width: 100%;
  gap: 40px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  border-bottom: 5px solid;
  text-align: end;
  text-transform: uppercase;

  .hoverSquare {
    width: 0px;
    height: 10px;
    background: black;
    transition: all 1.2s ease-in-out;

    @media (min-width: ${screenSize.small}) {
      height: 15px;
    }
  }

  &:hover > .hoverSquare {
    width: 50px;
    @media (min-width: ${screenSize.tablet}) {
      width: 150px;
    }
  }
`;

const BelowDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0 40px;

  & > div {
    width: 100%;
    line-height: 1.4;

    @media (min-width: ${screenSize.mobile}) {
      width: 50%;
      min-width: 250px;
    }

    &.icons {
      margin-top: 30px;
      text-align: start;

      & > svg {
        margin-left: 8px;
      }

      @media (min-width: ${screenSize.mobile}) {
        margin-top: 0;
        text-align: end;
      }
    }
  }
`;
