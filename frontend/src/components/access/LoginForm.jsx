import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../common/Input"

function LoginForm() {

    const nagivate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openSignup = () => {
        nagivate('/signup');
    }

    const openSignupCompany = () => {
        nagivate('/signup_company');
    }

    return (
        <form className="rounded bg-white w-96 py-4 flex flex-col items-center gap-4">
            <Input
                label={'Email'}
                value={email}
                onChange={setEmail} />
            <Input
                type="password"
                label={'Password'}
                value={password}
                onChange={setPassword} />
            <button className="w-3/4 bg-primary-blue text-white rounded-3xl py-3 font-bold text-xl hover:bg-secondary-blue transition-all duration-300">
                Login
            </button>
            <p className="w-3/4 text-center">Don't have an account?
                <span className="uppercase text-primary-blue hover:cursor-pointer hover:text-secondary-blue hover:underline underline-offset-2 p-1 transition-all duration-300 rounded" onClick={openSignup}>Sign up as user</span>
                OR
                <span className="uppercase text-primary-blue hover:cursor-pointer hover:text-secondary-blue hover:underline underline-offset-2 p-1 transition-all duration-300 rounded" onClick={openSignupCompany}>Sign up as company</span>
            </p>
        </form>
    )
}

export default LoginForm