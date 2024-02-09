# UI Automation Framework – Tinel Workshop registration






This UI Automation framework repository has some basic functional tests for registration. 
It covers the starting registration, canceling registration and submitting registration without entering required information.

## Tech

This framework was built with the following:

- Javascript
- node.js 
- Playwright
- CI  - github
- IDE - Visual Studio Code



## Framework Design
The pages package contains page classes
- login_page - login page objects and methods
- create_account - create account page objects and methods

## Test Design

- Each test in the tests package is independent and complete.
- The tests are designed with the use of playwright assertions and screenshots are captures for asserted values.
- Test configuration variables are located at the top of each test class


## Test Execution
-	Clone the repository into a folder
  
```sh
git clone https://github.com/tomaslqa/LocasticQA.git
```
- Go to Project root directory and install Dependencies (select Javasript):
```sh
npm install
```
```sh
npx playwright install
```

## Run tests
- Run tests (all)
```sh
npx playwright test
```

## Open HTML report
```sh
npx playwright show-report
```

## Location of report and screenshots
HTML report:
- Go to Project root directory: ./playwright-report/index.html

Screenshots:
- Go to Project root directory: ./playwright-report/data
