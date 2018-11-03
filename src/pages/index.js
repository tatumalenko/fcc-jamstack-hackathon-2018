import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div class="container">
      <div>
        <h2>Enter your Git Accounts</h2>
        <form>
          Username:
          <input type="text" name="username" />
          <br />
          Github Username:
          <input type="text" name="github-username" />
          <br />
          Gitlab Username:
          <input type="text" name="gitlab-username" />
          <br />
          <button class="btn waves-effect waves-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
