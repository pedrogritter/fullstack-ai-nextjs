import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = await auth()
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] m-auto">
        <h1 className="text-6xl mb-4">Journaling App</h1>
        <p className="text-2xl text-white/60 mb-4">
          The best app to track your mood
        </p>
        <div>
          <Link href={userId ? '/journal' : '/new-user'}>
            <button className="bg-blue-600 p-4 rounded-lg text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
