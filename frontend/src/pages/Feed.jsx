import FeedCard from '../components/home/FeedCard';

function Feed() {
    return (
        <div className="ml-72 bg-beige p-4 flex flex-col gap-6">
            <p className="font-bold text-3xl ">Feeds</p>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </div>
    )
}

export default Feed