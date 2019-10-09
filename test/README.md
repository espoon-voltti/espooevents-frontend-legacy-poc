# How to use end-to-end tests

### Install Test Cafe

`npm install -g testcafe`

### Run tests with all the necessary browsers

#### Creates a new event with sample data
`testcafe chrome test/EventInput.js`
#### Searches for the sample data event
`testcafe chrome test/EventConfirm.js`