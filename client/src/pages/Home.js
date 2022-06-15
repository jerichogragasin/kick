import React, {
    useEffect
} from 'react';
import {
    Navigate
} from 'react-router-dom';

const Home = ({isLoggedIn, logoutHandler}) => {

    if(!isLoggedIn){
        return <Navigate to='/login' replace />
    } 
    return(
        
        <div>
            <h1>Home Page</h1>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Home;              