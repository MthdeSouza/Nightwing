import client from './contentful';

export async function loadPost(slug) {

  try {
    const res = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug
    })

    if (!res.items || res.items.length === 0) {
      return {
        post: {}
      };
    }

    return {
      post: res.items[0],
      revalidate: 10,
    };
  } catch (error) {
    console.error("Erro ao buscar posts do Contentful:", error);
    return {
      post: {},
    };
  }
}