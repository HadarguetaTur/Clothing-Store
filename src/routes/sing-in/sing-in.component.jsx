import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"


const SingIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sing In</h1>
            <button onClick={logGoogleUser}>
                google
            </button>
        </div>
    )
}

export default SingIn