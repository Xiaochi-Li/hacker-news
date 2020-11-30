# About the app

Hacker News is a simple web application allow users to search latest hacker news via [APIs](https://hn.algolia.com/api). It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Implemented with [Ant Design](https://ant.design/).

## Features

The page will initially load a list of hacker stories.

As the user type in the search input, the list will attempt to search for news.

The results are returned in a collection of lists, each page contains a list of news. User can navigate between pages using the pagination components located at the top and bottom of the list

## Preview the demo

To preview the demo, please visit [here](https://xiaochi-li.github.io/hacker-news/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn deploy`

Deploy the project to github page http://Xiaochi-Li.github.io/hacker-news

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Code quality tools
This project use the fllowing tools to enforce code quality pre-commit
* eslint 
* prettier
* eslint-config-prettier: turn off eslint rules that overlap with prettier rules
* eslint-plugin-import: support import/export syntax
* eslint-plugin-jsx-a11y: checks accessibility rules on JSX elements
* eslint-plugin-react: checks React specific linting rules 
* eslint-plugin-react-hooks: checks linting rules for React Hooks
* husky: implement git hooks such as `pre-commit`
* pretty-quick: check and fix prettier error on changed files, runs in `pre-commit` hook
* lint-staged: check lint rules on changed files, runs in `pre-commit` hook

## Other tools used
* html-to-text: Striping out HTML tags in a HTML string, only return the content. Used to prepare the content of news.

## Further improvment
* To enable user to search comments as well.
* Adding sorting features, enable users to view the news list in alphabetical order or chronological order.
* Adding error handling, display error message when someting went wrong.
* Further increase test coverage.