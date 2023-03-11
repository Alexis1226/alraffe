import styled from "@emotion/styled";
import { mainColor, screenSize } from "@styles/globalStyles";

function DetailProfile() {
  const ContextList = [
    {
      subject: "ejflskdjf",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nobis adipisci quos laudantium, consectetur enim molestiae ab impedit, repellat nemo reprehenderit? Velit ullam, accusantium inventore quod similique perspiciatis autem assumenda.",
    },
    {
      subject: "dskjflsdkjf",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam magni deleniti perspiciatis tenetur a recusandae, illum beatae ad sapiente repudiandae mollitia exercitationem sequi debitis numquam quod ut? Fuga, beatae.",
    },
  ];
  return (
    <DetailProfileSection>
      <Contents>
        <h1>— TECH &amp;</h1>
        <h1>EXPERIENCE —</h1>
        <TechContainer>
          {ContextList.map((item) => (
            <TechOneRow>
              <h4>{item.subject}</h4>
              <p>{item.desc}</p>
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
`;

const TechContainer = styled.div`
  margin-top: 80px;
`;

const TechOneRow = styled.div`
  padding: 50px 0;

  :not(:first-child) {
    border-top: 2px solid ${mainColor.beige};
  }

  p {
    margin-top: 30px;
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

    p {
      width: 50%;
    }
  }
`;
