import {getBlogs} from '@/server/blogs'
import {BlogPost} from '@/types/blog'
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = ({
  blogData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className="flex flex-col items-center w-screen h-screen overflow-auto bg-zinc-800 text-neutral-300 font-poppins">
      <title>Home Page</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem] text-primary">
            ⍟ Welcome to Dragon Ball Blog ⍟
          </h1>
          <p>
            A full-stack blog made with Next.js, TailwindCSS, Github GraphQL
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center text-[1.15rem] mt-12">
        <div className="flex gap-3 mb-12">
          {blogData.map((blog: BlogPost) => {
            return (
              <div
                key={blog.id}
                className="max-w-[28em] max-h-[20em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
              >
                {blog.title}
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
  console.log(blogs)
  return {
    props: {
      blogData: blogs,
    },
  }
}
