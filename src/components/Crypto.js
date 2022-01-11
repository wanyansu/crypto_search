import React from 'react'
import { Link } from 'react-router-dom'

const Crypto = ({pic, name, ticker, rank}) => {
  return (
    <article className="crypto">
      <div className="img-container">
        <img src={pic.large} alt={name}/>
      </div>
      <div className="crypto-footer">
        <h3>Token: {name.charAt(0).toUpperCase()+name.slice(1)}</h3>
        <h4>Symbol: {ticker.toUpperCase()}</h4>
        <h4>Market Cap Ranking: {rank}</h4>
        <Link to={`/crypto/${name}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  )
}

export default Crypto
