import checkSession from "../helpers/checkSession";
import Main from "../styles/main";
import Layout from "./Layout";

const MainContent = () => {
    const {hotel_name, hotel_id, token} = checkSession();
    return ( 
        <div>
           <Layout/>
            <Main>
                <div className="main">
                <h1>Dashboard</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow p-4">
                                <div className="card-body">
                                    <p>Efficient</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow p-4">
                                <div className="card-body">
                                    <p>Affordable</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow p-4">
                                <div className="card-body">
                                    <p>Efficient</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Main>
    </div>
     );
}
 
export default MainContent;