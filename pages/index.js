import { Container, Box, Heading, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("#FFFACD", "#556B2F")} p={3} mb={6} align="center" mt={2}>
        Hello, I'm an front-end developer based in Campinas!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matheus Souza
          </Heading>

          <p>Front-end Developer</p>
        </Box>
        <Box textAlign="center" w={{ base: "100%", md: "unset" }}>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            mt={{ base: 4, md: 0 }}
          >
            <Image
              alt="Profile image"
              src="/images/matheus.jpg"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
