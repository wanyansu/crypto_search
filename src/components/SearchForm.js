import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setPhrase } = useGlobalContext()
  const searchValue = React.useRef('') 

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchCrypto = () => {
    setPhrase(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cryptocurrencies below:</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCrypto}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
