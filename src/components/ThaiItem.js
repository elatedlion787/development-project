// TODO: create a component that displays a single bakery item
function v_friendly_text(item_text){
    if (item_text === true){
        return "Yes"
    } return "No"
}

export default function ThaiItem({item, index, onClickAdd, onClickRemove, cart}){
    return (
        <div className="bakery-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p> Type: {item.type} </p>
        <p> Vegetarian Friendly: {v_friendly_text(item.v_friendly)}</p>
        <p> Quantity: {cart[index]} </p> 
        <button onClick={() => onClickAdd(index, item.price)}> Add to cart</button>
        <button onClick={() => onClickRemove(index, item.price)}> Remove from Cart</button>
        </div>
    );
}