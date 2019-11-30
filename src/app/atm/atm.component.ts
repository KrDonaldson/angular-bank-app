import { Component } from '@angular/core';
// import { DatePipe } from '@angular/common'
import { BankService } from '../bank.service';
// import { isUndefined, isNull } from 'util';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css'],
})

export class AtmComponent {
  
  value: number; 
  date = new Date();
  
  constructor(
    private bankService : BankService,
    // public datepipe: DatePipe
  ) { }

  // _date =this.datepipe.transform(this.date, 'MM-dd-yy');

  withdraw(){
    // if (isNaN(this.value) || isUndefined(this.value) || isNull(this.value) || this.value<0 ){
    // }
    // else{
      this.bankService.account.balance -= this.value;

      alert(`
 
          Thank you. You withdrew $${this.value}.
          Your new balance is $${this.bankService.account.balance}.
      `)
      // ${this._date}

      this.bankService.account.transactions.push ({ 
        // date: this._date,
        type: 'withdrawal',
        amount: this.value,
        currency: 'USD',
        })
    // }
  }
  
  deposit() {
    // if (isNaN(this.value) || isUndefined(this.value) || isNull(this.value) || this.value<0 ){
    // }
    // else{
      this.bankService.account.balance += this.value;  
      
      alert(`

          Thank you. You deposited $${this.value}.
          Your new balance is $${this.bankService.account.balance}.
      `)
      // ${this._date} 

      this.bankService.account.transactions.push ({
        // date: this._date,
        type: 'deposit',
        amount: this.value,
        currency: 'USD',
      })
    // }
  }
  
  balance(){
    alert(`

      Your current balance is $${this.bankService.account.balance}.
    `)
    // ${this._date} 
 
  }

  transactions(){
    alert(` 
      Your most recent transactions are: 
      ngfor (let transaction of transactions) {
        f${JSON.stringify(this.bankService.account.transactions[0])}
    `)
  }
}
