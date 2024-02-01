'use client'
import React from 'react'
import { optionType } from '@/types';

type props = {
    searchSuggestions: []
    onSelect: (option: optionType) => void
}

const SearchSuggestions = ({ searchSuggestions, onSelect }: props): JSX.Element => {
    return(
    <ul className='bg-zinc-600 rounded-lg shadow-md'>
        {searchSuggestions.map((option: optionType, index: number) => (
            <li className='p-2 pl-3 hover:bg-zinc-500 rounded-md ' key={option.name + '-' + index}>
                <button className='w-full flex' onClick={() => onSelect(option)}>
                    {option.name}, {option.state ? option.state + ' - ' : ''}{option.country}
                </button>
            </li>
        ))}
    </ul>
    );
        }


export default SearchSuggestions