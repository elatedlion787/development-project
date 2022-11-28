// TODO: create a component that displays a single bakery item
export default function ThaiItem({item, index, onClick}){
    return (
        <div className="bakery-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p> Type: {item.type} </p>
        <p> Vegetarian Friendly?: {item.v_friendly}</p>
        <p>${item.price}</p>
        <button onClick={() => onClick(index, item.price)}> Add to cart</button>
        </div>
    );
}