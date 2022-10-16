import { useState } from "react"
import './sign-in-form.style.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase.utils"
const defaultFormFields = {
    email: '',
    password: '',
}


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const handeleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = signInAuthUserWithEmailAndPassword(email, password)
            resetFormField()


        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })

    }
    return (
        <div className="sing-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password </span>
            <form onSubmit={handeleSubmit}>
                <FormInput
                    type="email"
                    label='Email'
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label='Password'
                    type="password"
                    required onChange={handleChange}
                    name="password"
                    value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sing in</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SingInForm