import { useState } from "react"

function TopNavigation() {

    const [search, setSearch] = useState('');

    return (
        <div className="ml-72 p-3 flex justify-between">
            <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='p-1 px-2 border-2 rounded border-none bg-blue-100 focus:outline-gray-300' />
            <button className="uppercase py-2 px-5 border-primary-blue border-2 text-black rounded-lg hover:bg-primary-blue hover:text-white">
                Logout
            </button>
        </div>
    )
}

export default TopNavigation