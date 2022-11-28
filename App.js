import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ThaiItem from "./components/ThaiItem";
import SideNavBar from "./components/SideNavBar";
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
  {name: "Pad Thai", price: 10.99, type: "Noodle", v_friendly: "Yes", image: 'images/download.jpg'},
  {name: "Tom Yum", price: 15.99, type: "Soup", v_friendly: "No", image: 'images/download-1.jpg'},
  {name: "Duck Tamarind Curry", price: 30.00, type: "Curry",v_friendly: "No",image: 'images/download-2.jpg'},
  {name: "Chicken Garlic Noodle Soup", type: "Soup", price: 15.79, v_friendly: "No",image: 'images/download-3.jpg'},
  {name: "Red Curry", price: 13.99, type: "Curry", v_friendly: "Yes", image: 'images/download-4.jpg'},
  {name: "Green Curry", price: 20.50, type: "Curry", v_friendly: "Yes", image: 'images/download-5.jpg'},
  {name: "Panang Curry", price: 15.00, type: "Curry", v_friendly: "No", image: 'images/download-6.jpg'},
  {name: "Massaman Curry", price: 20.99, type: "Curry",v_friendly: "No", image: 'images/download-14.jpg'},
  {name: "Pineapple Fried Rice", price: 16.79, type: "Noodle",v_friendly: "Yes",image: 'images/download-7.jpg'},
  {name: "Pad See Ew", price: 17.49, type: "Noodle", v_friendly: "Yes",image: 'images/download-8.jpg'},
  {name: "Pad Kee Mao", price: 19.00, type: "Noodle", v_friendly: "Yes", image: 'images/download-9.jpg'},
  {name: "Crispy Chicken Pad Woon Sen", type: "Noodle", price: 12.00, v_friendly: "No", image: 'images/download-10.jpg'},
]





function App() {
  // define a cart with length of our ThaiFood array
  const [cart, setCart] = useState(Array(ThaiFood.length).fill(0));
  // aggregator to keep track of all the items in the cart. 
  const [cartTotal, setCartTotal] = useState(0);
  const [type, setType] = useState("All")

  const selectFilterType = eventKey => {
    console.log("Selected")
    setType(eventKey);
  }

  function select (){
    console.log("selected")
  }


  function incrementCart(index, price){
      cart[index] = cart[index] + 1 || 1;
      setCart({...cart});
      const tot_price = cartTotal + price
      console.log(tot_price)
      setCartTotal(tot_price);
      
  }

  function clearCart(){
      setCart(Array(ThaiFood.length).fill(0));
      setCartTotal(0);
  }

  


  return (
    
    <div className="App">
      <Nav className="container-nav">
        <Container>
            <Row>
                <h5> Vegetarian Friendly </h5>
                <Col sm={4}>
                    <Nav.Item> <input type='radio' name='v_friendly' id="all_v_friendly" value='all'/> 
                    <label for="all_v_friendly"> All Foods</label>
                    </Nav.Item>
                    <Nav.Item><input type='radio' name='v_friendly' id="is_v_friendly" value='True'/>
                    <label for="is_v_friendly"> Vegetarian Friendly</label></Nav.Item>
                    <Nav.Item><input type='radio' name='v_friendly' id="is_not_v_friendly" value='False'/>
                    <label for="is_v_friendly"> Non-Vegetarian Friendly</label>
                    </Nav.Item> 
                </Col>
            </Row>

            <Row>
                <h5> Type of Food </h5>
                <Col sm={4}>
                    <Nav.Item> <input type='radio' name='type' id="all" value='all'/>
                    <label for="type"> All </label> </Nav.Item>
                    <Nav.Item> <input type='radio' name='type' id="Noodle" value='Noodle'/>
                    <label for="type"> Noodle </label> </Nav.Item>
                    <Nav.Item> <input type='radio' name='type' id="Soup" value='Soup'/>
                    <label for="type"> Soup</label> </Nav.Item>
                    <Nav.Item> <input type='radio' name='type' id="Curry" value='Curry'/>
                    <label for="type"> Curry</label> </Nav.Item>
                </Col>
            </Row>
            <Row>
                <h5> Sort By: </h5>
                <Col sm={4}>
                    <Nav.Item> <input type='radio' name='sort' id="price" value='price'/>
                    <label for="type"> Price Low-High</label> </Nav.Item>

                    <Nav.Item> <input type='radio' name='sort' id="price" value='price'/>
                    <label for="type"> Price High-Low</label> </Nav.Item>
                </Col>
            </Row>
        </Container>
        </Nav>
      <h1> ElatedLion787's Thai Resturant</h1>
      <div className="wrapper">
        {ThaiFood.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <ThaiItem item={item} index={index} onClick={incrementCart}/>
        ))}
        <h3> Total Price: {cartTotal} </h3>
      </div>
    </div>
  );
}

export default App;
