import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Vapourings',
  description: 'A series of half-autobiographic poems.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Vapourings</h1>
      <BlogPosts />
    </section>
  )
}
