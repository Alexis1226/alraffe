import Hamburger from "@components/buttons/Hamburger";
import HomeSquare from "@components/buttons/HomeSquare";
import Menu from "@components/menu/Menu";
import styled from "@emotion/styled";
import { IQuote, getQuote } from "@features/quote";
import { useLayoutEffect, useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  useLayoutEffect(() => {
    if (!quote) saveQuote();
  }, []);

  return (
    <>
      {menuOpen && <Menu quote={quote} setMenuOpen={setMenuOpen} />}
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
