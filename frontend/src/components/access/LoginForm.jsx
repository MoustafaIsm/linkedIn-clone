import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from '../../query/auth';
import Input from "../common/Input"

function LoginForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCompany, setIsCompany] = useState(false);

    const openSignup = () => {
        navigate('/signup');
    }

    const openSignupCompany = () => {
        navigate('/signup_company');
    }

    const changeValue = (e) => {
        const isChecked = e.target.checked;
        setIsCompany(isChecked);
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const data = { 'email': email, 'password': password, 'is_company': isCompany };
        const response = await login(data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isCompany', response.data.isCompany);
        window.location.reload();
    }

    return (
        <form className="rounded bg-white w-96 py-4 flex flex-col items-center gap-4" onSubmit={(e) => loginUser(e)}>
            <Input
                label={'Email'}
                value={email}
                onChange={setEmail} />
            <Input
                type="password"
                label={'Password'}
                value={password}
                onChange={setPassword} />
            <div className="flex justify-center items-center gap-3">
                <input
                    type={'checkbox'}
                    value='Company'
                    id='company'
                    name='company'
                    onChange={(e) => changeValue(e)} />
                <label htmlFor="company">Are you a company ?</label>
            </div>
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