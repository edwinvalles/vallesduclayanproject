// 
/* 
    Object (type,description,value)
        incomeObject = (description, value)
        expenseObject = (description,value)
        if type = "+"
            this.income(description,value);
            else if type === "-"
                this.expense(description,value)

        getTotalIncome(income) => this.income + income
        getTotalExpense(expense) => this.expense + expense
        getTotalAmount(totalIncome,totalExpense) => totalIncome - totalExpense
        addToList / addToIncome/ addToExpense => append the list : description and value
        removeFromList => remove item

    -----close object

    Event Listener

    a. + 
        STORE id choice
        STORE id description-input
        STORE id value-input

        if choice = "+"
            STORE in INCOME OBJECT
            CALL object.totalIncome
                else if choice = "-"
                    STORE in EXPENSE OBJECT
                    CALL object.totalExpense
        end if

          CALL object getTotalAmount
            CALL addToList
    b. delete
        CALL removeFromList()
*/

// constructor function

// getTotalIncome(income) => this.income + income
// getTotalExpense(expense) => this.expense + expense
// getTotalAmount(totalIncome,totalExpense) => totalIncome - totalExpense
// addToList / addToIncome/ addToExpense => append the list : description and value
// removeFromList => remove item

var budgetApp = function(type,description,value) {
    this.value = type + value;
    this.description = description;
    var income = document.getElementById('income-amount');
    var expenses = document.getElementById('expenses-amount');

    // Get total income function
    budgetApp.prototype.getTotalIncome = function(type,value) {
        if (type === "+") {
          console.log("Income Detected");
          income.innerHTML =  parseFloat(income.innerHTML) + parseFloat(value);

          let incomeContainer = document.getElementById('income-list');
          incomeContainer.insertAdjacentHTML('beforeend', `'<li> <p>${this.description}</p> <p>${this.value}</p> <div class = "delete-button">⌫</div> </li>`);
  
        } else if (type === "-") {
          console.log("Expense Detected");
          expenses.innerHTML = parseFloat(expenses.innerHTML) + parseFloat(value);

          let expensesContainer = document.getElementById('expenses-list');
          expensesContainer.insertAdjacentHTML('beforeend', `'<li> <p>${this.description}</p> <p>${this.value}</p> <div class = "delete-button">⌫</div> </li>`);

        }
        document.getElementById('total-amount').innerHTML = income.innerHTML - expenses.innerHTML;
      }
    budgetApp.prototype.removeFromList = function() {
        var currentItem = document.getElementById('delete')
        var currentAmount = currentItem.children[1].innerHTML
        var total = document.getElementById('total-amount')
        if (currentItem.parentElement.id === "income-list"){
            income.innerHTML = parseFloat(income.innerHTML) - parseFloat(currentAmount);
            total.innerHTML = parseFloat(total.innerHTML) - parseFloat(income.innerHTML);
        } else {
            expenses.innerHTML = parseFloat(expenses.innerHTML) - parseFloat(currentAmount);
            total.innerHTML = parseFloat(total.innerHTML) - parseFloat(expenses.innerHTML)

        }
    }

}

let budgetInput = null 

document.addEventListener('click', e => {
    var type = document.getElementById('choice').value
    var description = document.getElementById('description-input').value
    var value = document.getElementById('value-input').value

    const button = e.target.className;

    if (button === 'delete-button'){
        console.log('delete')
        e.target.parentElement.id = 'delete'
        budgetInput.removeFromList()
        document.getElementById('delete').remove()
        
    } else if (button === 'submit-button'){
        console.log('submitButton')

        if (value === '' || description ===''){
            alert("Please enter a value")
        } else {
            budgetInput = new budgetApp(type,description,value)
            budgetInput.getTotalIncome(type,value)        
        }
    }
}
)