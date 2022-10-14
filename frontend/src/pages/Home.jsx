import { Route, Routes } from "react-router-dom";
import SideNavigation from "../components/home/SideNavigation";
import Feed from "../components/home/Feed";
import Messages from "../components/home/Messages";
import Notifications from "../components/home/Notifications";
import UserProfile from "../components/home/UserProfile";
import OtherProfile from "../components/home/OtherProfile"

function Home() {
    return (
        <div>
            <SideNavigation />
            <Routes>
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