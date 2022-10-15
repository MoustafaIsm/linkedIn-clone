import { useState } from "react";
import JobOpeningCard from "../components/home/JobOpeningCard";
import UserInfo from "../components/home/UserInfo";

function OtherProfile() {

    const [isCompany, setIsCompany] = useState(true);

    return (
        <div className="ml-72 bg-beige p-4 ">
            <div className="flex p-4 bg-white items-center rounded-lg my-4 shadow-md">
                <div className="bg-gray-300 rounded-full w-52 h-52">

                </div>
                {/* User info */}
                <UserInfo isCompany={isCompany} />
            </div>

            <div className="flex p-4 bg-white justify-center rounded-lg my-4 shadow-md">
                <button className="uppercase bg-primary-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-secondary-blue hover:cursor-pointer">
                    Follow
                </button>
            </div>

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
        </div>
    )
}

export default OtherProfile