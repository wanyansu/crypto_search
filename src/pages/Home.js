import React from 'react'
import CryptoList from '../components/CryptoList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CryptoList />
    </main>
  )
}

export default Home
