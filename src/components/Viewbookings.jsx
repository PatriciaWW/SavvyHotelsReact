import { useEffect, useState } from "react";
import AxiosTokenInstance from "../helpers/axiosTokenInstance";
import Layout from "./Layout";
import Main from "../styles/main";
import checkSession from "../helpers/checkSession";

const  Bookings = () => {

    const {hotel_name, hotel_id, token} = checkSession();

    const [bookings, setBookings] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredData, setFiltered] = useState(null)
    const [searchtext,setSearch]= useState(null)

    useEffect(()=>{
        AxiosTokenInstance.post("room_bookings", {
            hotel_id
        }).then(function (response){
            console.log(response.data)
            setBookings(response.data)
            setFiltered(response.data)
            setLoading(false)
        }).catch(function (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        })
    }, [hotel_id])
    const handleLiveSearch = (value) => {
        setSearch(value)
        const filtered = bookings && bookings.filter(
            (item) => item.room_name.toLowerCase().includes(value.toLowerCase())
        );
        setFiltered(filtered)
    }

    return ( 
        <div>
            <Layout/>
            <Main>
            { loading && <div className="text-warning">Please wait...</div> }
            { error && <div className="text-danger">{error}</div> }
            <input type="text" placeholder="Search room name" value={searchtext} onChange={(e)=>handleLiveSearch(e.targetvalue)} className="form-control"/>
            {filteredData && filteredData.map(booking =>{
                return(
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <p><b>Invoice No: {booking.invoice_no}</b></p>
                                <p>Member name:{booking.member_name}</p>
                                <p>Room name:{booking.room_name}</p>
                                <p>Checkin Date:{booking.checkin_date}</p>
                                <p>Checkout Date:{booking.checkout_date}</p>
                                <p>No of guests:{booking.guests}</p>
                                <p>Total amount:{booking.total_amount}</p>
                                <p>Paid status:{booking.paid_status}</p>
                            </div>
                        </div>
                    </div>
                </div>
                );
            })}    
               
                {/* <table className="table table-striped bg-light p-5 m-1">
                    
                    <thead>
                        <tr>
                            <th>Test Name</th>
                            <th>Invoice No</th>
                            <th>Where taken</th>
                            <th>Member</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData && filteredData.map (booking =>{
                            return(
                                <tr className="mt-5" key={booking._id}>
                                    <td>{booking.test_name}</td>
                                    <td>{booking.invoice_no}</td>
                                    <td>{booking.where_taken}</td>
                                    <td>{booking.member_name}</td>
                                    <td>{booking.appointment_date}</td>
                                    <td>{booking.appointment_time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
            </Main>
        </div>
     );
}
 
export default Bookings ;