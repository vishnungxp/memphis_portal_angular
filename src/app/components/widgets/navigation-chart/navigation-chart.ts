import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-chart',
  imports: [NgxChartsModule, CommonModule, FormsModule],
  templateUrl: './navigation-chart.html',
  styleUrl: './navigation-chart.scss',
})
export class NavigationChart {
  // Chart data
  single = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 38 },
    { name: 'Apr', value: 65 },
    { name: 'May', value: 48 },
    { name: 'Jun', value: 72 },
    { name: 'Jul', value: 55 },
    { name: 'Aug', value: 68 },
  ];

  // Options
  view: [number, number] = [700, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme = 'vivid';

  vesselChecked = true;
  equipmentChecked = true;
}
