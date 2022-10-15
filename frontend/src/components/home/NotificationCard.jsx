
function NotificationCard() {
    return (
        <div className="bg-white p-4 rounded">
            <div className="flex items-center gap-3">
                <div className="bg-gray-300 rounded-full w-16 h-16">

                </div>
                <div className="flex flex-col gap-1 flex-grow">
                    <p className="font-bold text-xl hover:cursor-pointer hover:text-primary-blue hover:underline w-fit">Company name</p>
                    <p>Location</p>
                </div>
            </div>
            <div className="p-1 py-3">
                <p>Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening Job opening</p>
            </div>
        </div>
    )
}

export default NotificationCard