import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";


const Shipment = () => {

    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    // const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    /*  */

    const handleCreateUser = event => {
        event.preventDefault();
        const Shipping = { name, email, address, phone};
        console.log(Shipping);

    }

    return (
        <div className='form-container'>
            <div className="auth-form">
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleCreateUser}>

                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Enter your name' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input value={user?.email} type="email" name="email" id="" placeholder='Enter your email' readOnly />
                    </div>

                    <div className="input-group">
                        <label htmlFor='Address'>Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Enter your address' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='phone'>Phone</label>
                        <input onBlur={handlePhoneBlur} type='number' name="phone" id="" placeholder='Your Phone Number' required />
                    </div>

                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' id="" type='submit' value="Add Shipping" />
                </form>
            </div>
        </div >
    );
};

export default Shipment;