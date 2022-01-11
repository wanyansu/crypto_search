import CoinGecko from "coingecko-api"
import fs from "fs"

const CoinGeckoClient = new CoinGecko()
const fetchData = async () => {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC
  }
  const tokenList = []
  const response = await CoinGeckoClient.coins.markets({params})
  for (let i = 0; i < 50; i++) {
    tokenList.push({id: response.data[i].id, symbol: response.data[i].symbol})
  }
  fs.writeFileSync("./top50Tokens.json", JSON.stringify(tokenList, null, 2) , 'utf-8')
}
fetchData()