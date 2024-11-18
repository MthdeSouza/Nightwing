import client from './contentful';

export async function loadPosts() {
  try {
    const res = await client.getEntries({ content_type: 'post' });

    if (!res.items || res.items.length === 0) {
      return {
        props: { posts: [] },
      };
    }

    const posts = res.items.map((item) => ({
      id: item.sys.id,
      titulo: item.fields.titulo,
      slug: item.fields.slug,
      conteudo: item.fields.conteudo,
    }));
    return {
      props: {
        posts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Erro ao buscar posts do Contentful:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}