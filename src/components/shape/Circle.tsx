import styled from "@emotion/styled";

export const Circle = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: #000;
  border-radius: 999px;
`;
