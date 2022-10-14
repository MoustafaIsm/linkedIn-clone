import Input from "../common/Input"

function LoginForm() {
    return (
        <div className="rounded bg-white w-96 py-4 flex flex-col items-center">
            <Input label={'Email'} />
        </div>
    )
}

export default LoginForm