//CHAPTER 1//
//ALERT//

//QUESTION NO 1 //
//What does the alert function do in JavaScript? 
//It display text in dialog box that pops up on the screen to give user a message .

//QUESTION NO 2 //
//Write the code to display an alert with the message "Welcome to my website !"?
alert("Welcome to my website !");

//QUESTION NO 3 //
//What happens if you capitalize the alert keyword?
//As alert function is case sensitive so if we capitalize the alert keyword it will result in an error and the script will stop.

//QUESTION NO 4 //
//Write the correct JavaScript syntax to display "Hello,world!" in an alert box?
alert("Hello,world!");

//QUESTION NO 5 //
//Write a JavaScript alert statement with proper formatting and explain each part of the code ?
alert("This is an alert message!");
//                      alert  - This is the built-in  function in JavaScript that that pops up  the dialog box on the screen.
// "This is an alert message!" - A quoted text is called text string, it's a string of characters enclosed in quotes .
//                          ;  - a semi-colon is used to indicate the end of satement or the alert function call.
//                         ()  - Parenthesis are the special requirement of javascript to pass message that should be displayed in an alert box .Without them the function would not execute .


//CHAPTER 2
//VARIABLE

//QUESTION NO 1 //
//Write a code that declares a variable message , assigns the value "Hello,world!" to it , and then displays an alert with message ?
var message = "Hello ,world";
alert(message);

//QUESTION NO 2 //
//Declare a variable named age ,leave it undefined , then assign the value 25 to it in later statement .Display an alert showing the value of age .
var age;
age = 25;
alert(age);


//QUESTION NO 3 //
//Declare a  variable name greeting ,assign it the value "Good morning !"and then display it in alert Afterwards , change the value of greeting to "Good evening!"and display the new value in another alert .
var greeting = "Good morning !";
alert(greeting);

greeting = "Good evening !";
alert(greeting);

//QUESTION NO 4 //
//Ceate a variable called favourite colour and assign it the value "blue ". Then display an alert that says "My favourite colour is blue " using the variable .
var favouritecolor = "blue";
alert("My favorite color is " + favouritecolor);
