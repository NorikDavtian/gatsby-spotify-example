import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'

import Header from './header'

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const Layout = ({ children, data }) => (
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
        />

        <Header siteTitle={data.site.siteMetadata.title} />

        <Container>
          <Grid relaxed stackable>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <Menu vertical fluid>
                <LinkedItem to='/' exact>Home</LinkedItem>
                <LinkedItem to='/page-2'>Second Page</LinkedItem>
                <LinkedItem to='/404'>404 Example Page</LinkedItem>
              </Menu>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={8}>
              {children}
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
