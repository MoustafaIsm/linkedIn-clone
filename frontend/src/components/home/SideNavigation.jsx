import { useState } from "react"
import NavButton from "./NavButton"

function SideNavigation() {

    const [isActive, setIsActive] = useState('home');

    return (
        <div className="fixed w-72 bg-beige h-screen border-r-2 border-primary-blue flex flex-col items-center">
            <ul className="w-full flex flex-col justify-center gap-1">
                <li className="w-3/4 m-auto"><img src="/linkedin-logo.png" alt="Logo" /></li>
                <NavButton title={'home'} active={isActive} changeActive={setIsActive} />
                <NavButton title={'notifications'} active={isActive} changeActive={setIsActive} />
                <NavButton title={'profile'} active={isActive} changeActive={setIsActive} />
            </ul>
        </div>
    )
}

export default SideNavigation