// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  public userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  public addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {

    constructor(userId: number, userName: string, userBalance : number){
        super(userId, userName, userBalance);
    }

  
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount);