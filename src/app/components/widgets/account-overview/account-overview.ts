import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-overview',
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './account-overview.html',
  styleUrl: './account-overview.scss',
})
export class AccountOverview {
  // Pie chart data
  pieData = [
    { name: 'Paid Amount', value: 5000 },
    { name: 'Issued Purchase', value: 3000 },
    { name: 'Overdue', value: 1500 }
  ];

  view: [number, number] = [300, 250];
  colorScheme = 'vivid';
  showLegend = true;
  showLabels = true;
}
