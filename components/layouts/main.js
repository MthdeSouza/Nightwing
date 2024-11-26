import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import VoxelDogLoader from '../voxel-dog-loader'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { gtmInjection } from '../../lib/gtm'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-PN274Z4X',
};

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ title, children }) => {
  const [voxelDog, setVoxelDog] = React.useState(null)
  const router = useRouter();

  React.useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    setVoxelDog(<LazyVoxelDog />)
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

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {voxelDog}

        {children}
      </Container>
    </Box>
  )
}

export default Main
