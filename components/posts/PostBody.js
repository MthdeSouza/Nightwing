import RichText from './RichText'
import styles from './PostBody.module.css'

const PostBody = ({ post }) => {
  const { content } = post.fields

  return (
    <div className={styles.richText}>
      <RichText content={content} />
    </div>
  )
}

export default PostBody
