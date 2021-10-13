import ArticleCard from '@components/ArticleCard'
import InfoBar from '@components/InfoBar'
import Layout from '@components/Layout'
import SplashImage from '@components/splashImage'
import axios from 'axios'
import { Article } from 'models/Article'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import React from 'react'
import { Routes } from 'routes'
import config from '../../shared/config'
import { ArticleData } from 'types'

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

type IndexPageProps = {
  data: ArticleData[]
}

const Index: React.FunctionComponent<IndexPageProps> = ({ data }) => {
  const router = useRouter()

  return (
    <>
      <Layout>
        <SplashImage />
        <InfoBar />
        {data && (
          <div className="w-full flex flex-wrap px-5 justify-center">
            {data.slice(3).map((article) => {
              return (
                <div className="px-2">
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    image={article.image[0]}
                    onClick={() => router.push(`${Routes.ARTICLES}/${article.id}`)}
                  />
                </div>
              )
            })}
          </div>
        )}
      </Layout>
    </>
  )
}

export default Index
