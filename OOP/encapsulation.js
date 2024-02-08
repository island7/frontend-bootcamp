console.log('OOP')

//Encapsulation
//Class

class BankAccount {
    constructor (accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance} `;
    }
}

const myAccount = new BankAccount("123456789", 1000);
const regelAccount = new BankAccount("987654321", 20000);
myAccount.deposit(5000);
console.log(myAccount.getAccountInfo());

myAccount.withdraw(100);

console.log(myAccount.getAccountInfo());
//console.log(regelAccount.getAccountInfo());