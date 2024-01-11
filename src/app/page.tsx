import Image from 'next/image'
import Search from './components/Search'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-b from-zinc-900 to-zinc-700">
      <div className='flex flex-col content-center items-center flex-wrap bg-gradient-to-r from-zinc-50/10 to-zinc-400/10 rounded-lg p-10 w-full max-w-3xl h-full shadow-lg'>
        <h1 className='text-4xl font-thin mb-3 animate-fade-in'>Hi there!</h1>
        <h2 className='text-md font-thin mb-10 animate-fade-in'>Search a city below to get weather</h2>
        <Search/>
      </div>
    </main>
  )
}
