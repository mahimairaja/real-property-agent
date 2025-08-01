'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

function Ping() {
  const { data, error } = useSWR('/api/ping', fetcher)
  if (error) return <span style={{color:'red'}}>error</span>
  if (!data) return <span>loading…</span>
  return <strong>{data.message}</strong>
}

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div style={{textAlign: 'center', marginTop: '25vh'}}>
          <h1 className="text-4xl font-bold mb-4">Real Property Agent</h1>
          <p className="text-lg mb-2">FastAPI says:</p>
          <Ping />
        </div>
      </main>
    </div>
  )
}
