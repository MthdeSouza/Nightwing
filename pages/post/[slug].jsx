'use client'
import { loadPost } from "../../lib/load-post";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostHeader from "../../components/posts/PostHeader";
import PostBody from "../../components/posts/PostBody";
import { Spinner, Box } from "@chakra-ui/react";
import Layout from '../../components/layouts/main'

const Post = () => {
  const router = useRouter();
  const { query } = router;
  const slug = query.slug;

  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await loadPost(slug)
      setPost(res.post)
    }
    fetchPost()
  }, [])



  if (!post) return null

  return (
    <Layout title={post.fields.title}>
      <section className='section'>
        <div className='container'>
          <article className='prose mx-auto'>
            {router.isFallback ? (
              <Box justifySelf="center"><Spinner /></Box>
            ) : (
              <>
                <PostHeader post={post} date={post.sys?.createdAt} />
                <PostBody post={post} />
              </>
            )}
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Post
