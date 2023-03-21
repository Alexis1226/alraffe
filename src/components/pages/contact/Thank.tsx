import Title from "@components/Title";
import styled from "@emotion/styled";
import { mainColor, screenSize } from "@styles/globalStyles";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function Thank(props: { setIsShow: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { setIsShow } = props;

  return (
    <ThankSection>
      <MessageBox>
        <Title title="Thanks" />
        <div className="textBox">
          <h2>Your message has been sent positively. We will reply to you as soon as possible.</h2>
        </div>
        <CustomPillShapeButton
          onClick={() => {
            window.location.reload();
            setIsShow(false);
          }}
        >
          Thank you
          <FaArrowCircleRight />
        </CustomPillShapeButton>
      </MessageBox>
    </ThankSection>
  );
}

export default Thank;

const ThankSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px;
  padding: 20px 20px 40px;
  max-width: 1080px;
  background: #141414;
  color: ${mainColor.beige};
  text-align: right;

  .textBox {
    padding-bottom: 25px;
    letter-spacing: -0.08rem;
    @media (min-width: ${screenSize.tablet}) {
      font-size: 85px;
      width: 67%;
    }
  }
`;

const CustomPillShapeButton = styled.button`
  background: none;
  margin-bottom: 40px;
  width: 240px;
  height: 60px;
  padding: 0 25px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 999px;
  border: 2px solid currentColor;
  color: currentColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: none;
    color: ${mainColor.orange};
  }
`;
