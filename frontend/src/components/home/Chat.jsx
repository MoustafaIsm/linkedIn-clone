
function Chat() {
    return (
        <div className="p-5 border-b-2 border-primary-blue hover:cursor-pointer hover:bg-gray-200 transition-all duration-300">
            <div className="flex items-center gap-3">
                <div className="bg-gray-300 rounded-full w-16 h-16">

                </div>
                <div className="flex flex-col gap-1 flex-grow">
                    <p className="font-bold text-xl w-fit">Name</p>
                    <p>Latest message</p>
                </div>
                <div className="text-gray-300"><p>Date</p></div>
            </div>
        </div>
    )
}

export default Chat