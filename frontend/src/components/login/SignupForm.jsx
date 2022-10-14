import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../common/Input"

function SignupForm() {

    const nagivate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openLoginForm = () => {
        nagivate('/login');
    }

    return (
        <div>
            <form className="rounded bg-white w-96 py-4 flex flex-col items-center gap-4">
                <Input
                    label={'First name'}
                    value={firstName}
                    onChange={setFirstName} />
                <Input
                    label={'Last name'}
                    value={lastName}
                    onChange={setLastName} />
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
                <p>Already have an account?
                    <span className="uppercase text-primary-blue hover:cursor-pointer hover:text-white hover:bg-primary-blue p-1 transition-all duration-300 rounded" onClick={openLoginForm}>Login</span>
                </p>
            </form>
        </div>
    )
}

export default SignupForm