import LoginForm from "../components/login/LoginForm"

function Login() {
    return (
        <div className="bg-beige flex flex-col h-screen">
            <header className="px-10">
                <img src="/linkedin-logo.png" alt="Logo" className="h-20" />
            </header>

            <div className="flex-grow px-10 flex justify-center items-center">
                <LoginForm />
            </div>

            <footer className="px-10 bg-white">
                <ul className="flex flex-wrap text-sm justify-center items-center text-gray-500">
                    <li className="m-1"><img src="/linkedin-logo-2.png" alt="Logo" className="h-8" /></li>
                    <li className="m-1">© 2021</li>
                    <li className="m-1">About</li>
                    <li className="m-1">Accessibility</li>
                    <li className="m-1">User Agreement</li>
                    <li className="m-1">Privacy Policy</li>
                    <li className="m-1">Cookie Policy</li>
                    <li className="m-1">Copyright Policy</li>
                    <li className="m-1">Brand Policy</li>
                    <li className="m-1">Guest Controls</li>
                    <li className="m-1">Community Guidelines</li>
                </ul>
            </footer>
        </div>
    )
}

export default Login