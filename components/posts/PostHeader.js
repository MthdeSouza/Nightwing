import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'
import Avatar from '../ui/Avatar'
import Paragraph from '../paragraph'
import { Heading, Box } from '@chakra-ui/react'
const PostHeader = ({ post, date }) => {
  const { title, coverImage, author, excerpt } = post.fields
  console.log("post.fields", post.fields)
  return (
    <>
      <Box mb={6}>
        <Heading as='h2' variant='section-title' mr={4}>
          {title}
        </Heading>

        <Paragraph> <DateComponent dateString={date} /></Paragraph>
      </Box>
      <Avatar name={author?.fields.name} picture={author?.fields.picture} />
      <Box mb={6} >
        <Paragraph>{excerpt}</Paragraph>
      </Box>
      <Box mb={6} >
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage?.fields.file.url}
          width={coverImage?.fields.file.details.image.width}
          height={coverImage?.fields.file.details.image.height}
        />
      </Box>
    </>
  )
}

export default PostHeader
