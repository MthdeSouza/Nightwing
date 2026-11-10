import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { gtmInjection } from '../../lib/gtm'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-PN274Z4X',
};

const Main = ({ title, children }) => {
  React.useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])

  const headerTitle = `${title} - Matheus Souza`

  return (
    <Box as="main" pb={8}>
      <Head>
        <link rel="icon" href="/tree.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{headerTitle}</title>
        <div dangerouslySetInnerHTML={{ __html: gtmInjection }} />
        <div dangerouslySetInnerHTML={{
          __html: `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JM0V6XL9ZT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JM0V6XL9ZT');
</script>` }} />

      </Head>

      <Container maxW="container.md">
        {children}
      </Container>
    </Box>
  )
}

export default Main
