import Title from "@components/Title";
import Item from "@components/pages/projects/item";
import { projects } from "@data/projects";
import styled from "@emotion/styled";
import { screenSize } from "@styles/globalStyles";

function Projects() {
  return (
    <>
      <Title title="Projects" />
      <Content>
        <aside className="introduction">
          <p>Check my project with detailed descriptions.</p>
        </aside>
        <ProjectList>
          {projects.map(({ title, description, thumbnail, link }, num) => {
            return <Item title={title} description={description} thumbnail={thumbnail} link={link} />;
          })}
        </ProjectList>
      </Content>
    </>
  );
}

export default Projects;

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

const ProjectList = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  flex: none;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;

  @media (min-width: ${screenSize.small}) {
    width: calc(100% - 380px);
    margin: 0;
  }
`;
