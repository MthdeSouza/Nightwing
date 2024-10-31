import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm an front-end developer based in Campinas!
      </Box>

      <Box display={{ md: 'flex' }}> </Box>
      <Box flexGrow={1}></Box>
      <Heading as="h2" variant="page-title">
        Matheus Souza
      </Heading>
      <p>Front-end Developer</p>
    </Container>
  )
}

export default Page
