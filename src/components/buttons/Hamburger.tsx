import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";

function Hamburger() {
  return (
    <Button>
      <Bar />
      <Bar className="shorten" />
    </Button>
  );
}

const Button = styled.button`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  width: 50px;
  /* transition-duration: 600ms; */

  &:hover {
    & > div {
      background: ${mainColor.orange};
      transition: all 0.6s cubic-bezier(0.4, 0.4, 0, 1);

      &.shorten {
        transform: scale(0.6, 1);
        transform-origin: right;
      }
    }
  }
`;

const Bar = styled.div`
  width: 50px;
  max-width: 100%;
  height: 2px;
  margin: 2px 0;
  background: #000000;
`;

export default Hamburger;
