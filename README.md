# User Search App

## Application Description

This is a web application that allows to search information about users \
by their username through a public API (https://jsonplaceholder.typicode.com/users).

## Functionality
- Users can enter a username in the search input and click the "🔍" button to get information about the found users 
- If you click the "🔍" button and the input is empty, the entire list of users will be shown 
- JSONPlaceholder API does not support partial matching for the username field, so searching is only possible by 
full matching. \
For example, input with value "Bret" will return 1 result for a user with the username Bret
- If no users are found, the message "Users not found" is displayed 
- The application uses a public API to get user data 
- If an error occurs, a corresponding message is displayed to the user

## Stylization
The application is styled with styled-components.

## Available Scripts

To use the application, run the following scripts:

### `pnpm install`

Installing dependencies

### `pnpm start`

Runs the app.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `pnpm test`

Runs the tests.\
Jest and React Testing Library are used to test application components.
