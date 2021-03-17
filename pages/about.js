import Head from 'next/head'
import { Layout } from '../components/Layout'

export default function About({title}) {
  return (
    <Layout pageTitle={title}>
      <div>
            About
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const configData = await import("../siteconfig.json");

  return {
    props: {
      title: configData.default.title,
    },
  };
};