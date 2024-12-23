import { useRef, FormEvent, useState } from 'react'
// Components
import Button from '../components/Button.tsx'
import Container from '../components/Container.tsx'
import FormInput from '../components/FormInput.tsx'
// Styles
import '../styles/pages/SignupPage.css'

const SignupPage = () => {
    // Inputs States
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // Reference
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className='signup-page'>
            <Container>
                <form id='signup-form' ref={formRef} onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    {/* Firstname Input */}
                    <label htmlFor='firstname'>Firstname</label>
                    <FormInput
                        id='firstname'
                        type='text'
                        placeholder='Metro'
                        valueState={[firstname, setFirstname]}
                    />
                    {/* Lastname Input */}
                    <label htmlFor='lastname'>Lastname</label>
                    <FormInput
                        id='lastname'
                        type='text'
                        placeholder='Boomin'
                        valueState={[lastname, setLastname]}
                    />
                    {/* Username Input */}
                    <label htmlFor='username'>Username</label>
                    <FormInput
                        id='username'
                        type='text'
                        placeholder='metroboomin123'
                        valueState={[username, setUsername]}
                    />
                    {/* Email Input */}
                    <label htmlFor='email'>Email</label>
                    <FormInput
                        id='email'
                        type='email'
                        placeholder='metroboomin@gmail.com'
                        valueState={[email, setEmail]}
                    />
                    {/* Password Input */}
                    <label htmlFor='password'>Password</label>
                    <FormInput
                        id='password'
                        type='password'
                        placeholder='************'
                        valueState={[password, setPassword]}
                    />
                    {/* Confirm Password Input */}
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <FormInput
                        id='confirm-password'
                        type='password'
                        placeholder='************'
                        valueState={[confirmPassword, setConfirmPassword]}
                    />
                    {/* Submit Button */}
                    <Button
                        type='button'
                        onClick={() => {
                            formRef.current!.requestSubmit()
                        }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default SignupPage
