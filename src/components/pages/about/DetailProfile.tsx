import styled from "@emotion/styled";
import { mainColor, screenSize } from "@styles/globalStyles";

interface listProps<DescriptionType> {
  subject: string | string[];
  desc: Array<DescriptionType>;
}

function DetailProfile() {
  const TechList: listProps<string>[] = [
    {
      subject: "JS & TS .",
      desc: ["JavaScript와 TypsScript를 사용하는 개발에 익숙합니다."],
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
        "Slack, Discord로 소통합니다.",
        "Jira, Confluence, Notion을 이용해 스케줄을 관리하고 문서화한 경험이 있습니다.",
      ],
    },
  ];

  const ExpList: listProps<listProps<string> | string>[] = [
    {
      subject: ["엔빌", "2021.08.23 ~ 2022.11.30"],
      desc: [
        {
          subject: "ArtsCloud 전시 웹사이트",
          desc: [
            "NextJS를 활용해 메인페이지,소셜로그인, 회원가입, 계정 찾기 페이지를 구현했습니다.",
            "사이트 내 Infinite Scroll과 반응형을 구현했습니다.",
            "Clip-path를 활용한 컴포넌트 개발했습니다.",
          ],
        },
        {
          subject: "ArtsCloud 전시장 내 체험 웨이팅 웹페이지 개발",
          desc: [
            "핸드폰번호로 대기줄에 등록하는 기능을 구현했습니다.",
            "순서에 가까워지면 알림 카톡이 발송되는 기능을 구현했습니다.",
          ],
        },
      ],
    },
    {
      subject: ["개발자의 품격 2기", "2021.04 ~ 2021.07"],
      desc: [
        "프론트엔드 공부를 독학하며, 팀 프로젝트를 진행했습니다.",
        "React와 Redux-toolkit을 사용해 아르바이트 생의 스케줄과 인수인계를 관리하는 Albalog프로젝트를 진행했습니다.",
      ],
    },
    {
      subject: ["JAVA 기반 웹 개발자 양성 과정", "2020.07 ~ 2021.02"],
      desc: ["HTML, CSS, JAVA, Spring을 학습하며 웹 개발에 전반적인 기본기를 익힐 수 있었습니다."],
    },

    {
      subject: ["해외인턴 Ellen Clothing", "2016.02 ~ 2017.02"],
      desc: ["미국 LA에서 근무하며 바이어와 공장 사이에서 소통하는 역할을 담당했습니다."],
    },

    { subject: ["서경대학교 경영학부 국제통상학", "2011.03 ~ 2017.08"], desc: [] },
  ];

  const ExpDescComponent = (props: { exp: listProps<listProps<string> | string> }) => {
    const { exp } = props;

    if (exp.subject[0] === "엔빌") {
      return (
        <div className="rightSide">
          {exp.desc.map((oneDesc: any, index: number) => (
            <DropdownDetails key={index} height={oneDesc.desc.length}>
              <summary>{oneDesc?.subject}</summary>
              <ul>
                <li>{oneDesc.desc[0]}</li>
                {oneDesc.desc[1] && <li>{oneDesc.desc[1]}</li>}
                {oneDesc.desc[2] && <li>{oneDesc.desc[2]}</li>}
              </ul>
            </DropdownDetails>
          ))}
        </div>
      );
    }
    return (
      <div className="rightSide">
        <ul>
          {exp.desc.map((item: any) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <DetailProfileSection>
      <Contents>
        <h1>— TECH &amp;</h1>
        <h1>EXPERIENCE —</h1>
        <TechContainer>
          <h2>TECH STACK</h2>
          {TechList.map((item) => (
            <OneRow>
              <h4>{item.subject}</h4>
              <ul className="rightSide">
                {item.desc.map((eachDesc) => {
                  if (typeof eachDesc === "string") return <li>{eachDesc}</li>;
                  else return <></>;
                })}
              </ul>
            </OneRow>
          ))}
        </TechContainer>
        <ExperienceContainer>
          <h2>EXPERIENCE</h2>
          {ExpList.map((item: listProps<listProps<string> | string>) => (
            <OneRow>
              <h4>
                {item.subject[0]}
                <br />
                {item.subject[1]}
              </h4>
              <ExpDescComponent exp={item} />
            </OneRow>
          ))}
        </ExperienceContainer>
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
`;

const TechContainer = styled.div`
  h2 {
    margin: 50px 0 0;
  }
`;

const OneRow = styled.div`
  padding: 50px 0;

  :not(:first-of-type) {
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
      line-height: 1.4;

      @media (min-width: ${screenSize.small}) {
        text-align: right;
      }
    }
    .rightSide {
      width: 50%;
    }
    ul {
      margin-top: 0;
    }
  }
`;

const ExperienceContainer = styled.div``;

const DropdownDetails = styled.details<{ height: number }>`
  cursor: pointer;
  line-height: 1.4;
  transition: height 0.6s ease-in-out;
  overflow: hidden;
  margin-top: 30px;

  &:not([open]) {
    height: 2em;
  }

  &[open] {
    height: ${(props) => `calc(${props.height} * 2.5em)`};
  }

  @media (min-width: ${screenSize.tablet}) {
    margin-top: 0;
  }
`;
