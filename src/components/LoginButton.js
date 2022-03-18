import { useAuth0 } from "@auth0/auth0-react";

// SIMPLE LOGIN BUTTON 
const LoginButton = () => {
  // GETTING REDIRECTED AFTER SUCCESSFULL LOGIN
  const { loginWithRedirect } = useAuth0();

  // HANDLING HOVER
  const handleHover = () => {
    document.getElementById('cursor').classList.add('hover_on_profile');
  }

  // HANDLING MOUSE LEAVE
  const handleLeave = () => {
    document.getElementById('cursor').classList.remove('hover_on_profile');
  }

  return( 
        <button
            className='login-button'
            onClick={() => loginWithRedirect()}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
            >
            Login
        </button>
        );
};

export default LoginButton;