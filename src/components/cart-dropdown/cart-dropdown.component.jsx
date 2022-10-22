import { CartDropdownContainer, EmptyMessage, CartItemStyle } from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer >
            <CartItemStyle>
                <div className='cart-itemss'>
                    {
                        cartItems.length ? (cartItems.map(item =>
                            <CartItem key={item.id} cartItem={item} />))
                            : <EmptyMessage>Your cart is empty</EmptyMessage>
                    }
                </div>
                <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
            </CartItemStyle>
        </CartDropdownContainer>
    )
}
export default CartDropdown