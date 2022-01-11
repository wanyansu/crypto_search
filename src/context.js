import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
const CoinGecko = require("coingecko-api")
const CoinGeckoClient = new CoinGecko()
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [phrase, setPhrase] = useState('coin')
  const [cryptos, setCryptos] = useState([])

  const fetchToken = useCallback(async () => {
    setLoading(true)
    try {
      let topToken = require('./top50Token.json');
      let tokenSearch = []
      for (let i = 0; i < 50; i++) {
        if ((topToken[i].id.includes(phrase) || topToken[i].symbol.includes(phrase)) && phrase.length >= 2) {
          tokenSearch.push(topToken[i].id)
        }
      }
      let finalTokens = []
      for (let i = 0; i < tokenSearch.length; i++) {
        const response = await CoinGeckoClient.coins.fetch(`${tokenSearch[i]}`)
        const singleToken = response.data
        finalTokens.push(singleToken)
      }
      if (finalTokens) {
        const newTokens = finalTokens.map(token => {
          const {id, symbol, description, image, market_cap_rank, } = token
        return {name:id, ticker:symbol, info:description, pic:image, rank: market_cap_rank,}
        })
        setCryptos(newTokens)
      } else {
        setCryptos([])
      }
      setLoading(false)
    }catch(error) {
      console.log(error)
      setLoading(false)
    }
  },[phrase])

  useEffect(() => {
    fetchToken()
  }, [phrase, fetchToken])
  
  return (
  <AppContext.Provider
  value={{
    loading,
    cryptos,
    setPhrase,
  }}
  >
    {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
