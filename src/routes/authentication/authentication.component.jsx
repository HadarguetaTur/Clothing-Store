
import SingUpForm from "../../components/sing-up-form/sing-up-form.component"
import SingInForm from "../../components/sign-in-form/sing-in-form.component"
import {AuthContainer} from './authentication.style.jsx'
const Authentication= () => {

    return (
        <AuthContainer >
            <SingInForm/>
            <SingUpForm/>
           
        </AuthContainer>
    )
}

export default Authentication