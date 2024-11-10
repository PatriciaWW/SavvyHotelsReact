import {  AiFillCalendar, AiFillBell, AiOutlineAppstore} from "react-icons/ai";
import styled from "styled-components";
import Avatar from "../images/icon.png"

const TopBar = () => {
    // const hotel_name = localStorage.getItem("hotel_name")
    return ( 
        <Nav>
            <div className="admin">
                    Admin Portal
                </div>
            <div className="content"> 
                <div className="date">
                    <AiFillCalendar/>
                    {/* to update with logged in user name */}
                    <span>Hotell</span>
                </div>

                <div className="icon">
                    <AiOutlineAppstore/>
                    <AiFillBell/>
                    <div className="image">
                        <img src={Avatar} alt="" />
                    </div>

                </div>
            </div>
        </Nav>
     );
}
 
export default TopBar;
const Nav = styled.nav`
display: flex;
position: fixed;
z-index: 0;
top: 0;
right: 0;
justify-content: space-between;
background-color: #F5F5DC;
overflow: auto;
width: 75%;
.admin {
    color: orange;
    margin-top: 5px;
    display: flex;
    margin-left: 10dp;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    .date {
        background-color: white;
        color: #721322;
        display: flex;
        align-items: center;
        padding: 0.3rem;
        height: 10px;
        span {
            color: gray;
        }
        svg {
            margin-right: 8px;
            color: brown;
            font-size: 24px;
        }
    }
    .icon {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        gap: 1rem;
        svg {
            color: brown;
            font-size: 24px;
        }
        .image {
            margin-right: 10%;
            img {
                color: #F5F5DC;
                font-size: 24px;
                width: 40px;
                margin-top: 5%;
            }
        }
    }
}
`