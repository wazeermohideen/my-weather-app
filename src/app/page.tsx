'use client'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import useSearchInput from './hooks/useSearchInput'

export default function Home() {
  const { searchSuggestions, searchInput, onOptionSelect, handleInputChange, onSubmit } = useSearchInput()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 max-sm:p-5 bg-gradient-to-b from-zinc-900 to-zinc-700 animate-fade-in ">
      <div className='flex flex-col content-center items-center flex-wrap bg-gradient-to-r from-zinc-50/10 to-zinc-400/10 rounded-lg p-10 w-full max-w-3xl h-full shadow-lg border-b-4 border-sky-600'>
        <h1 className='text-4xl font-thin mb-3 animate-fade-in'>Hi there!</h1>
        <h2 className='text-md font-thin text-center mb-20 animate-fade-in'>Search a city below to get weather</h2>
        <Search 
        searchInput={searchInput}
        searchSuggestions={searchSuggestions}
        onOptionSelect={onOptionSelect}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        />
        <WeatherCard />
        <div className='flex items-end h-20 text-xs font-thin animate-fade-in'>Developed By Wazeer Mohideen</div>
      </div>
    </main>
  )
}
