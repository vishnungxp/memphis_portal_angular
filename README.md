# Memphis Portal Angular

A modern, responsive dashboard application built with Angular 20 for the Memphis Portal system.

## Features

### Navigation Menu
- Fixed left-side navigation with dark blue theme
- Menu items:
  - Dashboard (active by default)
  - Safety
  - Navigation
  - MDM
  - Administration
  - Accounts
  - Report
- Expandable menu items with chevron indicators
- Font Awesome icons integration

### Dashboard Overview
- Responsive header with vessel selection controls
- Grid-based layout for widgets
- Six interactive data visualization widgets:

#### 1. Navigation Widget
- Vertical bar chart showing monthly data
- Filter options for Vessel and Equipment

#### 2. Service Renewal
- Bubble chart displaying service renewals
- Time-based categories (7, 15, 30 days)

#### 3. Top 20 Vessel Due
- Horizontal bar chart
- Shows vessel priority rankings

#### 4. Analysis
- Custom progress bars
- Fresh Water and Sewage Water metrics

#### 5. Annual Window Period
- Advanced pie chart
- Completed vs Pending status visualization

#### 6. Account Overview
- Pie chart showing financial data
- Paid Amount, Issued Purchase, and Overdue categories

## Technology Stack

- **Angular**: 20.3.0
- **Angular CLI**: 20.3.9
- **TypeScript**: 5.9.2
- **@swimlane/ngx-charts**: 23.1.0 (for data visualization)
- **Font Awesome**: 7.1.0 (for icons)
- **D3**: 7.9.0 (charting dependency)
- **RxJS**: 7.8.0

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vishnungxp/memphis_portal_angular.git
cd memphis_portal_angular
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/          # Main dashboard component
│   │   ├── navigation-menu/    # Left navigation menu
│   │   └── widgets/            # Dashboard widgets
│   │       ├── account-overview/
│   │       ├── analysis/
│   │       ├── annual-window/
│   │       ├── navigation-chart/
│   │       ├── service-renewal/
│   │       └── top-vessels/
│   ├── app.config.ts           # Application configuration
│   ├── app.routes.ts           # Routing configuration
│   └── app.ts                  # Root component
├── styles.scss                 # Global styles
└── index.html                  # HTML entry point
```

## Styling

The application uses SCSS for styling with:
- Light grey background (#f5f6fa)
- White cards with subtle box shadows
- Dark blue navigation (#1a3d5f)
- Responsive grid layout
- Professional color scheme

## Data

Currently, all widgets display mock/hardcoded data. To integrate with real data:

1. Create data services in `src/app/services/`
2. Update widget components to consume services
3. Replace mock data with API calls
4. Add error handling and loading states

## Future Enhancements

- [ ] Integrate with backend API
- [ ] Add authentication and authorization
- [ ] Implement real-time data updates
- [ ] Add more interactive features
- [ ] Create unit and integration tests
- [ ] Add data export functionality
- [ ] Implement responsive mobile design
- [ ] Add user preferences and settings

## License

This project is private and proprietary.

## Author

Memphis Portal Team