##Top 50 Market Cap Cryptocurrency Search

A quick search interface to search any cryptocurrencies with the top 50 market caps globally. Data is collected in JSON format using the CoinGecko API.

_Hosted via Netlify_

[Top 50 Crypto Search](top50-crypto-search.netlify.app)

#### Languages and Libraries

- Javascript
- React js
- HTML
- CSS

#### Technologies Used

- Async/Await
- ES6
- UseState
- UseEffect
- ContextAPI/UseContext
- React-router-dom

#### Notes

- Since the free basic plan of CoinGecko API is used, there is a limit of 50 requests per minute of fetching the realtime data from CoinGecko.
- The `snapshot.js` file is executed to save and export the `top50Token.json` file to record the top 50 cryptocurrencies in JSON format. This JSON file is later utilised as a matching criteria for the search term we input so that only tokens that are ranked in the top 50 will be shown in the website.
- The fetch method will only be triggered when the search terms have more than two letters. This is to restrict the attempts of fetching.
