# Development

### Link to Deployed Website
If you used the stencil code, this is `https://elatedlion787.github.io/development-project/`

### Goal and Value of the Application
The goal of the application was to create an e-commerce based resturant website that allows users to navigate the resturant's offerings through filters (based on Vegetarian-Friendliness and the type of dish) and sorting features (Sorting by Price). The user can also add items to a cart and see their total. I also created this project in order to refine my React skills.

### Usability Principles Considered
Some of the usability principles I considered were learnability/memorability. I utilized a very simple interface, with a green-filter section and a card-based system that was very intutive. In order to separate products, I considered the visual hierarchy of product displays and used the "card" based display system that separates cards with a shadow around the card. I also bolded the names of the products in order to have the information stand out.

### Organization of Components
The main component I have created is a card component that is called ThaiItem. Each ThaiItem object contains information for the respective product. I chose not to place my filter in a component, due to its connection to a lot of state variables and functions in App.js.

### How Data is Passed Down Through Components
When I map each element of data to a ThaiItem, i pass the element's info (Price, Name, Vegetarian Friendly, Type) as well as the index of the element in the array and the cart (which allows us to display the Quantity of the item in the cart).

### How the User Triggers State Changes
The user can trigger state changes the following ways: Adding an item to the cart, Selecting a Filter, Selecting a Sort Mechanism, Removing an Item from the cart or clearing the cart


## Note: Weird Bug 
Initially, and only on the first click, if the user does not apply any filters and clicks Price Low-High, the products will actually filter High-Low. However, if the user then clicks on Price High-Low and Price Low-High again, this error will be fixed