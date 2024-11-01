import { Container, Box, Heading, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Link as NextLink } from 'next/link'
import { Link, Button } from '@chakra-ui/react'
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

import timelapse from '../components/utils/timelapse.json'

const Page = () => {

  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("#ffffff40", "#ffffff10")} p={3} mb={6} align="center" mt={2}>
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

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          I am a skilled Front-end Developer with over five years of experience in diverse industries, including e-commerce and cloud computing. My work focuses on delivering high-quality, scalable web solutions with an emphasis on accessibility, design systems, and responsive UX/UI. With a solid foundation in both front-end and back-end development and an MBA in Front-end Development, I am dedicated to building efficient user experiences and continually enhancing my expertise in the tech field.
          {/* <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . */}
        </Paragraph>
        <Box align="center" my={4}>

          <Link as={NextLink} passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} bg={useColorModeValue('#F5F5DC', '#556B2F')}>
              My Portfolio
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        {timelapse.map((item) => {
          return (
            <BioSection>
              <BioYear>{item.endDate}</BioYear>
              {item.description}
            </BioSection>
          )
        })}
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Photography, Artificial Intelligence, Playing video games and Soccer.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
