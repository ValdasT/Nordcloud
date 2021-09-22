## Problem
Write a program that solves the most suitable (with most power) link station for a device at given point [x,y].

Please make this project as complete as you think it should be to be maintainable in the long term by more than one maintainer. ​Provide instructions how to run the solution or if applicable how to access a deployed running version.
This problem can be solved in 2-dimensional space. Link stations have reach and power.
A link station’s power can be calculated:
 ```
power = (reach - device's distance from linkstation)^2
if distance > reach, power = 0
```
Program should output following line:
 ```
“Best link station for point x,y is x,y with power z”
```
or:
 ```
“No link station within reach for point x,y”
```
Link stations​ are located at points ​(x, y)​ and have reach ​(r) ([x, y, r])​: 
 ```
[[0, 0, 10],
[20, 20, 5],
[10, 0, 12]]
```

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
  - Run the app in the development mode:
  ```sh
  $ npm start
  ```
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

  - The user has two input fields in the web application, one for x coordinate and one for y coordinate.
![alt text](https://github.com/ValdasT/Nordcloud/blob/master/img/1.png?raw=true) 
  -  When the user fills in both coordinates and presses the "Submit" button, the system automatically calculates the most suitable station and displays it.
![alt text](https://github.com/ValdasT/Nordcloud/blob/master/img/2.png?raw=true) 
  - The most recent results are shown below the "Submit" button. Manual deletion of historical results is possible by clicking the X button.
![alt text](https://github.com/ValdasT/Nordcloud/blob/master/img/3.png?raw=true) 
