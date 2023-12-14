import styled from "@emotion/styled";
import { mainColor, screenSize } from "@styles/globalStyles";
import { FaArrowCircleRight } from "react-icons/fa";

const Item = ({
  title,
  description,
  thumbnail,
  link,
}: {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}) => {
  return (
    <ProjectItem>
      <img src={thumbnail} alt={title} />
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="linkBox">
          Read more <FaArrowCircleRight size={18} style={{ marginLeft: "15px" }} />
        </div>
      </a>
    </ProjectItem>
  );
};

export default Item;

const ProjectItem = styled.div`
  align-items: flex-start;
  background: rgba(0, 0, 0, 0);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 10px 0px 25px 0px;
  width: 49%;
  max-width: 49%;

  img {
    flex: none;
    height: 240px;
    width: 100%;
    max-width: 100%;
    object-position: 50%;
    object-fit: cover;
  }

  a {
    display: flex;
    color: inherit;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;
    margin: 20px 0 0;
    max-width: 100%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    @media (min-width: ${screenSize.small}) {
      font-size: 32px;
    }

    &:hover {
      color: ${mainColor.orange};
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    margin: 25px 0px 0px 0px;
    text-align: left;
    width: auto;
    max-width: 100%;
    justify-content: flex-start;
  }

  .linkBox {
    font-size: 18px;
    width: 100%;
    max-width: 310px;
    margin-top: 4px;
    padding-top: 10px;
    border-top: 2px solid black;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
