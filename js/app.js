// intanciates the classes

const crptyoAPI = new CrptyoAPI()
const uI = new UI()

const form = document.getElementById('form')

form.addEventListener('submit', e=>{
    e.preventDefault();

    // read a currency
    const currencySelect = document.getElementById('currency').value
    // console.log(currencySelect)


    // read a Cryptocurrency
    const cryptoSelect = document.getElementById('cryptocurrency').value
    // console.log(cryptoSelect)

    // validate inputs

    if(currencySelect === '' || cryptoSelect ===''){
        uI.printError('All fields are required!')
    }else{
       
        crptyoAPI.queryApi(currencySelect, cryptoSelect)
        .then(data => {
            sendvalue = data.result[0]
            uI.displayResults(sendvalue, currencySelect)
        })
    }
})
