import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import CalendarHeatMap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import './heatmap.css'

const IndexPage = () => (
  <Layout>
    <h1>Hello, Jamstack world!</h1>
    <p>Welcome my first Jamstack web app.</p>
    <p>
      Come take a look at my{' '}
      <a href="https://tatumalenko.github.io/"> Github page</a>.
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <CalendarHeatMap
      startDate={new Date('2018-01-01')}
      endDate={new Date('2018-12-31')}
      values={[
        { date: '2018-01-01', count: 1 },
        { date: '2018-01-22', count: 2 },
        { date: '2018-01-30', count: 2555 },
        // ...and so on
      ]}
      classForValue={value => {
        if (!value) {
          return 'color-empty'
        }
        return `color-scale-${value.count}`
      }}
    />
    <p>bla bla bla </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
