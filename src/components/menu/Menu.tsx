import styled from "@emotion/styled";
import { RxCross1 } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import HomeSquare from "@components/buttons/HomeSquare";
import { screenSize } from "@styles/globalStyles";

export default function Menu() {
  return (
    <Container>
      <UpperDiv>
        <HomeSquare />
        <RxCross1 size={40} className="iconHoverEffect" />
      </UpperDiv>
      <MidDiv>
        <MenuButton>
          <div className="hoverSquare" />
          <h1>About Us</h1>
        </MenuButton>
        <MenuButton>
          <div className="hoverSquare" />
          <h1>Blog</h1>
        </MenuButton>
        <MenuButton>
          <div className="hoverSquare" />
          <h1>Contact</h1>
        </MenuButton>
      </MidDiv>
      <BelowDiv>
        <div>
          <h4>
            Your life is amazing and so should your home. Take advantage of our
            services today. A modern interior tailored to your needs.
          </h4>
        </div>
        <div className="icons">
          <FaTwitter size={24} className="iconHoverEffect" />
        </div>
      </BelowDiv>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: #d04019;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const MenuButton = styled.div`
  display: flex;
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

      @media (min-width: ${screenSize.mobile}) {
        margin-top: 0;
        text-align: end;
      }
    }
  }
`;
