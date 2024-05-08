
import React, { useContext } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';

export const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Resettare lo stato dell'utente a valori vuoti e isAuthorized a false
    logout();

    // Rimuovere il token salvato nei cookie
    Cookies.remove('token');

    navigate('login/');
  };

  return( 
    <>
    <button onClick={handleLogout} className="btn btn-warning">Logout</button>
    </>
  );
};


