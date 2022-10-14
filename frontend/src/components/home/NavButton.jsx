
function NavButton({ title }) {
    return (
        <li className="w-3/4 flex m-auto items-center p-4 hover:cursor-pointer hover:bg-white">
            <img src={`/${title}.png`} alt={title} className="w-8" />
            <p className="text-xl capitalize"> {title} </p>
        </li>
    )
}

export default NavButton