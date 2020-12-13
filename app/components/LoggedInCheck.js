import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoggedInCheck({ is, isNot }) {
    const [ login, setLogin ] = useContext(AuthContext);
    
    if (login) return is;
    if (!login) return isNot;
}

export default LoggedInCheck;