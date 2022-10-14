
function FeedCard() {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col">
            <div className="flex items-center gap-3">
                <div className="bg-gray-300 rounded-full w-16 h-16">

                </div>
                <div className="flex flex-col gap-1 flex-grow">
                    <p className="font-bold text-xl hover:cursor-pointer hover:text-primary-blue hover:underline w-fit">Company name</p>
                    <p>Location</p>
                </div>
                <div>
                    <button className="uppercase bg-primary-blue text-white font-bold p-2 px-4 rounded-lg hover:bg-secondary-blue hover:cursor-pointer">Easy apply</button>
                </div>
            </div>
            {/* Job discription */}
            <div className="p-1 py-3">
                <p>discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription discription</p>
            </div>
        </div>
    )
}

export default FeedCard