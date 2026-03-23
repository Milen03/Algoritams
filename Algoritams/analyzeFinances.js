const transactions = [
  { id: 1, type: "income", amount: 2000, description: "Salary" },
  { id: 2, type: "expense", amount: 50, description: "Netflix" },
  { id: 3, type: "expense", amount: 100, description: "Groceries" },
  { id: 4, type: "income", amount: 150, description: "Freelance" },
  { id: 5, type: "expense", amount: 30, description: "Coffee" }
];

function analyzeFinances(transactions){
    let result = {}

    for (const transaction of transactions) {
        let type = transaction.type

        if(!result[type]){
            result[type] = {
                count: 0,
                total: 0,
                history: []
            }
        }

        if(result[type] == result[type]){
            result[type].count += 1
        }

        result[type].total += transaction.amount
        result[type].history.push(transaction.description)
        
    }

    return result
}

console.log(analyzeFinances(transactions));

function getExpensiveExpenses(transactions, limit){
    
       let sameType =  
       transactions.filter(x => x.type === 'expense')
        .filter(y => y.amount > limit)
        .sort((a,b) => b.amount - a.amount)
    
return sameType
}
console.log(getExpensiveExpenses(transactions,40));

