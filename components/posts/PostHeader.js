import { Box, Heading, Link } from '@chakra-ui/react'
import Paragraph from '../paragraph'
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'
const PostHeader = ({ post, date }) => {
  const { title, coverImage, author, excerpt } = post.fields
  const excerptParts = excerpt.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g)

  return (
    <>
      <Box mb={6}>
        <Heading as="h2" variant="section-title" mr={4}>
          {title}
        </Heading>

        <Paragraph>
          {' '}
          <DateComponent dateString={date} />
        </Paragraph>
      </Box>
      <Avatar name={author?.fields.name} picture={author?.fields.picture} />
      <Box mb={6}>
        <Paragraph style={{ whiteSpace: 'pre-line' }}>
          {excerptParts.map((part, index) => {
            const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/)

            return markdownLink ? (
              <Link key={index} href={markdownLink[2]} color="teal.500">
                {markdownLink[1]}
              </Link>
            ) : (
              part
            )
          })}
        </Paragraph>
      </Box>
      <Box mb={6} pl={12} pr={12}>
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
