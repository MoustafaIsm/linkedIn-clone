import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/access/Header';
import Footer from './components/access/Footer';
import LoginForm from './components/access/LoginForm';
import SignupForm from './components/access/SignupForm';
import SideNavigation from "./components/home/SideNavigation";
import TopNavigation from "./components/home/TopNavigation";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import UserProfile from "./pages/UserProfile";
import OtherProfile from "./pages/OtherProfile"

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        setIsAuthenticated(token);
    }, [token]);

    return (
        <BrowserRouter>
            {
                isAuthenticated ?
                    <>
                        <SideNavigation />
                        <TopNavigation />
                        <Routes>
                            <Route path="/" element={<Feed />} />
                            <Route path="/home" element={<Feed />} />
                            <Route path="/messages" element={<Messages />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route path="/other_profile" element={<OtherProfile />} />
                        </Routes>
                    </>
                    :
                    <div className="bg-beige flex flex-col h-screen">
                        <Header />
                        <div className="flex-grow px-10 flex flex-col items-center">
                            <p className="text-4xl my-6">Make the most of your professional life</p>
                            <Routes>
                                <Route path="/" element={<LoginForm />} />
                                <Route path='/login' element={<LoginForm />} />
                                <Route path="/signup" element={<SignupForm />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
            }

        </BrowserRouter>
    );
}

export default App;
