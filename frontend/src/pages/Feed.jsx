import FeedCard from '../components/home/FeedCard';

function Feed() {
    return (
        <div className="ml-72 bg-beige p-4 flex flex-col gap-6">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </div>
    )
}

export default Feed