import { Container, Heading, Divider, Text, Input, HStack, FormLabel, FormControl, Textarea, Box, Button, Alert } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

const Works = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus({ success: true, error: '' });
      } else {
        const data = await response.json();
        setStatus({ success: false, error: data.message || 'Unknown error' });
      }
    } catch (error) {
      setStatus({ success: false, error: 'Error to sent email' });
    }
  };

  return (
    <Layout title="Contact">
      <Container>
        <Box as="form" onSubmit={handleSubmit} mx="auto" >
          {status.success && <Alert status="success" mb="4">Email sent!</Alert>}
          {status.error && <Alert status="error" mb="4">{status.error}</Alert>}
          <Heading as="h2">Contact me</Heading>
          <Text>Leave your message and I will get in touch.</Text>
          <Divider my={6} />
          <HStack gap="10" width="full" display="flex" flexDir="column">

            <FormControl id="name" isRequired >
              <Box w="100%">
                <FormLabel>Name</FormLabel>
                <Input
                  bg={useColorModeValue('#ededee', 'none')} placeholder="John Doe" variant="outline"
                  type="text" name="name" value={formData.name} onChange={handleChange} />
              </Box>
            </FormControl>
            <FormControl id="email" isRequired>
              <Box w="100%">
                <FormLabel>Email</FormLabel>
                <Input
                  bg={useColorModeValue('#ededee', 'none')} placeholder="me@example.com" variant="outline"
                  type="email" name="email" value={formData.email} onChange={handleChange} />

              </Box>
            </FormControl>
            <FormControl id="message">
              <Box w="100%">
                <FormLabel>Enter your message</FormLabel>
                <Textarea bg={useColorModeValue('#ededee', 'none')} placeholder="Got a project in mind or a question? Leave a message and let’s connect!" variant="outline"
                  name="message" value={formData.message} onChange={handleChange} />
              </Box>
            </FormControl>
            <Button bg={useColorModeValue('#F5F5DC', '#556B2F')} type="submit" w="full" width="full">Send</Button>
          </HStack>
        </Box>
      </Container>
    </Layout>
  )
}
export default Works
