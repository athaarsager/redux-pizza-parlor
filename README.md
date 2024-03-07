# React Pizza Parlor

## Description

_Duration: 2 days_

This project is a CRUD app meant to emulate a pizza-ordering website. I built this as part of a group project during my time at Emerging Digital Academy and it was one of our first forrays into client-side routes and using Material UI for styling. It's functionality can be broken down as follows:


### Select Pizza Page

Displays all available pizzas on the screen. Users can add or remove each pizza they would like to order to their cart. The total cost of items in the cart is displayed in the top right of this page. 


### Enter Customer Information Page 

Users will enter their information on this page: *name*, *street address*, *city* and *zip*. They also have the option to select pickup or delivery. The total cost of the order appears in the top right of this page just like on the previous one.

### Checkout Page

Users are unable to modify item totals on this screen. When they click checkout, the user information, order total and array of pizzas is sent to the server. After the checkout is complete, the user is brought back to the **select pizza** page and reducers are cleared.

### Admin

This page does not appear in the navigation bar, it can only be accessed via the url [http://localhost:5173/admin](http://localhost:5173/admin). This page displays the name, time and order total for each of the orders placed.


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### SetUp Instructions

1. Create a database named `pizza_parlor`
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. Click the link given by `npm run client` to open a new tab with the running project!

## Built With

* React
* Redux
* Postgres
* Express
* Axios
* Material UI

## Acknowledgements

Thank you to Emerging Digital Academy for equipping me with the knowledge and opportunity to create this project! Special shoutout to Dylan and Seid for being awesome teammates as we worked together to make this project a reality!



