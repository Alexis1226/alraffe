import styled from "@emotion/styled";
import { mainColor } from "@styles/globalStyles";
import { Link } from "react-router-dom";

function PillShape(props: {
  children: React.ReactNode;
  link: string;
}) {
  const { children, link } = props;
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <PillButton>{children}</PillButton>
    </Link>
  );
}

export default PillShape;

const PillButton = styled.button`
  width: 240px;
  height: 60px;
  padding: 0 25px;
  border: 2px solid #000;
  font-size: 18px;
  font-weight: 700;
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${mainColor.orange};
    color: ${mainColor.orange};
  }
`;
