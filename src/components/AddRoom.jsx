import { useState } from "react";
import checkSession from "../helpers/checkSession";
import AxiosTokenInstance from "../helpers/axiosTokenInstance";
import Layout from "./Layout";
import Main from "../styles/main";
import Dropdown from "./Dropdown";

const AddRoom = () => {

    const {hotel_id} = checkSession();

    const [room_name, setName] = useState(null);
    const [room_category, setCategory] = useState(null);
    const [room_desc, setDesc] = useState(null);
    const [room_phone, setPhone] = useState(null);
    const [room_cost, setCost] = useState(null);
    const [status, setStatus] = useState(null);
    const [no_guests, setNo] = useState(null);
    const [success, setSuccess] = useState(null);
    const [failure, setFailure] = useState(null);
    const [loading, setLoading] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const submit = (e) => {
        e.preventDefault()
        setLoading(false)
        console.log("Submitting",
            AxiosTokenInstance.post('add_room', {
                room_name,
                room_category,
                room_desc,
                room_phone,
                room_cost,
                status,
                no_guests,
                hotel_id
            }).then (function (response) {
                console.log(response)
                setLoading(false)
                setSuccess(response.data.message)
                setCost('')
                setDesc('')
                setName('')
                setCategory('')
                setPhone('')
                setStatus('')
                setNo('')
                setFailure('')
            }).catch (function (error){
                console.log(error)
                setFailure(error.message)
                setLoading(false)
            })
        )
    }

    const handleSelect = (e) =>{
        setStatus(e.target.value)
    }

    return (  
        <div>
            <Layout/>
            <Main>
                <form onSubmit={submit} className="card shadow p-4">
                    <div className="card-body">
                        { loading && <div className="text-warning">Please wait...</div> }
                        { success && <div className="text-success">{success}</div> }
                        { failure && <div className="text-danger">{failure}</div> }

                        <input type="text" placeholder="Enter room name" value={room_name} onChange={(e)=> setName(e.target.value)} required className="form-control" /> <br/><br/>
                        
                        <Dropdown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} setCategory={setCategory}/><br /><br />
                     
                        <input type="number" placeholder="Enter room cost per night " value={room_cost} onChange={(e)=> setCost(e.target.value)} required className="form-control" /> <br/><br/>
                        <input type="tel" placeholder="Enter room_phone" value={room_phone} onChange={(e)=> setPhone(e.target.value)} required className="form-control" /> <br/><br/>

                        <div className="form-control text-start">
                        <label htmlFor="">Status</label> <br /><br />
                        <input type="radio" name="status" value="Available" onChange={handleSelect} checked={status === "Available"}/><br />
                        <input type="radio" name="status" value="Not Available" onChange={handleSelect} checked={status === "Available"}/><br />
                        </div><br /><br />
                        <input type="number" placeholder="Enter number of guests" value={no_guests} onChange={(e)=> setNo(e.target.value)} required className="form-control" /> <br/><br/>

                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter room description" value={room_desc} onChange={(e)=> setDesc(e.target.value)} required className="form-control"></textarea><br /><br />
                        <button className="btn btn-dark">Add Room</button>
                    </div>
                </form>

            </Main>
        </div>
    );
}
 
export default AddRoom;
// const Section  = styled.section`
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     align-items: center;
//     justify-content: center;
//     top: 0px;
//     background-color: #30D5C8;
//     background-size: cover;
//     width: 100vw;
//     height: 100vh;
//     overflow: auto;
// `