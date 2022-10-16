import { useNavigate } from "react-router-dom"

function NavButton({ title, active, changeActive }) {
    const navigate = useNavigate();

    const changePage = () => {
        changeActive(title);
        navigate(`/${title}`);
    }

    return (
        <li className={`w-3/4 flex m-auto items-center p-4 hover:cursor-pointer hover:bg-white transition-all duration-300 rounded-2xl ${active === title ? 'bg-white font-bold' : ''}`}
            onClick={changePage}>
            <img
                src={`/${title}.png`}
                alt={title}
                className="w-8" />
            <p className="text-xl capitalize"> {title} </p>
        </li>
    )
}

export default NavButton