'use client'
import React from 'react'
import useSearchInput from '../hooks/useSearchInput';
import SearchSuggestions from './SearchSuggestions';
import { optionType } from '@/types';

/*
Using HyperUI Component (Open source)
link: https://www.hyperui.dev/components/application-ui/inputs
*/

type Props = {
  searchInput: string;
  searchSuggestions: [];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

function Search({ searchInput, searchSuggestions, handleInputChange, onOptionSelect, onSubmit}: Props) {
  
    return (
      <div className='w-full flex flex-col flex-wrap place-content-center'>
      <div className="relative animate-fade-in2 w-3/4">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
  
        <input
          type="text"
          id="Search"
          placeholder="Ex. Los Angeles"
          className="w-full rounded-lg bg-transparent placeholder:text-white placeholder:font-thin border-gray-200 py-2.5 pe-10 shadow-lg sm:text-sm focus:ring-sky-300 focus:border-sky-300"
          value={searchInput}
          onChange={handleInputChange}
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-white hover:text-gray-200">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      {searchInput.trim() !== '' && (
      <SearchSuggestions searchSuggestions={searchSuggestions} onSelect={onOptionSelect}></SearchSuggestions>
      )}
      </div>
    );
  }
  
  export default Search;