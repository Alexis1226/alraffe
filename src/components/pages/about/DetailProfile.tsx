import styled from "@emotion/styled";
import { mainColor, screenSize } from "@styles/globalStyles";

function DetailProfile() {
  const ContextList = [
    {
      subject: "JS & TS .",
      desc: ["JavaScript와 TypsScript사용하는 개발에 익숙합니다."],
    },
    {
      subject: "React & NextJs .",
      desc: [
        "함수형 프로그래밍에 익숙합니다.",
        "ReactHooks를 이용해 공통 로직을 모듈화할 수 있습니다.",
        "Redux-toolkit을 사용해 상태관리를 한 경험이 있습니다.",
        "Yarn을 선호합니다.",
      ],
    },
    {
      subject: "Styling .",
      desc: [
        "CSS-in-JS 툴에 익숙합니다.",
        "Emotion에 익숙합니다.",
        "TailWind를 사용한 경험이 있습니다.",
        "Material UI를 사용한 경험이 있습니다.",
        "Animation효과에 흥미를 느낍니다.",
      ],
    },
    {
      subject: "ETC .",
      desc: [
        "Git을 사용해 형상관리를 합니다.",
        "GitFlow원칙에 따라 Github & Gitlab을 사용한 경험이 있습니다.",
        "Slack, Discord를 사용합니다.",
        "Jira, Confluence, Notion을 이용해 스케줄을 관리하고 문서화한 경험이 있습니다.",
      ],
    },
  ];
  return (
    <DetailProfileSection>
      <Contents>
        <h1>— TECH &amp;</h1>
        <h1>EXPERIENCE —</h1>
        <h2>TECH STACK</h2>
        <TechContainer>
          {ContextList.map((item) => (
            <TechOneRow>
              <h4>{item.subject}</h4>
              <ul>
                {item.desc.map((eachDesc) => (
                  <li>{eachDesc}</li>
                ))}
              </ul>
            </TechOneRow>
          ))}
        </TechContainer>
      </Contents>
    </DetailProfileSection>
  );
}

export default DetailProfile;

const DetailProfileSection = styled.section`
  background: #141414;
  color: ${mainColor.beige};
  margin: 0 -20px;
  padding: 60px 20px;

  @media (min-width: ${screenSize.small}) {
    padding: 120px 20px;
  }
`;

const Contents = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h1:not(:first-child) {
    border-top: 5px solid ${mainColor.beige};
  }

  h2 {
    margin: 50px 0 0;
  }
`;

const TechContainer = styled.div``;

const TechOneRow = styled.div`
  padding: 50px 0;

  :not(:first-child) {
    padding: 50px 0;
    border-top: 2px solid ${mainColor.beige};
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    margin-top: 30px;
    line-height: 1.4;
  }

  @media (min-width: ${screenSize.tablet}) {
    display: flex;

    h4 {
      width: 50%;
      padding-right: 100px;
      box-sizing: border-box;

      @media (min-width: ${screenSize.small}) {
        text-align: right;
      }
    }

    ul {
      margin-top: 0;
      width: 50%;
    }
  }
`;
