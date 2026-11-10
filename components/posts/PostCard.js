import Link from 'next/link'
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostCard = ({ post, date }) => {
  const { title, slug, excerpt, coverImage, author } = post.fields
  console.log('excerpt', excerpt)
  return (
    <li>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage?.fields.file.url}
            width={coverImage?.fields.file.details.image.width}
            height={coverImage?.fields.file.details.image.height}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <div>
            <DateComponent dateString={date} />
          </div>
          <p>{excerpt}</p>
          <Avatar name={author?.fields.name} picture={author?.fields.picture} />
        </div>
      </Link>
    </li>
  )
}

export default PostCard
