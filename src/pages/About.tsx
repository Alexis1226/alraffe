import DetailProfile from "@components/pages/about/DetailProfile";
import { Circle } from "@components/shape/Circle";
import Title from "@components/Title";
import styled from "@emotion/styled";
import { screenSize } from "@styles/globalStyles";

function About() {
  return (
    <>
      <Title title="About me" />
      <Profile>
        <ImageBox></ImageBox>
        <TextBox>
          <h2>다양한 직군과 원활한 커뮤니케이션이 가능한 개발자입니다.</h2>
          <ProfileInfo>
            <div className="subTitle">
              <h5>서우리 (Alex Suh)</h5>
            </div>
            <BottomSide>
              <CircleBox>
                <Circle
                  size={`${window.matchMedia(`min-width: ${screenSize.primary}`).matches ? "50px" : "30px"}`}
                />
              </CircleBox>
              <ListContainer>
                {["1992.04.01", "feuri41@gmail.com", "Seoul"].map((item) => {
                  return (
                    <Row>
                      <h4>{item}</h4>
                    </Row>
                  );
                })}
              </ListContainer>
            </BottomSide>
          </ProfileInfo>
        </TextBox>
      </Profile>

      <DetailProfile />
    </>
  );
}

export default About;

const Profile = styled.section`
  margin-bottom: 60px;
`;

const ImageBox = styled.div``;
const TextBox = styled.div``;
const ProfileInfo = styled.div`
  margin-top: 50px;

  .subTitle {
    padding-bottom: 15px;
    border-bottom: 2px solid black;
  }
`;

const BottomSide = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
  }
`;

const CircleBox = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 40px;

  @media (min-width: ${screenSize.tablet}) {
    width: 20%;
  }
  @media (min-width: ${screenSize.small}) {
    width: 20%;
  }
  @media (min-width: ${screenSize.primary}) {
    width: 30%;
  }
`;

const ListContainer = styled.div`
  width: 100%;
`;

const Row = styled.div`
  padding: 10px 0 10px;
  border-bottom: 2px solid black;
  @media (min-width: ${screenSize.tablet}) {
    padding: 10px 40px 10px;
  }
`;
