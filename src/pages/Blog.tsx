import Title from "@components/Title";
import styled from "@emotion/styled";
import { mainColor, screenSize } from "@styles/globalStyles";
import axios from "axios";
import { useEffect } from "react";
import { Suspense, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

interface post {
  categoryId: string;
  comments: string;
  date: string;
  id: string;
  postUrl: string;
  title: string;
  trackbacks: string;
  visibility: string;
}

function Blog() {
  const [postList, setPostList] = useState<post[]>([]);
  const callBlogList = async () => {
    const result = await axios.get(`https://www.tistory.com/apis/post/list`, {
      params: {
        access_token: `d330a823699da65ec7b8485b779cf8bd_8ce369ece1c9e01a5749bdae2afec15f`,
        output: "json",
        blogName: "alexisw",
        page: 1,
      },
    });
    setPostList(result.data.tistory.item.posts);
  };

  useEffect(() => {
    callBlogList();
  }, []);

  return (
    <BlogSection>
      <Title title="Blog" />
      <Suspense fallback={<p>Loading...</p>}>
        <h2>
          Writing is everywhere. You can hardly imagine your life without proper writing skills used in
          everyday life for many different purposes. Earlier, people dealt with handwriting. These days,
          almost all the writing processes are digitized, and we work with computers. But the importance of
          writing skills is still present and will never go away.
        </h2>
        <Subtitle>
          <h5>Latest Post</h5>
        </Subtitle>
        <PostsContainer>
          {postList.map((item: post) => (
            <Post key={item.id}>
              <p className="date">{item.date.substring(0, 16)}</p>
              <span className="title">{item.title}</span>
              <a href={item.postUrl}>
                <div className="linkBox">
                  Read more <FaArrowCircleRight size={18} style={{ marginLeft: "15px" }} />
                </div>
              </a>
            </Post>
          ))}
        </PostsContainer>
      </Suspense>
    </BlogSection>
  );
}

export default Blog;

const BlogSection = styled.section`
  h2 {
    width: 100%;
    max-width: 850px;
  }
`;

const Subtitle = styled.div`
  margin: 50px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid black;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2%;
  grid-row-gap: 24px;

  @media (min-width: ${screenSize.tablet}) {
    grid-template-columns: 49% 49%;
  }
`;

const Post = styled.article`
  margin: 10px 0 20px;

  .date {
    font-size: 18px;
    line-height: 1;
    margin: 20px 0 10px;
  }
  .title {
    margin-bottom: 10px;
    font-size: 26px;
    line-height: 1.2;
  }
  a {
    color: #000;
    text-decoration: none;
    outline: none;
    transition: all 0.3s ease-in-out;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: ${mainColor.orange};
    background-color: #f59000;
  }
  .linkBox {
    width: 100%;
    max-width: 310px;
    margin-top: 25px;
    padding-top: 10px;
    border-top: 2px solid black;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
