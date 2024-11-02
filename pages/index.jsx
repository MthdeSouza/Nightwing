import { Icon, Container, Box, Heading, Image, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Link as NextLink } from 'next/link'
import { Link, Button } from '@chakra-ui/react'
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import timelapse from '../components/utils/timelapse.json'
import { GridItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
const Page = () => {

  return (
    <Layout>
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

            <Link as={NextLink}>
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
          {timelapse.map((item, i) => {
            return (
              <BioSection key={i}>
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
            Art, Music, Photography, Artificial Intelligence, Playing Soccer and video games.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="a3" variant="section-title">
            On the web
          </Heading>
          <List mt={4}>
            <ListItem display="flex" flexDir="column">
              <Link href="https://github.com/MthdeSouza" target="_blank">
                <Button varitn="ghost" color={useColorModeValue('#F5F5DC', '#556B2F')} bg="none" leftIcon={<Icon as={IoLogoGithub} />} >@MthDeSouza</Button>
              </Link>
              <Link href="https://www.linkedin.com/in/matheusdsouza/" target="_blank">
                <Button varitn="ghost" color={useColorModeValue('#F5F5DC', '#556B2F')} bg="none" leftIcon={<Icon as={IoLogoLinkedin} />} >@matheusdsouza</Button>
              </Link>
            </ListItem>
          </List>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page
