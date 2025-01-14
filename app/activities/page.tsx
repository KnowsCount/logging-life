import { ActivityPosts } from 'app/components/activity-posts'

export const metadata = {
  title: 'Activities',
  description: 'All my activities.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Activities</h1>
      <ActivityPosts />
    </section>
  )
}
