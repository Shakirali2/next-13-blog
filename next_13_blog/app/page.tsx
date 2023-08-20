import Image from 'next/image'
import { posts } from '../data/posts'
import Link from 'next/link'

type Post = {
  id: string,
  title: string,
  date: string
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello World
      </div>
      <div>
        {posts.map(({id, title, date}: Post) => (
          <>
          <Link href="/posts">{title}</Link>
          <br />
          <p>{date}</p>
          <br />
          </>
        ))}
      </div>
      <Link href="/posts">
        Posts
         </Link> 
      <Link href="/account">
        Account
         </Link>
      </main>
  )
}