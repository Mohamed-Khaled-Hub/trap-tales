import { useRef, FormEvent, useState } from 'react'
// Components
import Button from '../components/Button.tsx'
import Container from '../components/Container.tsx'
import FormInput from '../components/FormInput.tsx'
// Styles
import '../styles/pages/LoginPage.css'

const LoginPage = () => {
    // Inputs States
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // Reference
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className='login-page'>
            <Container>
                <form id='login-form' ref={formRef} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {/* Username Input */}
                    <label htmlFor='username'>Username</label>
                    <FormInput
                        id='username'
                        type='text'
                        placeholder='Username'
                        valueState={[username, setUsername]}
                    />
                    {/* Password Input */}
                    <label htmlFor='password'>Password</label>
                    <FormInput
                        id='password'
                        type='password'
                        placeholder='Password'
                        valueState={[password, setPassword]}
                    />
                    {/* Submit Button */}
                    <Button
                        type='button'
                        onClick={() => {
                            formRef.current!.requestSubmit()
                        }}
                    >
                        Login
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default LoginPage
