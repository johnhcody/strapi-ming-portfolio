import React, { useState } from 'react'
import Image from 'next/image'
import { StrapiImageData } from 'types'
import config from '../../../shared/config'

interface ArticleProps {
  title: string
  image?: StrapiImageData
  imageHeight?: number
  imageWidth?: number
  onClick?: () => void
}

const ArticleCard: React.FunctionComponent<ArticleProps> = ({
  title,
  image,
  imageHeight,
  imageWidth,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  const handleClick = () => {
    if (onClick) onClick()
  }
  return (
    <div
      className="max-w-sm overflow-hidden cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full h-96 relative">
        {hover && (
          <p className="text-white font-bold relative top-48 left-28 z-20">
            <i className="far fa-eye"></i> View Post
          </p>
        )}
        {imageHeight && imageWidth ? (
          <Image
            src={`${config.backendApiRoute}${image.url}`}
            height={imageHeight}
            width={imageWidth}
          ></Image>
        ) : (
          <Image src={`${config.backendApiRoute}${image.url}`} layout={'fill'}></Image>
        )}
      </div>
      <div className="px-6 w-80 py-4 text-center">
        <h1 className="text-gray-700 text-base">{title}</h1>
      </div>
    </div>
  )
}

export default ArticleCard
