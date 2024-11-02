import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import VoxelDogLoader from '../voxel-dog-loader'
import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {

  return (
    <Box as="main" pb={8}>
      <Head>
        <link rel="icon" href="/tree.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home - Matheus Souza</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}
      </Container>
    </Box>
  )
}

export default Main
