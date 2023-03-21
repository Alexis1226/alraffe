import PillShape from "@components/buttons/PillShape";
import { Circle } from "@components/shape/Circle";
import Title from "@components/Title";
import styled from "@emotion/styled";
import { screenSize } from "@styles/globalStyles";
import { useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Thank from "@components/pages/contact/Thank";

function Contact() {
  const [isShow, setIsShow] = useState(false);
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          if (result.text === "OK") setIsShow(true);
        },
        (error) => {
          alert("Error!");
          console.error("error", error.text);
        }
      );
  };

  return (
    <>
      {isShow && <Thank setIsShow={setIsShow} />}
      <Title title="Contact" />
      <Content>
        <div className="introduction">
          <p>I am a resident of Seoul, it is here that I create the most projects with experience.</p>
        </div>
        <MessageArea>
          <h1>
            Send
            <br /> Message
          </h1>
          <p>
            If you want to ask us a question or receive an offer, or maybe arrange a coffee and talk — Use the
            contact form below and we will write back to you with information.
          </p>
          <Subtitle>
            <h5>Contact form</h5>
          </Subtitle>
          <FormBox>
            <CircleBox>
              <Circle size="30px" />
            </CircleBox>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="E-mail" />
              <textarea name="message" id="textarea" cols={30} rows={6} placeholder="Put message here" />
              <PillShape type="submit" style={{ marginTop: "20px" }} darktone>
                Send Message
                <FaArrowCircleRight />
              </PillShape>
            </form>
          </FormBox>
        </MessageArea>
      </Content>
    </>
  );
}

export default Contact;

const Content = styled.section`
  @media (min-width: ${screenSize.small}) {
    display: flex;
    margin: 50px 0 60px;
  }

  .introduction > p {
    width: 100%;
    font-size: 20px;

    @media (min-width: ${screenSize.small}) {
      width: 310px;
      font-size: 22px;
      margin-right: 70px;
    }
    @media (min-width: ${screenSize.primary}) {
      font-size: 24px;
      margin-right: 100px;
    }
  }
`;

const MessageArea = styled.div`
  margin-top: 80px;
  @media (min-width: ${screenSize.small}) {
    margin-top: 0;
  }

  h1 {
    line-height: 1;
    letter-spacing: -0.2rem;
    margin-bottom: 40px;

    @media (min-width: ${screenSize.tablet}) {
      margin-bottom: 75px;
    }
  }
`;

const Subtitle = styled.div`
  margin: 50px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid black;
`;

const FormBox = styled.div`
  @media (min-width: ${screenSize.tablet}) {
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    @media (min-width: ${screenSize.tablet}) {
      width: 70%;
    }

    input {
      height: 60px;
      padding: 10px 0;
      background: none;
      border-bottom: 2px solid black;
      font-size: 20px;
    }

    textarea {
      font-family: inherit;
      padding: 15px 0;
      background: none;
      border-bottom: 2px solid black;
      font-size: 20px;
      margin-bottom: 20px;
      resize: none;
    }
  }
`;

const CircleBox = styled.div`
  @media (min-width: ${screenSize.tablet}) {
    width: 20%;
  }
`;
