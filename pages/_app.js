import { ChakraProvider, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Fonts from '../components/fonts'
import NavBar from '../components/navbar'
import VoxelDogLoader from '../components/voxel-dog-loader'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const PersistentVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, PageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <PersistentVoxelDog />
      </Container>
      <AnimatePresence mode='wait' initial={true}>
        <Component {...PageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default Website
