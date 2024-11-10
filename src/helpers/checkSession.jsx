import { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

const CheckSession = () => {
    const navigate = useNavigate();
    const hotel_name = localStorage.getItem("hotel_name")
    const hotel_id = localStorage.getItem("hotel_id")
    const token = localStorage.getItem("token")
    useEffect(()=> {
            if (!hotel_name && !hotel_id && !token){
                localStorage.clear();
                return navigate("/signin")
            }
        }, [hotel_name, hotel_id,token, navigate]) 

    return {hotel_name, hotel_id,token};
}
 
export default CheckSession;