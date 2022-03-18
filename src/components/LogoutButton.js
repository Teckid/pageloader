import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {

  // GETTING DATA FROM AUTHENTIFICATION SERVICE
  const {logout } = useAuth0();

  const handleHover = () => {
    document.getElementById('cursor').classList.add('hover_on_profile');
  }

  const handleLeave = () => {
    document.getElementById('cursor').classList.remove('hover_on_profile');
  }

  return(
    <button 
        className='logout-button' 
        onClick={() => logout()} 
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
        >
        Logout
    </button>
    );
};

export default LogoutButton;