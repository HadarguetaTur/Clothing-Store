import { CartDropdownContainer, EmptyMessage, CartItemStyle } from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import { selectCartItems } from '../../store/cart/cart.selector.js'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
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