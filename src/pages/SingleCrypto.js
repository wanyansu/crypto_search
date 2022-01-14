import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const CoinGecko = require("coingecko-api")
const CoinGeckoClient = new CoinGecko()

const SingleCrypto = () => {
  const {name} = useParams()
  const [loading, setLoading] = useState(false)
  const [cryptos, setCryptos] = useState(null)

  useEffect(() => {
    setLoading(true)
    const getCrypto = async () => {
     try {
      const response = await CoinGeckoClient.coins.fetch(`${name}`)
      const data = response.data
       if (data) {
        const {name:id, symbol:ticker, market_cap_rank:rank, liquidity_score:lScore, image:pic, sentiment_votes_up:sentiment, description:info} = data
        const newCrypto = {id, ticker, rank, lScore, pic, sentiment, info}
        setCryptos(newCrypto)
      } else {
        setCryptos(null)
      }
      setLoading(false)
     } catch (err) {
       console.log(err)
       setLoading(false)
     }
    }
    getCrypto()
  }, [name])
  if(loading){
    return <Loading/>
  }
  if(!cryptos){
    return <h2 className="setion-title">no crypto to display</h2>
  }
  const {id, ticker, rank, lScore, pic, sentiment, info} = cryptos
  return (
    <section className="section crypto-section">
      <Link to='/' className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{id}</h2>
      <div className="token">
        <img src={pic.large} alt={id} />
        <div className="token-info">
          <p>
            <span className="token-data">Token: </span>
            {id}
          </p>
          <p>
            <span className="token-data">Symbol: </span>
            {ticker}
          </p>
          <p>
            <span className="token-data">Token Description: </span>
            {info.en}
          </p>
          <p>
            <span className="token-data">Market Cap Ranking: </span>
            {rank}
          </p>
          <p>
            <span className="token-data">Liquidity Score: </span>
            {lScore}
          </p>
          <p>
            <span className="token-data">Up Votes Sentiment Percentage: </span>
            {sentiment}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCrypto
