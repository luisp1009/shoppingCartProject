## Shopping Cart
This is a simple e-commerce web application that allows users to browse and purchase products. The application includes a homepage that displays a list of products, a cart page that shows the items in the user's cart, and a header that includes a search bar and a dropdown for the cart.

## Getting Started
To run the application locally, clone the repository and run the following commands:

## Copy code
npm install
npm start
The application should now be running on http://localhost:3000

## Components
The application is composed of several components:

## Home
The Home component displays a list of products. It imports a context called "CartState" which holds the state of the products and other related values like byStock, byFastDelivery, sort, byRating, and searchQuery. The component has a function "transformProducts" which sorts and filters the products based on the values in the context and returns the filtered products. Finally, it renders a component "Filters" and maps through the filtered products, rendering a component "SingleProduct" for each product with the product's data passed as a prop.

## Cart
The Cart component displays the items in the cart and allows the user to modify the quantity and remove items from the cart. It uses the hooks useEffect and useState to calculate the total of the cart items and update it when the cart is changed. It maps through the cart items and renders each item with its name, price, image, rating and a select element to change the quantity, and a delete button to remove the item from the cart. Finally, it renders a summary of the cart with the total amount and buttons to continue shopping or proceed to checkout.

## Filters
The Filters component allows users to filter and sort the products displayed in the Home component. It has checkboxes, radio buttons, and a rating component that allow the user to filter and sort the products. It also has a button that allows the user to clear all the filters. When a form element is changed, it dispatches an action to the context with the corresponding type and payload to update the state accordingly.

## Header
The Header component renders a navigation bar at the top of the page. It has a search bar that allows the user to filter products and a dropdown that allows the user to view the items in the cart and remove them. The dropdown will show the items in the cart and a "Go to Cart" button that links to the Cart page. If the cart is empty, it will display the message "Cart is Empty". When the search bar value is changed, it dispatches an action to the context with the corresponding type and payload to update the state accordingly.

## Context
The application uses a single context called "CartState" to store the state of the products, cart, and filters. The context includes a state object and a dispatch function that allows the components to update the state.

## Note
This is a simple prototype and is not intended fully implemented for production use yet. Some of the features may not be working properly and there may be bugs present.


Thanks