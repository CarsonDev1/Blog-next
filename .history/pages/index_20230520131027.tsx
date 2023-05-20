import {getBlogs} from '@/server/blogs'
import {BlogPost} from '@/types/blog'
import {GetServerSideProps, NextPage} from 'next'

const Home = () => {
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
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
  console.log(blogs)
  return {
    props: {
      blogData: blogs,
    },
  }
}
