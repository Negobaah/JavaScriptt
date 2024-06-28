const convertButton = document.querySelector(".convert-button");
const currencySelectTo = document.querySelector(".currency-select-to");
const currencySelectFrom = document.querySelector(".currency-select-from");
const currencyR1 = document.querySelector(".currency-r1");
const currencyValueR1 = document.querySelector(".currency-value-r1");
const currencyValueUs2 = document.querySelector(".currency-value-us2");
const currencyUs2 = document.querySelector(".currency-us2");
const currencyImage = document.querySelector(".currency-img");
const currencyImage1 = document.querySelector("currency-img1");

function convertValues() {
    const inputCurrencyValues = parseFloat(document.querySelector(".input-currency").value);
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bitcoinToday = 4.2;



    if (currencySelectTo.value == "dolar") {
        currencyValueUs2.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues / dolarToday);
    }
    if (currencySelectTo.value == "euro") {
        currencyValueUs2.textContent = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues / euroToday);
    }
    if (currencySelectTo.value == "bitcoin") {
        currencyValueUs2.textContent = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "₿"
        }).format(inputCurrencyValues / bitcoinToday);
    }

    currencyValueR1.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues);
}

function changeCurrency() {
    if (currencySelectFrom.value == "dolar") {
        currencyR1.textContent = "Dólar";
        currencyImage1.src = "./assets/Dolar.png";
    }
    if (currencySelectTo.value == "dolar") {
        currencyUs2.textContent = "Dólar";
        currencyImage.src = "./assets/Dolar.png";
    }
    if (currencySelectTo.value == "euro") {
        currencyUs2.textContent = "Euro";
        currencyImage.src = "./assets/Euro.png";
    }
    if (currencySelectTo.value == "bitcoin") {
        currencyUs2.textContent = "BITCOIN";
        currencyImage.src = "./assets/Bitcoin.png";
    }
}

currencySelectFrom.addEventListener("change", changeCurrency);
currencySelectTo.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);


