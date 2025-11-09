import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analysis',
  imports: [CommonModule],
  templateUrl: './analysis.html',
  styleUrl: './analysis.scss',
})
export class Analysis {
  freshWaterPercentage = 75;
  sewageWaterPercentage = 45;
}
