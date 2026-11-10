import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as NextLink } from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/main'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import timelapse from '../components/utils/timelapse.json'

const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#ffffff40', '#ffffff10')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm an front-end developer based in Campinas!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Matheus Souza
            </Heading>

            <p>Front-end Developer</p>
          </Box>
          <Box textAlign="center" w={{ base: '100%', md: 'unset' }}>
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
              <Image alt="Profile image" src="/images/matheus.jpg" />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I'm a Front-end Engineer with over five years of experience building
            web applications across different industries, including e-commerce
            and cloud computing. My work goes beyond writing code — I enjoy
            exploring technical solutions, contributing to architectural
            decisions, and turning complex business requirements into scalable,
            intuitive, and accessible user experiences.
          </Paragraph>

          <Paragraph>
            Currently at C&A, I contribute to the development of enterprise
            applications and data-driven tools that support large-scale retail
            operations. I'm passionate about software engineering, frontend
            architecture, design systems, and emerging technologies, always
            looking for opportunities to learn, experiment, and build meaningful
            solutions.
          </Paragraph>

          <Paragraph>
            I also hold an MBA in Front-end Development and enjoy exploring new
            ideas through personal projects and technology.
          </Paragraph>
          <Box align="center" my={4}>
            <Link
              as={NextLink}
              href="https://www.linkedin.com/in/matheusdsouza/"
            >
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('#F5F5DC', '#556B2F')}
              >
                My LinkedIn
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
            Progressive instrumental rock and video game soundtracks while
            working, pagode with family, and metalcore, J-rock and rap when
            listening on my own. I'm also into street photography, a lifelong
            Corinthians supporter, and games like Dota 2, Balatro, Inscryption
            and Final Fantasy XII. Always curious about AI and emerging
            technologies.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="a3" variant="section-title">
            On the web
          </Heading>
          <List mt={4}>
            <ListItem display="flex" flexDir="column">
              <Link href="https://github.com/MthdeSouza" target="_blank">
                <Button
                  varitn="ghost"
                  color={useColorModeValue('#1A202C', '#556B2F')}
                  bg="none"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @MthDeSouza
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/matheusdsouza/"
                target="_blank"
              >
                <Button
                  varitn="ghost"
                  color={useColorModeValue('#1A202C', '#556B2F')}
                  bg="none"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @matheusdsouza
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
