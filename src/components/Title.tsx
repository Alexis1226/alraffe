import styled from "@emotion/styled";

function Title(props: { title: string }) {
  const { title } = props;

  return (
    <TitleBox>
      <h1>— {title}</h1>
    </TitleBox>
  );
}

export default Title;

const TitleBox = styled.div`
  padding-bottom: 25px;
  margin-bottom: 50px;
  border-bottom: 5px solid black;
  text-align: end;
`;
