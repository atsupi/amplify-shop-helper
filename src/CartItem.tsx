import "./CartItem.css"

function CartItem ({item}) {
    return (
        <>
        <p>{item.id}</p>
        <p>{item.imageName}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        </>
    )
}

export default CartItem;