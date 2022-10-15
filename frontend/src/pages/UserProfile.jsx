
function UserProfile() {
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
                <div className="grid grid-cols-2 flex-grow text-xl px-4">
                    <div className="flex flex-col gap-4">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Location</p>
                        <p>Date of birth</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>Education</p>
                        <p>Degree</p>
                        <p>CV</p>
                        <p>Work</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile