# :computer: Welcome to The Computer Shop

The Computer Shop is an ecommerce web app. This app is minimally styled and meant to showcase the tech stacks and frameworks in use. Keep reading for more details on implementation.

![homePage](/client/src/assets/images/homePage.png)

# description

The project's base stack is: react, nodejs, express, mongodb.
Redux toolkit is leveraged to manage global state. Within RTK (redux toolkit) this project takes advantage of RTK query for all fetching.

RTK reducers are used to update store with data such as static products, admin permissioned user updated products, cart storage which is persisted on local storage and/or userCart storage which is stored in mongoDb for logged in users.

Extra reducers are implemented to mutate state using matchers that respond to the status of actions in other paths of redux store.

The backend api server is written on nodeJs with express. Routes are created with express.router and controller functions are passed into routes in Routes folder.
The object data modelling library Mongoose is used to create model structures and connect with mongo data base.

As of now the computer shop takes test payments using stripe.

# features

## adding products as admin

User models contain a boolean admin property. An initial check is performed on the frontend wether to display the menu link to `addProduct`. A secondary admin check is done on the backend within the controller `createProduct` which is passed the user object.
The npm package multer is used to to upload images when adding products.
[multer](https://www.npmjs.com/package/multer)

![addProduct](/client/src/assets/images/addProduct.png)

## displayed alerts

Alert data is stored in the alertsSlice branch of state. When actions such as registering, logging in or adding products to cart are triggered matchers in alertsSlice mutate alert data and either a success or error alert is displayed to user.

![alertImage](/client/src/assets/images/alertImage.png)

## shopping cart

![cartView](/client/src/assets/images/cartView.png)

When an action is taken to add an item to cart `handleAddToCart` function checks if a user is currently logged in. If a user is logged in user is updated with new item in userCart upon triggering `useUpdateUserCartMutation`, this is also where any errors from the call to mutate external data are caught and displayed.
If no errors are caught the stack moves to dispatch `addItemToCart`, this updates the cart branch of state with new data. `displayAlert` is then dispatched and localCart is reset on local storage to persist data for non registered users otherwise data from user is defined in `/client/src/utils/cartInfo.js` and preloaded into cartSlice's initial state.

## payments

Currently this app accepts payments in a rudementary test of stripe. In /controllers/productController.js `createCheckoutSession` creates a stripe check out session. The controller function accepts a total and uses the stripe api to create a product, price and session.

[stripe](https://stripe.com/payments/checkout)

# installation

- Have use of some code editor e.g. VSC code or atom.
- clone git repository
- copy the following url open up your terminal and execute following command

https://github.com/anthonyss09/theComputerShop.git

`$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

- install packages

`npm install`
