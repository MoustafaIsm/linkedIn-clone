import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { register } from "../../query/auth";
import Input from "../common/Input"

function SignupForm() {

    const nagivate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openLoginForm = () => {
        nagivate('/login');
    }

    const registerCompany = async (e) => {
        e.preventDefault();
        const data = {
            'is_company': true,
            'name': name,
            'email': email,
            'password': password
        };
        const response = await register(data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isCompany', response.data.isCompany);
        window.location.href = '/';
    }

    return (
        <div>
            <form className="rounded bg-white w-96 py-4 flex flex-col items-center gap-4" onSubmit={(e) => registerCompany(e)}>
                <Input
                    label={'Name'}
                    value={name}
                    onChange={setName} />
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
                    Signup
                </button>
                <p>Already have an account?
                    <span className="uppercase text-primary-blue hover:cursor-pointer hover:text-secondary-blue hover:underline underline-offset-2 p-1 transition-all duration-300 rounded" onClick={openLoginForm}>Login</span>
                </p>
            </form>
        </div>
    )
}

export default SignupForm