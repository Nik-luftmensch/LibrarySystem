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
- To start the JSON server you need to open a new terminal and navigate to the "\LibrarySystem" directory of the project and keep the earlier terminal running and run the 
  server using the command "json-server -p 5001 server.json" to start the database JSON server at 5001 port

Unit Testing
================
To run the angular unit test case -

- Navigate to "\LibrarySystem\src" in command window.
- Execute "ng test".
- This will open a new browser window and run all the unit test cases.
