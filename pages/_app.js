import React from 'react'
import App, { Container } from 'next/app'
import { Grommet, Dark } from 'grommet'
import theme from '../theme'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Grommet theme={theme}>
          <Component {...pageProps} />
        </Grommet>
      </Container>
    )
  }
}

export default MyApp
