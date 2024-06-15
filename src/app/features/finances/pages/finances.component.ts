import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ExchangesPageComponent } from './exchanges-page/exchanges-page.component';

@Component({
  selector: 'app-finances',
  standalone: true,
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.sass',
  imports: [
    MatTabsModule,
    TransactionsPageComponent,
    StatisticsPageComponent,
    ExchangesPageComponent,
  ],
})
export class FinancesComponent {}
