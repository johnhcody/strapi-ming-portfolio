import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="flex flex-col h-screen">
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Layout
