import Hamburger from "@components/buttons/Hamburger";
import HomeSquare from "@components/buttons/HomeSquare";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Section>
      <Link to="/">
        <HomeSquare hoverColor="#d04019" />
      </Link>
      <Hamburger />
    </Section>
  );
}

export default Header;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
