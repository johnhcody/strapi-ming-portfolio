import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'
import config from '../../../shared/config'
import { Article } from 'models/Article'

export type ArticleDetailViewProps = {
  data: Article;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`${config.backendApiRoute}/articles`);
  const articles: Article[] = await response.data;

  const paths = articles.map((article) => {
    return {
      params: { id: String(article._id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axios.get(`${config.backendApiRoute}/articles/${params.id}`);

  return {
    props: {
      data,
    },
  };
};

const PostDetailView = ({ data }: ArticleDetailViewProps) => {
  const router = useRouter();

  return (
    <>
        <button onClick={() => router.back()}>Back</button>
        <h1>{data.title}</h1>
        <p>{data.createdAt}</p>
        <p>{data.body}</p>
    </>
  );
};

export default PostDetailView