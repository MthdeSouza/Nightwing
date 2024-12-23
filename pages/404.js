import NextLink from "next/link";
import Layout from '../components/layouts/main'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link
} from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Layout title="Not Found">
      <Container>
        <Heading as="h1"> Not Found</Heading>
        <Text>The page you are looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <Link as={NextLink} href={`/`} >
            <Button bg={useColorModeValue('#F5F5DC', '#556B2F')}>
              Return to home
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound