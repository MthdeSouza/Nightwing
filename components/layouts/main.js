import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import VoxelBatLoader from '../voxel-bat-loader'
import dynamic from 'next/dynamic'

const LazyVoxelBat = dynamic(() => import('../voxel-bat'), {
  ssr: false,
  loading: () => <VoxelBatLoader />
})

const Main = ({ children, router }) => {

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home - Matheus Souza</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelBat />

        {children}
      </Container>
    </Box>
  )
}

export default Main
