import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-JM0V6XL9ZT"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
          <div id="root"></div>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main key={123} />
          <NextScript />
        </body>
      </Html>
    )
  }
}
