import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Article } from '../../models/Article'
import axios from 'axios'
import * as config from '../../../shared/config'
import { Routes } from '../../routes'
import ArticleCard from '@components/ArticleCard'

export type ArticleIndexViewProps = {
  data: Article[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${config.backendApiRoute}/articles`, {
    headers: {
      Accept: 'application/json',
    },
  })
  const data: Article[] = response.data

  return {
    props: {
      data,
    },
  }
}

const IndexView: React.FunctionComponent<ArticleIndexViewProps> = ({ data }) => {
  const router = useRouter()
  return (
    <div>
      <h1>test</h1>
      {data &&
        data.map((article) => {
          return (
            <ArticleCard
              key={article._id}
              title={article.title}
              body={article.body}
              image={article.mainPhoto}
              onClick={() => router.push(`${Routes.ARTICLES}/${article._id}`)}
            />
          )
        })}
    </div>
  )
}

export default IndexView
