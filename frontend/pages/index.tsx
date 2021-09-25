import { GetStaticProps } from 'next';
import React from 'react'
import { Article } from '../../shared/types'
import axios from 'axios'
import * as config from '../../shared/config'

interface ArticleJsonResponse {
  data?: Article[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${config.backendApiRoute}/articles`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Article[] = response.data;

  return {
    props: {
      data,
    },
  };
};

const IndexView = ({ data }: ArticleJsonResponse) => {
  return (
      <div>
        <h1>My Blog</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  )
}

export default IndexView