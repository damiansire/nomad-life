import { Component } from '@angular/core';
import { TransactionListComponent } from '../../components/transaction-list/transaction-list.component';

@Component({
  selector: 'app-transactions-page',
  standalone: true,
  templateUrl: './transactions-page.component.html',
  styleUrl: './transactions-page.component.sass',
  imports: [TransactionListComponent],
})
export class TransactionsPageComponent {}
