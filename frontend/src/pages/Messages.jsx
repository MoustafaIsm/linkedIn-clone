import Chat from "../components/home/Chat";
import Message from "../components/home/Message";

function Messages() {
    return (
        <div className="ml-72 bg-beige p-4 flex gap-4 h-[90vh]">
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
    )
}

export default Messages