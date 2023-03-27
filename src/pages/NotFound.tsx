import PillShape from "@components/buttons/PillShape";
import Title from "@components/Title";
import styled from "@emotion/styled";
import { screenSize } from "@styles/globalStyles";
import { FaArrowCircleRight } from "react-icons/fa";

function NotFound() {
  return (
    <NotFoundSection>
      <Title title="Not found" />
      <div className="textArea">
        <ImageContainer>
          <img src="crossError.svg" alt="crossSVG" />
        </ImageContainer>
        <TextBox>
          <h2>
            Unfortunately, the landing page you are looking for does not exist or has been removed — Return to
            the home page or use navigation bar.
          </h2>
          <PillShape darktone link="/">
            Home page
            <FaArrowCircleRight />
          </PillShape>
        </TextBox>
      </div>
    </NotFoundSection>
  );
}

export default NotFound;

const NotFoundSection = styled.section`
  .textArea {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${screenSize.small}) {
      flex-direction: row;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 50px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;

  @media (min-width: ${screenSize.small}) {
    width: 33%;
    padding-right: 50px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  h2 {
    max-width: 850px;
    margin-bottom: 50px;
  }

  @media (min-width: ${screenSize.small}) {
    width: 67%;
    margin-top: 0;
  }
`;
