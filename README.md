Portfolio-WebSite
===========

About the Project:
-------
[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=500&pause=500&background=000000F9&multiline=true&width=435&height=200&lines=Portfolio%7B;Home;Resume;Work;About+;%7D)](https://git.io/typing-svg)
- Full stack project
- This website is a portfolio of my work

Build With:
-------
**Framework/Libraries**
- Express Node.js
- React.js
- Mocha-Chai

**Languages**
- JavaScript
- CSS
- HTML

**DataBase**
- NoSql
- MongoDB

**Packages**
- Cors
- Body Parser
- DotEnv
- Express Validator
- Mongoose
- Axios
- React Router Dom

Getting Started:
-------
Steps to follow in order to run this project locally on your machine

1. Clone the repo

    You can copy project link from *green* button named as **Code**, link should be like this
    ```
    git clone http://github.com/your-username/Project-name.git
    ```
2. Install dependencies

    You can install them by writing this command in terminal or by right clicking on **Package.json** file and selecting *Install dependencies* of both folders
    ```
    npm install
    ```
3. Connect with MongoDB
    ```
    mongodb://localhost:27017/ChitterDB
    ```
4. Run servers

    Open **Package.json** files from both *FRONTEND* and *BACKEND* folders and apply command
    ```
    npm start
    ```

5. Test

    You can run tests of both folders by opening **Package.json** file and running this command in terminal
    ```
    npm test
    ```
Problem Statements:
-----------------
### Problem
```
Make a website which shows all my work I have done as software engineer in form of pictures/videos gallery and links of actual GitHub repositories etc. It should also show information about me and my CV as well.
```

### User Stories

```
As a user
So that I can show other my work
I want a Home page with my picture saying hello and about me.
```

### Solution
```
As a user
So that I can show other my work
I want a Home page with my picture saying hello and about me.

Presentation Layer -> Home page divided into two sections one section for my picture and other section about me.
Business Layer -> get request to fetch data like picture and about me info from database.
Persistance Layer -> store picture and about me info like what I do, where do I live etc.
```



Project Review:
--------------

### Main takeaways
