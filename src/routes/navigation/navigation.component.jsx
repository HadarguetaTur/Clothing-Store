import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { ReactComponent as LogoSvg } from "../../assets/images/LogoSvg.svg"

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer, NavLink, LogoContainer, NavLinks } from './navigation.style.jsx'

const Navigation = () => {
  const currentUser  =useSelector(selectCurrentUser);
  const isCartOpen  = useSelector(selectIsCartOpen)


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


