# Product Registration
A CRUD product registration app. On the server side this app uses Node and MySQL to query and route data and Handlebars to generate HTML. This app also follows the MVC design pattern and use Sequelize to interact with the database. On the client side uses Bootstrap for layout and style, and JQuery to validate user input.

## How it works
- The product registration form allows users to enter the product information and save it in the database.

![Create](https://github.com/Jhongert/Product-Registration/blob/master/public/assets/images/create.jpeg?raw=true)

- The List page allows user to see the products saved in the database, search, sort and edit or delete them.

![Create](https://github.com/Jhongert/Product-Registration/blob/master/public/assets/images/list.jpeg?raw=true)

- The edit form allows users to edit a existing product.

![Create](https://github.com/Jhongert/Product-Registration/blob/master/public/assets/images/edit.jpeg?raw=true)

- This is the alert when the user presses the delete button.
![Create](https://github.com/Jhongert/Product-Registration/blob/master/public/assets/images/delete.jpeg?raw=true)

## Installing
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Open Terminal/bash window
- Clone this repo. `git clone https://github.com/Jhongert/Product-Registration.git`
- Navigate to bamazon folder. `cd Product-Registration`
- Install all dependencies. `npm install`
- Import database `db.sql`

### Dependencies
- **express**
- **body-parser** 
- **cexpress-handlebars** 
- **mysql2**
- **sequelize**

## Build with
- Node.js
- Express
- MySQL
- Sequelize
- JQuery
- Bootstrap

## [Demo](https://salty-earth-12670.herokuapp.com/)

## Author
Jhongert Fuertes
