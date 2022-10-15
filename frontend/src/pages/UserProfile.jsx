import { useEffect, useState } from "react";
import JobOpeningCard from "../components/home/JobOpeningCard";
import UserInfo from "../components/home/UserInfo";

function UserProfile() {

    const [isCompany, setIsCompany] = useState(true);

    useEffect(() => {
        setIsCompany(localStorage.getItem('isCompany'));
    }, []);

    return (
        <div className="ml-72 bg-beige p-4 ">
            <div className="flex justify-between">
                <p className="font-bold text-3xl ">Profile</p>
                <button className="bg-primary-blue text-white uppercase font-bold p-2 px-4 rounded hover:cursor-pointer hover:bg-secondary-blue transition-all duration-300">
                    Edit profile
                </button>
            </div>
            <div className="flex p-4 bg-white items-center rounded-lg my-4 shadow-md">
                <div className="bg-gray-300 rounded-full w-52 h-52">

                </div>
                {/* User info */}
                <UserInfo isCompany={isCompany} />
            </div>
            {
                isCompany ?
                    <div>
                        <p className="font-bold text-xl ">Job openings</p>
                        <div className="flex flex-col gap-4 my-4">
                            <JobOpeningCard />
                            <JobOpeningCard />
                            <JobOpeningCard />
                            <JobOpeningCard />
                            <JobOpeningCard />
                            <JobOpeningCard />
                        </div>
                    </div>
                    :
                    <>
                    </>
            }
        </div>
    )
}

export default UserProfile