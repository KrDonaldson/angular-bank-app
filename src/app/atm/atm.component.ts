import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { BankService } from '../bank.service';
import { isUndefined, isNull } from 'util';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css'],
})

// @Pipe({name: 'customDateFormat'}  )
// export class CustomDateFormat implements PipeTransform {
//   transform(value: any): Date {
//        let customDate = new Date(value.match(/\d+/)[0] * 1);  
//   }
// }

export class AtmComponent {
  
  value: number; 
  date = new Date();
  constructor(
    private bankService : BankService,
    public datepipe: DatePipe
  ) { }

  withdraw() {
    if (isNaN(this.value) || isUndefined(this.value) || isNull(this.value) || this.value<0 ){
    }
    else{
      let _date =this.datepipe.transform(this.date, 'MM-dd-yy');
      this.bankService.account.balance -= this.value;  
      this.bankService.account.type = 'withdrawal';
      this.bankService.account.amount = this.value;
      this.bankService.account.currency = 'USD';

      alert(`
          Thank you. You withdrew ${this.value}.
          Your new balance is ${this.bankService.account.balance}.
        balance: ${this.bankService.account.balance}
        type: ${this.bankService.account.type}
        amount: ${this.bankService.account.amount}
        currency: ${this.bankService.account.currency}
        ${_date}
      `)

      /*update list of transactions on account object
      push.account.transactions*/
    }
  }
  
  deposit() {
    if (isNaN(this.value) || isUndefined(this.value) || isNull(this.value) || this.value<0 ){
    }
    else{
      let _date =this.datepipe.transform(this.date, 'MM-dd-yy');
      this.bankService.account.balance += this.value;  
      this.bankService.account.type = 'deposit';
      this.bankService.account.amount = this.value;
      this.bankService.account.currency = 'USD';
      
      alert(`
          Thank you. You depositted ${this.value}.
          Your new balance is ${this.bankService.account.balance}.
        balance: ${this.bankService.account.balance}
        type: ${this.bankService.account.type}
        amount: ${this.bankService.account.amount}
        currency: ${this.bankService.account.currency}
        ${_date}
      `)
    }
      //update list of transactions on account object//
  }
  
}
