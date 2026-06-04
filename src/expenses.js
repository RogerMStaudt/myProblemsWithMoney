const expenseForm = document.getElementById('expenses-form')

expenseForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    try {
        const expense = document.getElementById('expense').value
        const value = document.getElementById('value').value

        const data = {
            expense,
            value
        }

        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
    } catch (error) {
        alert(error)
    }
})