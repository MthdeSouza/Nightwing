import { Container, Heading, Divider, Text, Card, CardHeader, CardBody, Box, SimpleGrid, CardFooter, Button, Spinner } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState, useEffect } from 'react'
import { loadPosts } from '../lib/load-posts';
import { useColorModeValue } from '@chakra-ui/react';

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await loadPosts()
      setPosts(res.props.posts)

    }
    fetchPosts()
  }, [])

  const cardBg = useColorModeValue('#F5F5DC', '#556B2F');
  const buttonBorder = useColorModeValue('black 1px solid', 'white 1px solid');
  const buttonBg = useColorModeValue('var(--chakra-colors-whiteAlpha-200)', null);

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
                <Card key={post.id} bg={cardBg}>
                  <CardHeader>
                    <Heading size="md">{post.titulo}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{documentToReactComponents(post.conteudo)}"(link abaixo em desenvolvimento)"</Text>
                  </CardBody>
                  <CardFooter>
                    <Button href={`/blog/${post.slug}`}
                      border={buttonBorder}
                      bg={buttonBg}
                    >Leia mais</Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          }

        </Box>
      </Container>
    </Layout>
  );
};


export default Posts;
