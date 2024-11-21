import ContentfulImage from './ContentfulImage'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import Paragraph from '../paragraph'
import { Box } from '@chakra-ui/react'

const Avatar = ({ name, picture }) => {
  return (
    <Box display="flex" alignItems="center" mb={6} >
      <ChakraAvatar size="lg"
        name='Dan Abrahmov' src={picture?.fields.file.url} />
      <Paragraph >   {name}</Paragraph>
    </Box>
  )
}

export default Avatar
