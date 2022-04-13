import { useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";


const Shipment = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

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
        const Shipping = { name, email, address, phone };
        console.log(Shipping);

    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div className="auth-form">
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Enter your name' required />
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <div className="input-group">
                        <label htmlFor='Address'>Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Enter your address' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='phone'>Phone</label>
                        <input onBlur={handlePhoneBlur} type='number' name="phone" id="" placeholder='Your Phone Number' required />
                    </div>
                    <Form.Group as={Col} controlId="formGridCity" className="w-75">
                        <Form.Label>City</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Dhaka</option>
                            <option>Rangpur</option>
                            <option>Barisal</option>
                            <option>Barisal</option>
                            <option>Naoga</option>
                        </Form.Select>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Mirpur</option>
                            <option>Basundhara</option>
                            <option>Nodda</option>
                            <option>Guushan</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>1000</option>
                            <option>1200</option>
                            <option>1109</option>
                        </Form.Select>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' id="" type='submit' value="Add Shipping" />
                </form>
            </div>
        </div >
    );
};

export default Shipment;