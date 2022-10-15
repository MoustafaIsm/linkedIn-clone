import NotificationCard from "../components/home/NotificationCard"

function Notifications() {
    return (
        <div className="ml-72 bg-beige p-4 ">
            <p className="font-bold text-3xl ">Notifications</p>
            <div className="grid grid-cols-2 gap-4 py-4">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </div>
    )
}

export default Notifications