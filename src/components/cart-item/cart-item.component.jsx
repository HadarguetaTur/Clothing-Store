import {CartItemContainer,ItemDetails} from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <CartItemContainer >
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails >
                <span className='name'>{name}</span>
                <span className='price'>{quantity}x ${price}</span>

            </ItemDetails>
            <h2>{name}</h2>


        </CartItemContainer>
    )

}


export default CartItem