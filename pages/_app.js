import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import Fonts from '../components/fonts'
import NavBar from '../components/navbar'
import VoxelDogLoader from '../components/voxel-dog-loader'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const PersistentVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const ParallaxBackground = ({ route }) => {
  const backgroundRef = useRef(null)

  useEffect(() => {
    let frameId

    const updateBackgroundPosition = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0
        const backgroundPosition = 45 + scrollProgress * 10

        if (backgroundRef.current) {
          backgroundRef.current.style.backgroundPosition = `center ${backgroundPosition}%`
        }
      })
    }

    updateBackgroundPosition()
    window.addEventListener('scroll', updateBackgroundPosition, { passive: true })
    window.addEventListener('resize', updateBackgroundPosition)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateBackgroundPosition)
      window.removeEventListener('resize', updateBackgroundPosition)
    }
  }, [route])

  return (
    <Box
      ref={backgroundRef}
      aria-hidden="true"
      position="fixed"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      opacity={0.22}
      backgroundImage="url('/images/bg.jpeg')"
      backgroundSize="110% 110%"
      backgroundPosition="center 45%"
      backgroundRepeat="no-repeat"
    />
  )
}

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, PageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ParallaxBackground route={router.asPath} />
      <Box position="relative" zIndex={1}>
        <NavBar path={router.asPath} />
        <Container maxW="container.md" pt={14}>
          <PersistentVoxelDog />
        </Container>
        <AnimatePresence mode='wait' initial={true}>
          <Component {...PageProps} key={router.route} />
        </AnimatePresence>
      </Box>
    </ChakraProvider>
  )
}

export default Website
