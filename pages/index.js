import { Layout } from "../components/Layout";
import PostList from "../components/PostList";
import matter from "gray-matter";


export default function Home({title, description, posts}) {
  return (
    <Layout pageTitle={title}>
      <div>
        Hello world!
        <p>{description}</p>
        <PostList posts={posts}/>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const configData = await import("../siteconfig.json");

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))


  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};