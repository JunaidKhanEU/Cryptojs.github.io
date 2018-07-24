class CrptyoAPI{

    // get all currecies
     async getCryptoCurrenciesList(){
        const url =  await fetch('https://api.coinmarketcap.com/v1/ticker/')
        const CrytoCurrencies = await url.json()
        return {CrytoCurrencies} 
        
           
    }

    // query API for rates

    async queryApi(currency, crypto){
        
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${crypto}/?convert=${currency}`)

        const result = await url.json()

        return {result}
    }
}