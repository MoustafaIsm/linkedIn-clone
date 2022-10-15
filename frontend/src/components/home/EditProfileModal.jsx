import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function EditProfileModal() {
    return (
        <Popup
            trigger={
                <button className="bg-primary-blue text-white uppercase font-bold p-2 px-4 rounded hover:cursor-pointer hover:bg-secondary-blue transition-all duration-300">
                    Edit profile
                </button>} modal>

        </Popup>
    )
}

export default EditProfileModal