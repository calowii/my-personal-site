// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout pageTitle="Chloe Strachan">
      <p>Full Stack Software Developer</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage