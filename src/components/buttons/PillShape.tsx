import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";
import React from "react";
import { Link } from "react-router-dom";

function PillShape(props: {
  children: React.ReactNode;
  link?: string;
  darktone?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) {
  const { children, link, style, type, darktone = false } = props;
  if (link) {
    return (
      <Link to={link} style={{ textDecoration: "none" }}>
        <PillButton type={type ? type : undefined} style={style} darktone={darktone}>
          {children}
        </PillButton>
      </Link>
    );
  } else {
    return (
      <PillButton type={type ? type : undefined} style={style} darktone={darktone}>
        {children}
      </PillButton>
    );
  }
}

export default PillShape;

export const PillButton = styled.button<{ darktone: boolean }>`
  width: 240px;
  height: 60px;
  padding: 0 25px;
  background: ${(props) => (props.darktone ? "black" : "none")};
  border: ${(props) => (props.darktone ? "none" : "2px solid currentColor")};
  color: ${(props) => (props.darktone ? mainColor.beige : "black")};
  font-size: 18px;
  font-weight: 700;
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => (props.darktone ? mainColor.orange : "none")};
    border-color: ${(props) => (props.darktone ? "none" : mainColor.orange)};
    color: ${(props) => (props.darktone ? "black" : mainColor.orange)};
  }
`;
