export default function Home() {
  return (
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-600">
      <title>Home Page</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]"> Welcome to Dev Blog </h1>
          <p>
            {' '}
            A full-stack blog made with Next.js, TailwindCSS, Github GraphQL{' '}
          </p>
        </div>
      </section>
    </main>
  )
}
