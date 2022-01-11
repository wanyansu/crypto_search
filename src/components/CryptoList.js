import React from 'react'
import Crypto from './Crypto'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CryptoList = () => {
  const { cryptos, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (cryptos.length < 1) {
    return (
      <h2 className="section-title">
        no tokens were found based on your criteria
      </h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">
        Cryptocurrencies<br/>
        (Top 50 Tokens Based on Market Cap)
      </h2>
      <div className="cryptos-center">
        {cryptos.map((token) => {
          return <Crypto key={token.name} {...token} />
        })}
      </div>
    </section>
  )
}

export default CryptoList
