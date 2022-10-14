import { Route, Routes } from 'react-router-dom';
import LoginForm from "../components/login/LoginForm";
import LoginHeader from "../components/login/LoginHeader";
import LoginFooter from "../components/login/LoginFooter";
import SignupForm from "../components/login/SignupForm";

function Login() {
    return (
        <div className="bg-beige flex flex-col h-screen">

            <LoginHeader />

            <div className="flex-grow px-10 flex flex-col items-center">
                <p className="text-4xl my-6">Make the most of your professional life</p>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                </Routes>
            </div>

            <LoginFooter />

        </div>
    )
}

export default Login