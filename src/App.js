import logo from './logo.svg';
import './App.css';
import {useState} from "react";

/*
Create our list of data to display on the website using an array of objects
*/
const ThaiFood = [
  {name: "Pad Thai", price: 10.99, image: 'images/download.jpg'},
  {name: "Tom Yum", price: 15.99, image: 'images/download-1.jpg'},
  {name: "Duck Tamarind Curry", price: 30.00, image: 'images/download-2.jpg'},
  {name: "Chicken Garlic Noodle Soup", price: 15.79, image: 'images/download-3.jpg'},
  {name: "Red Curry", price: 13.99, image: 'images/download-4.jpg'},
  {name: "Green Curry", price: 20.50, image: 'images/download-5.jpg'},
  {name: "Panang Curry", price: 15.00, image: 'images/download-6.jpg'},
  {name: "Massaman Curry", price: 20.99, image: 'images/download-7.jpg'},
  {name: "Pineapple Fried Rice", price: 16.79, image: 'images/download-8.jpg'},
  {name: "Pad See Ew", price: 17.49, image: 'images/download-9.jpg'},
  {name: "Pad Kee Mao", price: 19.00, image: 'images/download-10.jpg'},
  {name: "Pad Woon Sen", price: 12.00, image: 'images/download-11.jpg'},
]





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
