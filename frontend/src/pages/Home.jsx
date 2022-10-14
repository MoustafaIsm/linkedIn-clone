import { Route, Routes } from "react-router-dom";
import SideNavigation from "../components/home/SideNavigation";
import Feed from "./home/Feed";
import Messages from "./home/Messages";
import Notifications from "./home/Notifications";
import UserProfile from "./home/UserProfile";
import OtherProfile from "./home/OtherProfile"

function Home() {
    return (
        <div>
            <SideNavigation />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/user_profile" element={<UserProfile />} />
                <Route path="/other_profile" element={<OtherProfile />} />
            </Routes>
        </div>
    )
}

export default Home