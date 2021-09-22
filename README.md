## Setup project locally:
  - Clone git repository: 
  ```sh
  $ git clone git@github.ibm.com:ValdasT/Nordcloud.git
  ```
  - Install all modules listed as dependencies in package.json:
  ```sh
  $ cd client 
  $ npm i
  ```
  - Runs the app in the development mode:
  ```sh
  $ npm start
  ```
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

  - The user has two input fields in the web application, one for x coordinate and one for y coordinate.
![alt text](https://github.ibm.com/ValdasT/Nordcloud/blob/master/img/1.png?raw=true) 
  -  When the user fills in both coordinates and presses the "Submit" button, the system automatically calculates the most suitable station and displays it.
![alt text](https://github.ibm.com/ValdasT/Nordcloud/blob/master/img/2.png?raw=true) 
  - The most recent results are shown below the "Submit" button. Manual deletion of historical results is possible by clicking the X button.
![alt text](https://github.ibm.com/ValdasT/Nordcloud/blob/master/img/3.png?raw=true) 
