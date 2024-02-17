import React, { useState } from 'react'
import SearchContext from './SearchContext'

const SearchContextProvider = ({children}) => {
    const [textSubmitted, setTextSubmitted] = useState('')

  return (
    <SearchContext.Provider value={{textSubmitted, setTextSubmitted}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider