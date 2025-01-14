import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`My name is Zechen (Chris) Chen. You may call me Chris. I am not terrified to hear you call me Chris. In fact, everyone calls me Chris. How do you do?`}
      </p>
      <p className='mb-4'>{`I write, I study, I binge read 19th-century etiquette handbooks (ladies' and gentlemen's); I cannot seem to ride a bike no matter how hard I try.`}</p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
