import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const ShortProfile = ({ profileButton }) => {
    // THE SHORT PROFILE CONTAINS THE PROFILE IMAGE AND THE LOGOUT/LOGIN BUTTONS (DEPENDING ON CURRENT USER STATE)
    const user = useAuth0();
    return (
        <div
            className="quickLog-wrapper"
            id="quickLog-wrapper"
            onMouseOver={() => {
                document.getElementById('quickLog-wrapper').classList.add('expand');

            }}
            onMouseLeave={() => {
                document.getElementById('quickLog-wrapper').classList.remove('expand');
            }}
            style={{ left: `${profileButton.left}px`, top: `${profileButton.top}px` }}
        >
            {user.user === undefined
                ? <div className="login-wrapper">
                    <img src='/images/login-img.jpg'></img>
                    <LoginButton />
                </div>
                : <div className='logout-wrapper'>
                    <img src='/images/login-img.jpg' />
                    <LogoutButton />
                    <a 
                       style= {{textDecoration: 'none', color: 'white', fontSize: '1.25rem', fontWeight: 'none'}} 
                       onMouseLeave={() => {
                       document.getElementById('cursor').classList.remove('hover_on_profile')}}
                       onMouseOver={() => {document.getElementById('cursor').classList.add('hover_on_profile')}}
                       className='settings-anchor' href="/profile">
                       Profile
                    </a>
                </div>
            }
        </div>
    );
}

export default ShortProfile;