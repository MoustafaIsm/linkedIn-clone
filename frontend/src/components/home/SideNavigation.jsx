import NavButton from "./NavButton"

function SideNavigation() {
    return (
        <div className="fixed w-72 bg-beige h-screen border-r-2 border-primary-blue flex flex-col items-center">
            <ul className="w-full flex flex-col justify-center">
                <li className="w-3/4 m-auto"><img src="/linkedin-logo.png" alt="Logo" /></li>
                <NavButton title={'home'} />
                <NavButton title={'messages'} />
                <NavButton title={'notifications'} />
                <NavButton title={'profile'} />
            </ul>
        </div>
    )
}

export default SideNavigation