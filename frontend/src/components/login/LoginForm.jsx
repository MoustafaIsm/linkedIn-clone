import Input from "../common/Input"

function LoginForm() {
    return (
        <div className="rounded bg-white w-96 py-4 flex flex-col items-center gap-4">
            <Input label={'Email'} />
            <Input type="password" label={'Password'} />
            <button className="w-3/4 bg-primary-blue text-white rounded-3xl py-3 font-bold text-xl hover:bg-secondary-blue transition-all duration-300">
                Login
            </button>
        </div>
    )
}

export default LoginForm