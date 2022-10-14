import LoginHeader from "../components/login/LoginHeader";
import LoginFooter from "../components/login/LoginFooter";
import SignupForm from "../signup/SignupForm";

function Signup() {
    return (
        <div className="bg-beige flex flex-col h-screen">

            <LoginHeader />

            <div className="flex-grow px-10 flex flex-col items-center">
                <p className="text-4xl my-6">Make the most of your professional life</p>
                <SignupForm />
            </div>

            <LoginFooter />

        </div>
    )
}

export default Signup