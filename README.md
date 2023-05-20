# RemindMe   <img src="https://user-images.githubusercontent.com/63080641/235391906-47d5b663-bca4-46f0-9f54-2f53a2a5819c.png" width="30">

<p align="center" width="100%">
<img src="https://user-images.githubusercontent.com/63080641/235552175-2186b1a9-1b08-400a-93e8-a58c07549904.png" width="750")
</p>

## Application Summary
People constantly have tasks to piling up in their lives to the point where it becomes hard to keep track of them all. _RemindMe_ provides a single web-based place to organize all of these tasks together into a single to-do list sorted by approaching deadlines to ensure individuals never miss a due date. Users can create an account and log in to view all of their saved tasks as well as delete them when they are finished or no longer needed. 

## Technical Architecture
Our project was built using the following frameworks/libraries:
* **React**
* **MySQL** and **MySQL Workbench**
* **Node.js** and **npm**
* **Visual Studio Code** (code editor)

&nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/63080641/235392673-3255bcbe-a7ef-436a-a442-1819741f33a7.png" height="45"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/63080641/235392767-9e1c1d65-8952-45cb-a360-24fbb97d66c7.png" height="45"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/63080641/235392951-b339b5f4-8de9-44c4-b590-ecc48f554386.png" height="45"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/63080641/235393197-9c70a035-6c59-4173-b41b-27c78286cd04.png" height="40"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/63080641/235393309-fd00809c-00c4-4212-a971-fbc501f57a75.png" height="42">

We used **React** in order to build the website's user interface, and the front-end code was written with JavaScript/HTML/CSS. All of the website's buttons, inputs, and other interactive components were created using this framework. **MySQL** was used to store all of the login information and user tasks in a database. In order to connect the front-end to the **MySQL** database, we used **Node.js** to write queries to put and fetch information to and from the database. We did not end utilize any cloud or other online service to host our database, so local setup is necessary to run and interact with our project. 

<p align="center" width="100%">
<img src="https://user-images.githubusercontent.com/63080641/236533675-d297a32e-1897-4dff-b337-f5093ec6e194.png" width="500">
</p>


## Installation

### Prerequisites
Download and install [Node.js/npm](https://nodejs.org/en/download), [MySQL/MySQL Workbench](https://www.mysql.com/products/workbench/), and an IDE (i.e. [Visual Studio Code](https://code.visualstudio.com/)) on your local machine.

### Steps
1. Clone the repository <br>
```
git clone https://github.com/CS222-UIUC/team-78-remind-me-app.git
```

2. Install npm packages (may need to install other packages as prompted when running website)
```
npm install
npm install react-router-dom --save
npm install react-native-web
npm install axios
npm install cors
```

3. Set up the database called `usersystem` with the following tables in MySQL Workbench <br>

&nbsp;&nbsp;`users` table: <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/63080641/235552734-335bdd14-97b4-459f-a181-7a545f067faa.png" width="900"> <br>

&nbsp;&nbsp;`tasks` table: <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/63080641/235552498-5627a26b-2a0b-4f97-a9a8-be4d1b021824.png" width="900">


4. Navigate to the front-end folder (`cd front-end`) and run the website
```
npm start
```

5. Navigate to the back-end folder (`cd back-end`) and run the database server
```
node index.js
```

Now you're ready to start adding tasks!

## Group Member Roles
Sudha Gattu ([@sudham123](https://github.com/sudham123)) : _Front-end and database developer / unit tester_ <br>
Leah Ludwikowski ([@leahlud](https://github.com/leahlud)) : _Front-end, back-end, and database developer_ <br>
Armin Rafieyan ([@ArminRaf](https://github.com/ArminRaf)): _Back-end and database developer_ <br>
Nithin Parthasarathy ([@nithinparthas](https://github.com/nithinparthas)) : _Back-end developer / unit tester_
