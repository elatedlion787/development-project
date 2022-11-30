import CartItem from "./CartItem"
export default function Aggregator({data, cart, cartTotal, onClick}){
    console.log(cartTotal)
    return(
        <div>
        <h3> Total Price of Items in Cart: ${(Math.round(cartTotal* 100) / 100).toFixed(2)} </h3>
        {data.map((item, index) => ( 
          <CartItem item={item} quantity={cart[index]}/>
        ))}
        <button onClick={onClick}> Clear Cart </button>
        </div>
    )
}