import { useEffect, useState } from "react";
import checkSession from "../helpers/checkSession";
import AxiosTokenInstance from "../helpers/axiosTokenInstance";
import Layout from "./Layout";
import Main from "../styles/main";

const Profile = () => {
    const {hotel_name, hotel_id, token} = checkSession();

    const [hotel_details, setDetails] = useState({})
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        AxiosTokenInstance.post("hotel_profile", {
            hotel_id
        }).then(function (response){
            console.log(response.data)
            setDetails(response.data)
            setError('')
            setLoading(false)
        }).catch(function (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        })
    }, [hotel_id])

    const data_size = Object.keys(hotel_details).length > 0
    // data_size willl be true if the data_size is greater than 0

    return ( 
        <div>
            <Layout/>
            <Main>
                <h1>Profile</h1>
                { loading && <div className="text-warning">Please wait...</div> }
                { error && <div className="text-danger">{error}</div> }

                {data_size ?
                    <div className="card shadow m-3 text-start col-md-3">
                        <div className="card-body">
                            <span><b>ID: </b> {hotel_details._id}</span><br /><br />
                            <span><b>Hotel Name: </b> {hotel_details.hotel_name}</span><br /><br />
                            <span><b>Hotel Category: </b> {hotel_details.category_hotel}</span><br /><br />
                            <span><b>Hotel Description: </b> {hotel_details.hotel_desc}</span><br /><br />
                            <span><b>Phone: </b> {hotel_details.hotel_desc}</span><br /><br />
                            <span><b>Location: </b> {hotel_details.location}</span><br /><br />
                            <span><b>Phone: </b> {hotel_details.phone}</span><br /><br />
                            <span><b>Email: </b> {hotel_details.email}</span><br /><br />
                        </div>
                    </div> : <span>No profile data</span>
                }
            
            </Main>
        </div>
     );
}
 
export default Profile;