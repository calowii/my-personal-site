import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Chloe Strachan">
      <p>Full Stack Software Developer</p>
      <StaticImage
        alt="Girl with half and half hair and eyeliner"
        src="../images/cartoon_me.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage