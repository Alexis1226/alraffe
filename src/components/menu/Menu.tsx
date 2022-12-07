import styled from "@emotion/styled";
import HomeSquare from "../buttons/HomeSquare";
import { RxCross1 } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";

export default function Menu() {
  return (
    <Container>
      <UpperDiv>
        <HomeSquare />
        <RxCross1 size={40} className="iconHoverEffect" />
      </UpperDiv>
      <MidDiv>
        <MenuButton>
          <h1>About Us</h1>
        </MenuButton>
        <MenuButton>
          <h1>Blog</h1>
        </MenuButton>
        <MenuButton>
          <h1>Contact</h1>
        </MenuButton>
      </MidDiv>
      <BelowDiv>
        <h4>
          Your life is amazing and so should your home. Take advantage of our
          services today. A modern interior tailored to your needs.
        </h4>
        <FaTwitter size={24} className="iconHoverEffect" />
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
  border-bottom: 5px solid;
  text-align: end;
  text-transform: uppercase;
  cursor: pointer;
`;
const BelowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 40px;

  & > h4 {
    width: 50%;
  }
`;
