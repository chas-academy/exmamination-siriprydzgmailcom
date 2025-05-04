//länkning mellan js-variabler och HTML-inputfält
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balance = document.getElementById("balance");


// arrayer för incomes och expenses
let incomes = []
let expenses = []


// funktion som lägger till transaktionsobjekt i någon av arrayerna beroende på parametern type:s värde
function addTransaction(type){
    const transactionName = desc.value //kopplar ihop variabeln transactionName med det soms skrivs i desc-fältet
    const transactionAmount = Number(amount.value) // kopplar ihop variabeln transactionAmount med det soms skrivs i amount-fältet och gör det till ett nummer

    
//En ny transaktion skapas i form av ett objekt
const newTransaction = {
    description: transactionName,
    amount: transactionAmount,
    type: type
}

//Om transaktionen har parametern/typen "expense" läggs den till i expenses-arrayen
//Om den har parametern/typen income läggs den till i incomes-arrayen
if(newTransaction.type === "expense"){
expenses.push(newTransaction)
} else if(newTransaction.type === "income"){
incomes.push(newTransaction)
}


//nollställ input-värdet
desc.value = ""
amount.value = ""


//kör funktionerna som skapar alla HTML-listor
renderExpenses()
renderIncome()
renderTransactions()
renderBalance()
}


// funktion som skapar HTML-listan för expenses
function renderExpenses(){
    //Nollställer listan i HTML-koden
expenseList.innerHTML =""
    //loopar igenom expenses-arrayen och skapar li-element utifrån objekten i arrayen
    // i li-elementet skrivs en sträng innehållande description och amount
    // li-elementen blir children till ul-elementet "expenseList"
    for (let expense of expenses) {
        const li = document.createElement("li")
        li.textContent = `${expense.description} - ${expense.amount} kr`  //varje expense är ett objekt från expenses-arrayen som loopen kört igenom
        expenseList.appendChild(li)
    }  
}


// funktion som skapar HTML-listan för income
function renderIncome(){
    //Nollställer listan i HTML-koden
incomeList.innerHTML =""
    //loopar igenom incomes-arrayen och skapar li-element utifrån objekten i arrayen
    // i li-elementet skrivs en sträng innehållande description och amount
    // li-elementen blir children till ul-elementet "incomeList"
    for (let income of incomes) {
        const li = document.createElement("li")
        li.textContent = `${income.description} - ${income.amount} kr`  //varje income är ett objekt från incomes-arrayen som loopen kört igenom
        incomeList.appendChild(li)
    }  
}



//funktionen som lägger till och visar transactions
function renderTransactions(){
        //Nollställer listan i HTML-koden
    transactionList.innerHTML =""
        //loopar igenom incomes- och expenses-arrayen och skapar li-element utifrån objekten i arrayen
        // i li-elementet skrivs en sträng innehållande description och amount
        // li-elementen blir children till ul-elementet "transactionList"
        for (let income of incomes) {
            const li = document.createElement("li")
            li.textContent = `${income.description} - ${income.amount} kr`  //varje income är ett objekt från incomes-arrayen som loopen kört igenom
            transactionList.appendChild(li)
        }  
        for (let expense of expenses) {
            const li = document.createElement("li")
            li.textContent = `${expense.description} - ${expense.amount} kr`  //varje expense är ett objekt från expenses-arrayen som loopen kört igenom
            transactionList.appendChild(li)
        }  
    }
    

 //funktionen som räknar ut och visar saldot
function renderBalance(){
    let totalIncome = 0
    for (let income of incomes){
        totalIncome += income.amount
    }
    let totalExpenses = 0
    for (let expense of expenses){
        totalExpenses += expense.amount
    }
    balance.innerHTML = `${totalIncome - totalExpenses}`

}


//När man klickar på incomeBtn körs funktionen addTransaction med parametern "income"
incomeBtn.addEventListener("click", () => {
    addTransaction("income")
})

//När man klickar på expenseBTN körs funktionen addTransaction med parametern "expense" 
expenseBtn.addEventListener("click", () => {
    //newTransaction.type = "income"
    addTransaction("expense")
})


