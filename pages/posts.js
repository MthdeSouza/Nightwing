import { Container, Heading, Divider, Text, Card, CardHeader, CardBody, Box, SimpleGrid, CardFooter, Button, Spinner, Link } from '@chakra-ui/react';
import Layout from '../components/layouts/main'
import { useState, useEffect } from 'react'
import { loadPosts } from '../lib/load-posts';
import { useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link'
import ContentfulImage from '../components/ui/ContentfulImage';

const CardItem = ({ post }) => {
  const cardBg = useColorModeValue('#F5F5DC', '#556B2F');
  const buttonBorder = useColorModeValue('black 1px solid', 'white 1px solid');
  const buttonBg = useColorModeValue('var(--chakra-colors-whiteAlpha-200)', null);

  return (
    <Card key={post.id} bg={cardBg}>
      <CardHeader>
        <Heading size="md">{post.fields.title}</Heading>
      </CardHeader>
      <Box mb={6} pl={6} pr={6}>
        <ContentfulImage
          alt={`Cover Image for ${post.fields.title}`}
          src={post.fields.coverImage?.fields.file.url}
          width={post.fields.coverImage?.fields.file.details.image.width}
          height={post.fields.coverImage?.fields.file.details.image.height}
        />
      </Box>
      <CardBody>
        <Text>{(post.fields.excerpt).substring(0, 155)}...</Text>
      </CardBody>
      <CardFooter>
        <Link
          as={NextLink}
          href={`/post/${post.fields.slug}`}
          p={2}
        >
          <Button
            border={buttonBorder}
            bg={buttonBg}
          >Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await loadPosts()
      setPosts(res.props.posts)

    }
    fetchPosts()
  }, [])


  return (
    <Layout title="Posts">
      <Container>
        <Box mx="auto">
          <Heading as="h2">My Posts</Heading>
          <Divider my={6} />
          {posts.length === 0 || !posts ? <Spinner size="xl"
            left="50%"
            ml="calc(0px - var(--spinner-size) / 2)"
            position="fixed" />
            :
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
              {posts.map((post) => (
                <CardItem post={post} key={post.id} />
              ))}
            </SimpleGrid>
          }

        </Box>
      </Container>
    </Layout>
  );
};

export default Posts;
