import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <div>Loading....</div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;