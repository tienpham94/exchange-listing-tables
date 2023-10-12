# Exchange Listing Tables HW

This is a Next.js application that fetches and displays cryptocurrency exchange data in two tables. The data is server-side rendered (SSR) and styled using the shadcn/ui library with Tailwind CSS.

## Features

- Displays a table of transactions data with a calculated euro equivalent for each transaction's amount.
- Displays a summary table of the amounts of all deposits & withdrawals grouped by currency.
- Handles cases where euro rates are not available.
- Uses TypeScript for static type checking.

## Technologies Used

- **Framework**: Next.js
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS

The choice of Next.js as the framework is due to its modern capacities to work well as a boilerplate and excellent TypeScript support, which helps ensure type safety and catch errors early during development.

The shadcn/ui library was chosen for its simplicity and ease of use. It provides a set of reusable UI components that can be used to quickly build the user interface.

Tailwind CSS was chosen for styling due to its utility-first approach, which allows for rapid development and reduces the amount of CSS that needs to be written.

## Local Development Setup

1. **Clone the Repository**: Clone the project repository to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run `npm install`.
3. **Start the Development Server**: Run `npm run dev`.
4. **Access the Application**: Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.


## Assumptions and Pitfalls

- The application does not paginate the data or implement infinite scrolling / doing table virtualization. If the dataset is very large, this could lead to performance issues.
- The application does not cache the data. If the data doesn't change frequently, caching could improve performance by reducing unnecessary API calls.
- The application does not have unit or integration tests. This makes it harder to catch regressions or errors before they reach production.

## Future Improvements

- Add pagination or infinite scrolling or table virtualization for handling large datasets.
- Implement data caching for frequently unchanged data to reduce unnecessary API calls.
- Add unit and integration tests to catch regressions or errors before they reach production.
