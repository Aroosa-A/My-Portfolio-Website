Portfolio-WebSite
===========

About the Project:
-------
[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=500&pause=500&background=000000F9&multiline=true&width=435&height=200&lines=Portfolio%7B;Home;Resume;Work;About+;%7D)](https://git.io/typing-svg)

![project picture](/image/portfolio1.png)

![project picture](/image/portfolio2.png)

![project picture](/image/portfolio3.png)
- Full stack project
- This website is a portfolio of my work

Build With:
-------
**Framework/Libraries**
- Express Node.js
- React.js

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
3. Connect with MongoDB and use data from *Frontend/data/json files* to make documents in database
    ```
    mongodb://localhost:27017/PortFolio
    ```
    ```
    mongodb://localhost:27017/PortFolioTest
    ```
4. Run servers

    Open **Package.json** files from both *FRONTEND* and *BACKEND* folders and apply command
    ```
    npm start
    ```
5. Test

    You can run tests of both folders by opening integrated terminal from **Package.json** file and running this command in terminal
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

As a user
So that I can show others my experience
I want a CV page which shows all my skills, experiences and education.

As a user
So that I can move around in web app on different pages
I want a NavBar which gives me options to choose and go on other pages.

As a user 
So that other can connect with me through social media
I want a footer which keeps links to my social media accounts.
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
```
As a user
So that I can show others my experience
I want a CV page which shows all my skills and experiences.

Presentation Layer -> A page to display about my CV
Business Layer -> get request to get data stored from database
Persistance Layer -> store all skills and experience data in documents
```
```
As a user
So that I can move around in web app on different pages
I want a NavBar which gives me options to choose and go on other pages.

Presentation Layer -> A navbar with different options on it like Home and Resume etc and they will be connected to specific pages by routing
```
```
As a user 
So that other can connect with me through social media
I want a footer which keeps links to my social media accounts.

Presentation layer -> footer which will have my name and linkedin and github account links
```


Project Review:
--------------

### Main takeaways

- Learned use of react-Bootstrap
- Wanted to learn about how to make server to access static files from machine like images etc but couldn't make server run
- Strictly followed React methodology to work with mock data first then access data with API
- Learned use of react-icons library which helps to put icons for social media accounts