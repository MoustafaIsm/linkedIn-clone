import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Input from '../common/Input';

function EditProfileModal({ isCompany }) {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [feild, setField] = useState('');

    return (
        <Popup
            trigger={
                <button className="bg-primary-blue text-white uppercase font-bold p-2 px-4 rounded hover:cursor-pointer hover:bg-secondary-blue transition-all duration-300">
                    Edit profile
                </button>} modal>
            <div>
                <p className='text-2xl font-bold'>Edit profile</p>
            </div>
            {
                isCompany ?
                    <div>
                        <form>
                            {/* Image */}
                            <div>

                            </div>
                            <Input
                                label={'Name'}
                                value={name}
                                onChange={setName} />
                            <Input
                                label={'Location'}
                                value={location}
                                onChange={setLocation} />
                            <Input
                                label={'Field'}
                                value={feild}
                                onChange={setField} />
                            <Input
                                label={'Name'}
                                value={name}
                                onChange={setName} />
                        </form>
                    </div>
                    :
                    <div>

                    </div>
            }
        </Popup>
    )
}

export default EditProfileModal