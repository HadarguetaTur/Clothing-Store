import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'


const CartDropdown = ()=>{
    const {cartItems}=useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <div className='cart-items'>
                    {cartItems.map(item=>
                    <CartItem key={item.id} cartItem={item}/>)}
                </div>
                <Button>GO TO CHECOUT</Button>

            </div>

        </div>
    )

}

export default CartDropdown