class UI {

    constructor(){
        this.init()
    }

    init(){
        this.printCrytoCurrencies()
    }


    printCrytoCurrencies(){
        crptyoAPI.getCryptoCurrenciesList()
        .then(data => {
            let dataCurrency = data.CrytoCurrencies

            const select = document.querySelector('#cryptocurrency')
            

           dataCurrency.forEach(item => {
               const option = document.createElement('option')
               option.value = item.id

               option.appendChild(document.createTextNode(item.name))
               select.appendChild(option)
               
           })
            
            
        })
    }

    printError(msg){
        const div = document.createElement('div')
        div.classList.add('deep-orange', 'darken-4', 'card-panel')
        div.innerHTML= `Error : ${msg}`
        const errormsg = document.querySelector('.messages')
        errormsg.appendChild(div)

        // remove error msg after 3 sec

        setTimeout(() => {
            document.querySelector('.messages div').remove()
        },3000)

       
    }

    displayResults(result, currency){

        let lowerCurrency = 'price_' + currency.toLowerCase()

        let currencyValue = result[lowerCurrency]

        const previousResult = document.querySelector('#result > div')

        if(previousResult){
            previousResult.remove()
        }

        let Html = ''

        Html+=`
        <div class=" darken-3 card cyan">
            <div class="card-content white-text">
                <span class="card-title">Result</span>  
                <p>The Price of ${result.name} from ${currency} is $ ${currencyValue}</p>
                <p>Last Hour: ${result.percent_change_1h} %</p>      
                <p>Last Day: ${result.percent_change_24h} %</p>      
                <p>Last 7 Days: ${result.percent_change_7d} %</p>      
             </div>
        </div>
        `

        this.animationGif()

        setTimeout( () => {
            const divResult = document.querySelector('#result')
            divResult.innerHTML = Html

            // hide the gif
            document.querySelector('.spinner img').remove()

        }, 2000)

       
       
    }

    animationGif(){
        const spinGif = document.createElement('img')
        spinGif.src = 'spinner.gif'
        document.querySelector('.spinner').appendChild(spinGif)
    }
}



// deep-orange   darken-4 card-panel