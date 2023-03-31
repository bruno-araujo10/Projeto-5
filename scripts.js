const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.07
const euro = 5.51

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValue = document.getElementById("real-value")
    const currencyValueText = document.getElementById("dolar-value")

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais / dolar)

    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais / euro)
    }
};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.svg"
    }
    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

