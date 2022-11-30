import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ThaiItem from "./components/ThaiItem";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/*
Create our list of data to display on the website using an array of objects
*/
const ThaiFood = [
  {name: "Pad Thai", price: 10.99, type: "Noodle", v_friendly: true, image: 'images/download.jpg'},
  {name: "Tom Yum", price: 15.99, type: "Soup", v_friendly: false, image: 'images/download-1.jpg'},
  {name: "Duck Tamarind Curry", price: 30.00, type: "Curry",v_friendly: false,image: 'images/download-2.jpg'},
  {name: "Chicken Garlic Noodle Soup", type: "Soup", price: 15.79, v_friendly: false,image: 'images/download-3.jpg'},
  {name: "Red Curry", price: 13.99, type: "Curry", v_friendly: true, image: 'images/download-4.jpg'},
  {name: "Green Curry", price: 20.50, type: "Curry", v_friendly: true, image: 'images/download-5.jpg'},
  {name: "Panang Curry", price: 15.00, type: "Curry", v_friendly: false, image: 'images/download-6.jpg'},
  {name: "Massaman Curry", price: 20.99, type: "Curry",v_friendly: false, image: 'images/download-14.jpg'},
  {name: "Pineapple Fried Rice", price: 16.79, type: "Noodle",v_friendly: true,image: 'images/download-7.jpg'},
  {name: "Pad See Ew", price: 17.49, type: "Noodle", v_friendly: true,image: 'images/download-8.jpg'},
  {name: "Pad Kee Mao", price: 19.00, type: "Noodle", v_friendly: true, image: 'images/download-9.jpg'},
  {name: "Crispy Chicken Pad Woon Sen", type: "Noodle", price: 12.00, v_friendly: false, image: 'images/download-10.jpg'},
  {name: "Tom Kha Gai", type:"Soup", price: 9.99, v_friendly: true, image: 'images', image:'images/download-15.jpg'}
]





function App() {
  // define a cart with length of our ThaiFood array
  const [cart, setCart] = useState(Array(ThaiFood.length).fill(0));
  // aggregator to keep track of all the items in the cart. 
  const [cartTotal, setCartTotal] = useState(0);
  const [type, setType] = useState("all")
  const [data, setData] = useState(ThaiFood);
  const [diet, setDiet] = useState("all")
  const [sort, setSort] = useState(null);

  
  const sorting = (e) => {
    let sortingMethod = e.target.value;
    console.log("sortingMethod", sortingMethod)
    setSort(sortingMethod)
    sort_func()
  }

  function sort_func(){
    let sort_res
    if (sort === "price-lh"){
      console.log("low-hi")
      sort_res = data.sort(function(a, b){return a.price - b.price})
      setData(sort_res)
    } else{
      console.log("hi-lo")
      sort_res = data.sort(function(a, b){return b.price - a.price})
      setData(sort_res)
    }
  }


  function incrementCart(index, price){
      cart[index] = cart[index] + 1 || 1;
      setCart({...cart});
      const tot_price = cartTotal + price
      console.log(tot_price)
      setCartTotal(tot_price);
  }

  function decrementCart(index, price){
    if(cart[index] > 0){
      cart[index] = cart[index] - 1
      setCart({...cart})
      const tot_price = cartTotal - price 
      setCartTotal(tot_price)
    }
  }

  function clearCart(){
      setCart(Array(ThaiFood.length).fill(0));
      setCartTotal(0);
  }

  const selectFilterType = (e) => {
    let newFilter = e.target.value;
    console.log("filter:", newFilter)
    setType(newFilter)
  }

  const selectDietFilterType = (e) => {
    let newDietFilter = e.target.value;
    console.log("diet_filter", newDietFilter)
    setDiet(newDietFilter)
  }

  const matchDietFilterType = item => {
    if(diet === "all"){
      return true
    } else if (diet === "v_friendly"){
        console.log("Not match")
        return item.v_friendly
    } else if (diet === "non_v_friendly"){
        return !(item.v_friendly)
    }
  }

  const matchTypeFilter = item => {
    if(type == "all"){
      return true
    } else{
      return type === item.type
    }
  }

  


  return (
    <div className="App">
      <div className="header">
      <h1> ElatedLion787's Thai Resturant</h1>
      </div>
      <div>
      <Nav>
        <Container>
          <h4> Filter for Your Desired Food!</h4>
          <Row>
          <h5> Choose Dietary Restriction: </h5>
                <Col sm={4}>
                  <form>
                    <select name="selectList" onChange={selectDietFilterType}> 
                      <option value="all"> None </option>
                      <option value="v_friendly"> Vegetarian Friendly </option>
                      <option value="non_v_friendly"> Non-Vegetarian Friendly</option>
                    </select>
                  </form>
                </Col>
          </Row>
          <Row>
          <h5> Choose Type of Food: </h5>
                <Col sm={4}>
                  <form>
                    <select name="selectList" onChange={selectFilterType}> 
                      <option value="all"> All </option>
                      <option value="Curry"> Curry </option>
                      <option value="Noodle"> Noodle</option>
                      <option value="Soup"> Soup</option>
                    </select>
                  </form>
                </Col>
          </Row>
          <Row>
            <h5> Choose Property to Sort By: </h5>
            <Col sm={4}>
                <form>
                    <Nav.Item> <input type='radio' name='sort' id="price" value='price-lh' onChange={sorting} />
                    <label for="sort"> Price High-Low</label> </Nav.Item>

                    <Nav.Item> <input type='radio' name='sort' id="price" value='price-hl' onChange={sorting}/>
                    <label for="sort"> Price Low-High</label> </Nav.Item>
                </form>
            </Col>
          </Row>
          <Row>
          <h3> Total Price of Items in Cart: ${(Math.round(cartTotal * 100) / 100).toFixed(2)} </h3>
          <button onClick={() => clearCart()}> Clear Cart </button>
          <br>
          </br>
          </Row>
          
        </Container>
        </Nav>
      

      <div className="wrapper">
        {data.map((item, index) => ( // TODO: map bakeryData to   
          matchDietFilterType(item) &&
          matchTypeFilter(item) &&
          <ThaiItem item={item} index={index} onClickAdd={incrementCart} onClickRemove={decrementCart} cart={cart}/>
        ))}
      </div>
      </div> 
    </div>
  );
}

export default App;
