import { Outlet, Link } from "react-router-dom"
import { ReactComponent as LogoSvg } from "../../assets/images/LogoSvg.svg"
import { Fragment, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase.utils"
import { CartContext } from "../../contexts/cart.context"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer, NavLink, LogoContainer, NavLinks } from './navigation.style.jsx'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <LogoSvg />
        </LogoContainer>
        <NavLinks >
          <NavLink className="nav-link" to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ?
              (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
              : (<NavLink className="nav-link" to='/auth'>
                SING IN
              </NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
export default Navigation


