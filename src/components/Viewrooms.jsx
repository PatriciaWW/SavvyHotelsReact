import { useEffect, useState } from "react";
import checkSession from "../helpers/checkSession";
import Main from "../styles/main";
import Layout from "./Layout";
import AxiosTokenInstance from "../helpers/axiosTokenInstance";
import { Link } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";

const Viewrooms = () => {
    const {hotel_name, hotel_id, token} = checkSession();

    const [rooms, setRooms] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredData, setFiltered] = useState(null)
    const [searchtext,setSearch]= useState(null)

    useEffect(()=>{
        axiosInstance.post("rooms", {
            hotel_id
        }).then(function (response){
            console.log(response.data)
            setFiltered(response.data)
            setRooms(response.data)
            setLoading(false)
        }).catch(function (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        })
    }, [hotel_id])

    const handleLiveSearch = (value) => {
        setSearch(value)
        const filtered = rooms && rooms.filter(
            (item) => item.room_category.toLowerCase().includes(value.toLowerCase())
        );
        setFiltered(filtered)
    }

    return ( 
        <div>
            <Layout/>
            <Main>
                <input type="text" placeholder="Search room category" value={searchtext} onChange={(e)=>handleLiveSearch(e.target.value)} className="form-control" />
                <table className="table table-striped bg-light p-5 m-1">
                    { loading && <div className="text-warning">Please wait...</div> }
                    { error && <div className="text-danger">{error}</div> }
                    <thead>
                        <tr>
                            <th>Room Name</th>
                            <th>Room Category</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData && filteredData.map (room =>{
                            return(
                                <tr className="mt-5" key={room._id}>
                                    <td>{room.room_name}</td>
                                    <td>{room.room_category}</td>
                                    <td><span className={`rounded bg-green-500 pt-2`}>{room.status}</span></td>
                                    <td><Link to="/roomdetails"><button className="btn btn-dark">View Details</button></Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Main>
        </div>
     );
}
 
export default Viewrooms;