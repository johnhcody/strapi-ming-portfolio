import BaseLayout from '@components/layout/baseLayout';
import Footer from '@components/layout/footer';
import SplashImage from '@components/splashImage';
import React from 'react'
import styles from '../styles/Home.module.scss'

const Index: React.FunctionComponent = () => {
      
  return (
              <>
              <BaseLayout>
                  <SplashImage />
                  <Footer />
              </BaseLayout>
              </>
      )
  }
  
  
  
  export default Index