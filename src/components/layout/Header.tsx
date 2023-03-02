import Hamburger from "@components/buttons/Hamburger";
import HomeSquare from "@components/buttons/HomeSquare";
import Menu from "@components/menu/Menu";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
      <Section>
        <HomeSquare hoverColor="#d04019" />
        <Hamburger setMenuOpen={setMenuOpen} />
      </Section>
    </>
  );
}

export default Header;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
