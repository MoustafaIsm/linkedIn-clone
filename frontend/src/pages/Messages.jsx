import Chat from "../components/home/Chat";
import Message from "../components/home/Message";

function Messages() {
    return (
        <div>
            <p className="font-bold text-3xl ml-72 bg-beige p-4 ">Messages</p>
            <div className="ml-72 bg-beige p-4 flex gap-4 h-[80vh]">
                {/* Chats */}
                <div className="w-1/2 flex flex-col bg-white overflow-y-scroll">
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                </div>
                {/* Messages */}
                <div className="w-1/2 flex flex-col bg-white overflow-y-scroll">
                    <Message />
                </div>
            </div>
        </div>
    )
}

export default Messages