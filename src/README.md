# Development

### Link to Deployed Website
If you used the stencil code, this is `https://elatedlion787.github.io/development-project/`

### Goal and Value of the Application
The goal of the application was to create an e-commerce based resturant website that allows users to navigate the resturant's offerings through filters (based on Vegetarian-Friendliness and the type of dish) and sorting features (Sorting by Price). The user can also add items to a cart and see their total. I also created this project in order to refine my React skills.

### Usability Principles Considered
Some of the usability principles I considered were learnability/memorability. I utilized a very simple interface, with a green-filter section and a card-based system that was very intutive. In order to separate products, I considered the visual hierarchy of product displays and used the "card" based display system that separates cards with a shadow around the card. I also bolded the names of the products in order to have the information stand out.

### Organization of Components
There are two large components: The FilterBar component and the ThaiItem component.
The FilterBar component is made up of a filtering section, as well as an Aggregator component, which stores the Cart Total and all the items that are added to the order. 
The Aggregator component is made up of a CartItem component, where each CartItem represents each individual item on the "tab"
The ThaiItem component is a component that makes up the item card. This displays the respective food along with its qualities (price, vegetarian friendly) and its quantity. There are also buttons to add/remove the item from the cart.

### How Data is Passed Down Through Components
Data is passed through components via props. The FilterBar component receives filtering, sorting and clearing cart functions along with state variables representing the data, the cart and the cartTotal. The FilterBar ingests some of this data, and passes some of the data to the Aggregator via props (which is also then passed to the CartItem component). 

The ThaiItem component (which represents the card) receives an element of the data array + the index + an add/remove onClick function for the aggregator and the cart via props. It then creates a card using this data. 


### How the User Triggers State Changes
The user can trigger state changes the following ways: Adding an item to the cart, Selecting a Filter, Selecting a Sort Mechanism, Removing an Item from the cart or clearing the cart


## Note: Weird Bug 
Initially, and only on the first click, if the user does not apply any filters and clicks Price Low-High, the products will actually filter High-Low. However, if the user then clicks on Price High-Low and Price Low-High again, this error will be fixed