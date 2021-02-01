# LibrarySystem

Before you Play
================
You need to install the dependencies before you can play 

- You need to navigate to "\LibrarySystem" and download the npm packages using the command "npm i"

Starting of the application
================
You need to start the local server and start the angular application 

- You need to navigate to the "\LibrarySystem" directory of the application and start the angular application using the command "npm start"
- Once the above command is running you can navigate to "http://localhost:4200" to see the rendered angular client listening at 4200 locally
- You will be able to navigate between pages which does not require authentication
- To login you need to start the JSON server which contains the database
- To start the JSON server you need to open a new terminal and navigate to the "\LibrarySystem\src" directory of the project and keep the earlier terminal running and run the 
  server using the command "json-server -p 5001 dbs.json" to start the database JSON server at 5001 port
- App will be now running with all the functionality 

Unit Testing
================
To run the angular unit test case -

- Navigate to "\LibrarySystem\src" in command window.
- Execute "ng test".
- This will open a new browser window and run all the unit test cases.

Credentials
================
To login as Admin(Librarian) -
- email: Nikhil.singh@gmail.com
- password: AdminPassword123

To login as User(Student) -
- email: jarvis@j
- password: 123@123

There is 1 more Admin and 4 More users if you want to login as that please find the credentials in the server.json file

About 
================
Description 
  This project was created for learning purpose and can be used for the same.
  If you want to use it and make commercial use out of it please ask for permission nik.singh1208@gmail.com

- Current features
  Currently you can login as Admin(Librarian) and User(Student) with simple Auth,
  Add ,Remove and with Request a book with custom searches

- Future features
  Add Unit test (Karma)and Functional test (Protractor) I have already done the setup in other project so would be using the same
  Made a different server instead of JSON learning GraphQL
  Add cake script for come command deployment over cloud (AWS,GoogleCloud)
  Add infeastrcutre of the cloud using Terraform and make the API more simple and Robust



- ©Nikhil Singh
    nik.singh1208@gmail.com