import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

function HomeSquare(props: {
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
  hoverColor?: string;
}) {
  const { setMenuOpen, hoverColor = "black" } = props;

  return (
    <Link to={"/"}>
      <Square
        onClick={() => setMenuOpen && setMenuOpen(false)}
        hoverColor={hoverColor}
      />
    </Link>
  );
}

const Square = styled.div<{ hoverColor: string }>`
  width: 20px;
  height: 20px;
  background-color: black;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    transform: rotate(45deg);
  }
`;

export default HomeSquare;
