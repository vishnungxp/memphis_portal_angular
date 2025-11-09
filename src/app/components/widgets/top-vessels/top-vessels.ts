import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-vessels',
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './top-vessels.html',
  styleUrl: './top-vessels.scss',
})
export class TopVessels {
  // Horizontal bar chart data
  single = [
    { name: 'Vessel A', value: 85 },
    { name: 'Vessel B', value: 78 },
    { name: 'Vessel C', value: 72 },
    { name: 'Vessel D', value: 68 },
    { name: 'Vessel E', value: 65 },
    { name: 'Vessel F', value: 62 },
    { name: 'Vessel G', value: 58 },
    { name: 'Vessel H', value: 55 },
    { name: 'Vessel I', value: 52 },
    { name: 'Vessel J', value: 48 },
  ];

  view: [number, number] = [400, 280];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme = 'cool';
}
