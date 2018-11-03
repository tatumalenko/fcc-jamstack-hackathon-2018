import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello, Jamstack world!</h1>
    <p>Welcome my first Jamstack web app.</p>
    <p>Come take a look at my <a href="https://tatumalenko.github.io/"> Github page</a>.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
