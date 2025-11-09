import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-renewal',
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './service-renewal.html',
  styleUrl: './service-renewal.scss',
})
export class ServiceRenewal {
  // Bubble chart data
  bubbleData = [
    {
      name: '7 days',
      series: [
        { name: 'Service 1', x: '7 days', y: 15, r: 20 },
        { name: 'Service 2', x: '7 days', y: 22, r: 15 },
      ]
    },
    {
      name: '15 days',
      series: [
        { name: 'Service 3', x: '15 days', y: 18, r: 25 },
        { name: 'Service 4', x: '15 days', y: 28, r: 18 },
      ]
    },
    {
      name: '30 days',
      series: [
        { name: 'Service 5', x: '30 days', y: 35, r: 30 },
        { name: 'Service 6', x: '30 days', y: 42, r: 22 },
      ]
    }
  ];

  view: [number, number] = [400, 280];
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme = 'vivid';
}
