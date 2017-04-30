# Angular 2 Task Card Application with Weather

This application was built using Anuglar 2 and used its 2-way data binding to create task cards from users input.

### Angular technologies the were used:
- ngModel
- ngIf
- Angular class directives
- Angular forms
##### Card components were built using angular components and done from scratch no CLI magic used here


# To use the application
1. Fork and clone the repo to your local machine and open it up in your text editor. (I use WebStorm by JetBrains).
2. When you have it opened in your text editor you will need to run and **npm install** so that you can install all the dependencies.
3. After the install finishes you can run **npm start** that will start the lite server and open your default web browser automatically.
4. Your free to mess around with the application. Its nothing graphically intese it is just me learning how to use Angular 2's 2-way data binding and creating a new task card each time the user creates a new one.

# What the user should expect
1. You should not be able to run the application and create an empty task card as the **add task** button should be disabled.
2. After the user creates a task card the user should be able to click on the card and have it turn from **Not Completed** to **Completed**.
3. When the user submits the form the input field should automatically clear its self.