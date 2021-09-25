import React, { useEffect } from 'react'

interface ArticleProps {
    title: string
    image?: string
    body: string
    onClick?: () => void
}

const ArticleCard: React.FunctionComponent<ArticleProps> = ({ title, image, body, onClick }) => {

    useEffect(() => {
        debugger
    }, [])

    return (
        <div onClick={() => onClick()}>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p>{body}</p>
        </div>
    )
}

export default ArticleCard