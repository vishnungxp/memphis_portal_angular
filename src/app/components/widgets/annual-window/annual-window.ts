import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annual-window',
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './annual-window.html',
  styleUrl: './annual-window.scss',
})
export class AnnualWindow {
  // Gauge data
  gaugeData = [
    { name: 'Completed', value: 65 },
    { name: 'Pending', value: 35 }
  ];

  view: [number, number] = [300, 250];
  colorScheme = 'forest';
  showLegend = true;
  showLabels = true;
}
