'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div className="p-8 bg-zinc-200 relative min-h-screen flex flex-col">
      <div className="flex-1">
        <h1 className="text-7xl pt-16 pb-8">Boka ett rum</h1>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 mb-8">
        <button type="button" className="w-full bg-black text-white py-3 rounded-xl" onClick={() => router.push('/home')}>
          Boka
        </button>
      </div>
    </div>
  );
}
