import { useState } from "react"
import './sign-up-form.style.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    console.log(formFields)

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const handeleSubmit = async (event) => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            )

            await createUserDocumentFromAuth(user, { displayName });
            resetFormField()

        }
        catch (error) {
            console.log('user creation encountered an error', error)

        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })

    }
    return (
        <div className="sing-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password </span>
            <form onSubmit={handeleSubmit}>

                <FormInput
                    label=' Display Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

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

                <FormInput
                    label='Confirm Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />
                <Button type="submit">Sing up</Button>
            </form>
        </div>
    )
}

export default SingUpForm