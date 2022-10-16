import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"
import SingUpForm from "../../components/sing-up-form/sing-up-form.component"
import Button from "../../components/button/button.component"
const SingIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sing In</h1>
            <Button buttonType='google' onClick={logGoogleUser}>
                google
            </Button>
            <SingUpForm/>
        </div>
    )
}

export default SingIn