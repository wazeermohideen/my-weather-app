import { useState, ChangeEvent } from 'react';
import { optionType } from '@/types';

const BASE_URL = 'http://api.openweathermap.org';

const useSearchInput = () => {
    const [searchInput, setSearchInput] = useState<string>('')
    const [searchSuggestions, setSearchSuggestions] = useState<[]>([])
    const [location, setLocation] = useState<optionType | null>(null)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
     
      if(e.target.value !== ''){
        searchFetch(e.target.value)
      }
    }

    const searchFetch = async (searchInput: string) => {
      fetch(
        `${BASE_URL}/geo/1.0/direct?q=${searchInput.trim()}&limit=5&lang=en&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setSearchSuggestions(data))
        .catch((e) => console.log(e));
    }

    const onOptionSelect = (option: optionType) => {
      setLocation(option)
      console.log(option)
    }

    const onSubmit = () => {
      if(!location) return
    }

  
    return {
      searchInput,
      handleInputChange,
      searchSuggestions,
      onOptionSelect,
      onSubmit
    }
  };
  
  export default useSearchInput;