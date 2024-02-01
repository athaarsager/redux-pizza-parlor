import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Order(){
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [deliveryType,setDeliveryType] = useState('pickup');
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        dispatch({
            type:'ADD_CURRENT_USER',
            payload: {
                customer_name: name,
                street_address: address,
                city: city,
                zip: zip,
                type: deliveryType,
            }
        });

        history.push('/checkout');

    }

    function handleDeliveryType(event) {
        if (event.target.value === 'pickup') {
            setDeliveryType('pickup');
            
        }
        else{
            setDeliveryType('delivery');
        }
        
    }
    return <>
        <h1>Step 2: Customer Information</h1>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e=>{setName(e.target.value)}} placeholder="Name" type="text" />
            <input value={address} onChange={e=>{setAddress(e.target.value)}} placeholder="Street Address" type="text" />
            <input value={city} onChange={e=>{setCity(e.target.value)}} placeholder="City" type="text" />
            <input value={zip} onChange={e=>setZip(e.target.value)} placeholder="Zip" type="text" />


            <div>
                <input value="pickup" checked={deliveryType === 'pickup'} type="radio" name="pickup" id="pickup" onChange={handleDeliveryType} />
                <label htmlFor="pickup">Pickup</label>
            </div>
            <div>
                <input type="radio" name="Delivery" id="Delivery" checked={deliveryType === 'delivery'} onChange={handleDeliveryType}/>
                <label htmlFor="delivery">Delivery</label>
            </div>

            <button>Next</button>
        </form>
        
    </>
}