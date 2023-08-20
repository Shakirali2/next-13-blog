'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Posts() {
  const router = useRouter();
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
         <h1>Post</h1>
        </div>
        
        <Link href="/">
        Back to Home
         </Link> 
         {/* <button type="button" onClick={() => router.push('/')}> 
          Back to Home
         </button> */}
        </main>
    )
  }