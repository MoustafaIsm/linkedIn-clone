
function UserInfo({ isCompany }) {

    let userInfo = '';
    if (isCompany) {
        userInfo =
            <div className="grid grid-cols-2 flex-grow text-xl px-4">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Name</p>
                    <p>Email</p>
                    <p>Location</p>
                    <p>Date of Creation</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Feild</p>
                    <p>Number of employees</p>
                    <p>Recruiting</p>
                </div>
            </div>
            ;
    } else {
        userInfo =
            <div className="grid grid-cols-2 flex-grow text-xl px-4">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Name</p>
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
            </div>;
    }

    return (
        <>
            {userInfo}
        </>
    )
}

export default UserInfo