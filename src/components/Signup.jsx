import { useState } from "react";
import axiosInstance from "../helpers/axiosInstance";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {

    const [hotel_name, setName] = useState("");
    const [category_hotel, setCategory] = useState("");
    const [hotel_desc, setDesc] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);

    const submmit = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log("Submiting data")

        axiosInstance.post("add_hotel", {
             hotel_name,
             hotel_desc,
             category_hotel,
             location,
             email,
            phone,
           password
        }).then (function (response) {
            console.log(response)
            setLoading(false)
            setSuccess(response.data.message)

            setEmail('');
            setCategory('')
            setDesc('')
            setLocation('')
            setName('');
            setPhone('');
            setPassword('');

        }).catch(function(error){
            console.log(error)
            setLoading(false)
            setFailure(error.message)
        })
    }

    return ( 
        <div className="form">
            <Section>
                {loading && <div className="loading">Please wait...</div>}
                {success && <div className="success">{success}</div>}
                {failure && <div className="failure">{failure}</div>}

                <form onSubmit={submmit} className="card shadow p-3 pt-4">
                    <h1>Register your Hotel</h1>
                    <div className="card-body">
                        <input type="text" placeholder="Enter Hotel Name" value={hotel_name} onChange={(e)=> setName(e.target.value)} required className="form-control" /><br/><br/>
                        <input type="text" placeholder="Enter Hotel Category" value={category_hotel} onChange={(e)=> setCategory(e.target.value)} required className="form-control" /><br/><br/>
                        <input type="text" placeholder="Enter Hotel Description" value={hotel_desc} onChange={(e)=> setDesc(e.target.value)} required className="form-control" /> <br/><br/>
                        <input type="text" placeholder="Enter Hotel Location" value={location} onChange={(e)=> setLocation(e.target.value)} required className="form-control" /> <br/><br/>
                        <input type="email" placeholder="Enter Hotel Email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="form-control" /> <br/><br/>
                        <input type="tel" placeholder="Enter Hotel Phone" value={phone} onChange={(e)=> setPhone(e.target.value)} required className="form-control" /> <br/><br/>
                        <input type="password" placeholder="Enter Hotel Password" value={password} onChange={(e)=> setPassword(e.target.value)} required className="form-control" /> <br/> <br/>
                        <button className="btn btn-dark">Create Account</button>
                    <div>
                        <Link to="/signin">Already have an Account? Login</Link>
                    </div>
                    </div>
                </form>


            </Section>
        </div>
     );
}
 
export default Signup;
const Section  = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    top: 0px;
    background-color: #30D5C8;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`