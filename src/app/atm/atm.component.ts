import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})

export class AtmComponent {
  value: number;
  constructor(
    private bankService : BankService
  ) { }
  
  withdraw() {
    this.bankService.account.balance -= this.value;
  }
  
  deposit() {
    this.bankService.account.balance += this.value;
  }
  /* need to create an alert saying, 
  Thank you. You ${{user.action}} ${{value}}.
  Your new balance is ${{this.bankService.account.balance}}.
  */
}
