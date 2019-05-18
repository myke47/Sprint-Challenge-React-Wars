# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a modular Javascript Library that allows for independent and reusable components that manage data passed from a parent component, or contain data within the child component itself. 

This allows for powerfull, and scalable, rapid web application development that is not concerned about how it receives its data. 

The incredible size of applications today and the massive ammount of users who interact with those applications, i.e. Facebook, presents a dificult challenge in managing the state of the application to consistently provide a user experience that is consistent and at the same time something developers can use efficiently to develop these applications and their many ui components. 

A great example of this is the Todo list we worked on in class. This application is made of several components of different types, 'functional and class components' who each have a different role in making sure the application succeeds in its goal of functioning as a todo list. The parent 'App' takes in the child components to render the live application. 

1.  What does it mean to _think_ in react?

There are specific steps to consider when begining the react development process. 
There are serious considerations about what individual components need to be created in order to deliver the final product. 
Deciding which component of the group will be the 'parent' and responsible for passing data to the child components. 
Equally as important in the process is deciding which component is the right choice for maintaining state within the app.
"To build your app correctly, you first need to think of the minimal set of mutable state that your app needs." => To_think_in_react is thinking modular, downstream dataflow, single purpose components independent of any specific html environment, only needing html to render the application. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are used for rendering the ui portion of an app and may access props but never state. 

Class components are used when more is needed from a component that involves state, lifecycle methods, and make use of 'this'. 

1.  Describe state.

The internal data store, or object of a component, often times in the form of an array. 

1.  Describe props.

The data passed to a child component from the parent component. 