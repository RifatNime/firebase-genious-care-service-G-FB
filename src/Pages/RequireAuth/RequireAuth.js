// login log out er kaj ses kore home a dekhanor por er kaj
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();


    if (!user) {  //check this line

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    return children;
};

export default RequireAuth;

/* ----------------------------- 1 no step ----------------------------------------*/