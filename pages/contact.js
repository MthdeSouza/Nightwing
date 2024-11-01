import { Container, Heading, Divider, Text, Input, HStack, FormLabel, Textarea, Box, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useColorModeValue } from '@chakra-ui/react'
// import { Field } from "@/components/ui/field"

const Works = () => (
  <Layout title="Contact">
    <Container>
      <Heading as="h2">Contact me</Heading>
      <Text>Leave your message and I will get in touch.</Text>
      <Divider my={6} />
      <HStack gap="10" width="full" display="flex" flexDir="column">

        <Box w="100%">
          <FormLabel>Name</FormLabel>
          <Input bg={useColorModeValue('#ededee', 'none')} placeholder="John Doe" variant="outline" />
        </Box>
        <Box w="100%">
          <FormLabel>Email</FormLabel>
          <Input bg={useColorModeValue('#ededee', 'none')} placeholder="me@example.com" variant="outline" />

        </Box>
        <Box w="100%">
          <FormLabel>Enter your message</FormLabel>
          <Textarea bg={useColorModeValue('#ededee', 'none')} placeholder="Got a project in mind or a question? Leave a message and let’s connect!" variant="outline" />
        </Box>
        <Button bg={useColorModeValue('#F5F5DC', '#556B2F')}>Send</Button>
      </HStack>
    </Container>
  </Layout>
)

export default Works
