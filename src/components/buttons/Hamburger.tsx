import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";
import { Dispatch, SetStateAction } from "react";

interface componentProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Hamburger(props: componentProps) {
  return (
    <Button onClick={() => props.setMenuOpen(true)}>
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
  transition-duration: 600ms;

  &:hover {
    & > div {
      background: ${mainColor.orange};
      transition: all 0.3s ease-in-out;

      &.shorten {
        transform: scale(0.6, 1);
        /* transform-origin: right; */
      }
    }
  }
`;

const Bar = styled.div`
  width: 50px;
  max-width: 100%;
  height: 2px;
  margin: 2px 0 2px auto;
  background: #000000;
  transition-duration: 600ms;
  transform-origin: right;
`;

export default Hamburger;
