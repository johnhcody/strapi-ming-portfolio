import Header from '../../shared/header'
import Head from 'next/head'
import React from 'react'


const BaseLayout:React.FC= ({ children }) => {

  return (
        <>
          <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
          </Head>
          <Header/>  
          {children}
        </>
    )
}

export default BaseLayout;