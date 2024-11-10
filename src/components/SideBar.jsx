import {  AiOutlineAppstore, AiOutlineBank, AiOutlineLogout, AiOutlinePlusCircle,AiTwotoneCopy,AiOutlineUser,AiFillAlipaySquare} from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {

    function handleLogout() {
        // Remove the user's authentication token from local storage
        localStorage.removeItem('token');
      
        // Redirect the user to the login page
        window.location.href = '/signin';
      }
      
    return ( 
        <Section>
            <div className="top">
                <div className="brand">
                    <AiOutlineBank/>
                    <span>SavvyHotelSystem</span>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/"> < AiFillAlipaySquare/>Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/profile"> <AiOutlineUser/>My Profile </Link>
                        </li>
                        <li>
                            <Link to="/addroom"> <AiOutlinePlusCircle/>Add Room</Link>
                        </li>
                        <li>
                            <Link to="/viewrooms"> <AiOutlineAppstore/>View Rooms </Link>
                        </li>
                        <li>
                            <Link to="/viewbookings"> <AiTwotoneCopy/>Room Bookings </Link>
                        </li>
                        {/* <li>
                            <Link to="/addfood"> <AiFillAccountBook/>Add Food </Link>
                        </li>
                        <li>
                            <Link to="/viewfood"> <AiFillAliwangwang/>Our food</Link>
                        </li>
                        <li>
                            <Link to="/adddrink"> <AiFillAliwangwang/>Add a drink</Link>
                        </li>
                        <li>
                            <Link to="/viewdrinks"> <AiFillAliwangwang/>Our drinks</Link>
                        </li>
                        <li>
                            <Link to="/addextras"> <AiFillAliwangwang/>Add extras</Link>
                        </li>
                        <li>
                            <Link to="/viewextras"> <AiFillAliwangwang/>Our extras</Link>
                        </li>
                        <li>
                            <Link to="/addvariety"> <AiFillAliwangwang/>Add variety</Link>
                        </li>
                        <li>
                            <Link to="/viewextras"> <AiFillAliwangwang/>Our Variety</Link>
                        </li> */}
                    </ul>

                </div>
            </div>
            <div className="logout">
                <button onClick={handleLogout} className="btn btn-dark btn-sm"><AiOutlineLogout/>Log Out</button>
            </div>
        </Section>
     );
}
 
export default SideBar;
const Section = styled.section`
background-color: #721322;
display: flex;
position: fixed;
overflow: auto;
z-index: 1;
flex-direction: column;
width: 25vw;
left: 0;
height: 100%;
align-items: center;
padding-top: 10px;
.top{
    display: flex;
    flex-direction: column;
    width: 100%;
    .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
        }
        svg {
            color: aliceblue;
            font-size: 2rem;
            margin-right: 2px;
        }
    }
    .links {
        display: flex;
        flex-direction: column;
        ul {
            list-style-type: none;
            padding: 1rem;
            li {
                padding: 0.5rem;
                margin: 5px;
                border-radius: 0.5rem;
                text-align: left;
                &:hover {
                    background-color: black;
                    a{
                        color: white;
                        text-decoration: none;
                    }
                }
                a {
                    color: #F5F5DC;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    svg {
                        fill: #f76c8a;
                        font-size: 1.5rem;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    
}
.bottom {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    background-color: #f76c8a;
    align-items: center;
    border-radius: 10px;
    svg {
        fill: #721322;
        font-size: 3rem;
    }
    span {
        color: white;
    }
}
.logout {
    display: flex;
    background-color: #F5F5DC;
    padding: 5px;
    width: 6em;
    display: inline;
    margin-top: 10px;
    margin-bottom: 10px;
    
}
`