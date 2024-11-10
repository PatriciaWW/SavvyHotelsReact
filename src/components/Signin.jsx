import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";
import styled from "styled-components";

const Signin = () => {
    const [email, setEmail] = useState(null);
        const [password, setPassword] = useState(null);
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(null);
        const [failure, setFailure] = useState(null);

        const navigate = useNavigate()
        const submmit = (e) => {
            e.preventDefault()
            setLoading(true)
            console.log("Submiting data")

            axiosInstance.post('hotel_login', {
                email: email,
                password: password
            }).then (function (response) {
                console.log(response)
                setLoading(false)
                if (response.data && response.data.token && response.data.hotel_id){
                    localStorage.setItem("hotel_id",response.data.hotel_id)
                    localStorage.setItem("token",response.data.token)
                    localStorage.setItem("hotel_name",response.data.hotel_name)
                    setSuccess(response.data.message)
                    navigate("/")
                
                } else {
                    setFailure("Login failed. No token recieved")
                }
            }).catch (function (error){
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
                                        <h1>Hotel Login</h1>
                                        <div className="card-body">
                                            <input type="email" placeholder="Enter Hotel Email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="form-control" /> <br/><br/>
                                            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)} required className="form-control" /> <br/> <br/>
                                            <button className="btn btn-dark">Log In</button>
                                        <div>
                                            <Link to="/signup">Don't have an Account? Register</Link>
                                        </div>
                                        </div>
                                    </form>
                                </Section>
                            </div>
         );
}
 
export default Signin;
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
`