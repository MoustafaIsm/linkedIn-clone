import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/login/Header';
import Footer from './components/login/Footer';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/login/SignupForm';
import SideNavigation from "./components/home/SideNavigation";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import UserProfile from "./pages/UserProfile";
import OtherProfile from "./pages/OtherProfile"

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('token'));
    }, []);

    return (
        <BrowserRouter>
            {
                isAuthenticated ?
                    <>
                        <SideNavigation />
                        <Routes>
                            <Route path="/" element={<Navigate to={'/feed'} />} />
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/messages" element={<Messages />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/user_profile" element={<UserProfile />} />
                            <Route path="/other_profile" element={<OtherProfile />} />
                        </Routes>
                    </>

                    :
                    <div className="bg-beige flex flex-col h-screen">
                        <Header />
                        <div className="flex-grow px-10 flex flex-col items-center">
                            <p className="text-4xl my-6">Make the most of your professional life</p>
                            <Routes>
                                <Route path="/" element={<Navigate to={'/login'} />} />
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
