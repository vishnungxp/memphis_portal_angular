import { Component } from '@angular/core';
import { NavigationChart } from '../widgets/navigation-chart/navigation-chart';
import { ServiceRenewal } from '../widgets/service-renewal/service-renewal';
import { TopVessels } from '../widgets/top-vessels/top-vessels';
import { Analysis } from '../widgets/analysis/analysis';
import { AnnualWindow } from '../widgets/annual-window/annual-window';
import { AccountOverview } from '../widgets/account-overview/account-overview';

@Component({
  selector: 'app-dashboard',
  imports: [
    NavigationChart,
    ServiceRenewal,
    TopVessels,
    Analysis,
    AnnualWindow,
    AccountOverview
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
