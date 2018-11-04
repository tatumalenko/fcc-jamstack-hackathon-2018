import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../css/layout.css';
import '../css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: '0 auto',
              }}
            >
              {children}
            </div>
            <footer class="page-footer black">
              <div class="container">
                <div class="row">
                  <div class="col l6 s12">
                    <h5 class="white-text">Gitbit</h5>
                    <p class="grey-text text-lighten-4">
                      A 2018 Montreal freeCodeCamp Hackathon project
                    </p>
                  </div>
                  <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Team Members</h5>
                    <ul>
                      <li>
                        <a
                          class="grey-text text-lighten-3"
                          href="https://github.com/gvdavidtran"
                        >
                          David Tran
                        </a>
                      </li>
                      <li>
                        <a
                          class="grey-text text-lighten-3"
                          href="https://github.com/anhtm"
                        >
                          Minh Anh Trinh
                        </a>
                      </li>
                      <li>
                        <a
                          class="grey-text text-lighten-3"
                          href="https://github.com/tatumalenko"
                        >
                          Tatum Alenko
                        </a>
                      </li>
                      <li>
                        <a
                          class="grey-text text-lighten-3"
                          href="https://github.com/catalinp86"
                        >
                          Catalin Popescu
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="container">© 2018 Copyright - Gitbit</div>
              </div>
            </footer>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
