import MasterChief from '../components/three/HaloScene';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useAuth0 } from '@auth0/auth0-react';
import Lights from './three/Lights';
import Floor from './three/Floor';
import { softShadows, OrbitControls } from '@react-three/drei';
import greenishBackground from '../assets/image/greenishBackground.jpg';

const Profile = () => {

    softShadows();
    const { user } = useAuth0();

    const userMail = user === undefined ? user : user.email;
    const userFirstName = user === undefined ? user : user.given_name;
    const userLastname = user === undefined ? user : user.family_name;
    const userFullname = userFirstName + ' ' + userLastname;
    const userBirthdate = user === undefined ? user : user.birthdate
    const userNickname = user === undefined ? user : user.nickname

    return (
        <div className="profilePage">
            <p className='avatar'>Avatar</p>
            <div className="charakterContainer">
                <Canvas
                    colorManagement
                    shadowMap
                    camera={{ position: [-3, 0, 4], fov: 40 }}>
                    <Lights />
                    <Suspense fallback={null}>
                        <MasterChief />
                        <Floor />
                        <OrbitControls enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>
            <p className='profileHeadline'>Personal Data and Information</p>
            <img className='greenishBackground' src={greenishBackground} alt='greenishBackground' />
            <a href='/' className='navigateToHome'>Hub</a>
            <div className="userRelatedDataContainer">
                <div>
                    <p className='credentialsLabel'>First Name:</p>
                    <div className='userCredentialsContainer'>
                        <p className='authdata'>{userFirstName}</p>
                    </div>
                </div>

                <div>
                    <p className='credentialsLabel'>Last Name:</p>
                    <div className='userCredentialsContainer'>
                        <p className='authdata'>{userLastname}</p>
                    </div>
                </div>

                <div>
                    <p className='credentialsLabel'>Full Name:</p>
                    <div className='userCredentialsContainer'>
                        <p className='authdata'>{userFullname}</p>
                    </div>
                </div>

                <div>
                    <p className='credentialsLabel'>Email:</p>
                    <div className='userCredentialsContainer'>
                        <p className='authdata'>{userMail}</p>
                    </div>
                </div>

                <div>
                    <p className='credentialsLabel'>Date Of Birth:</p>
                    <div className='userCredentialsContainer'>
                        <p className='authdata'>{userBirthdate}</p>
                    </div>
                </div>

                <div>
                    <p className='credentialsLabel'>Nickname:</p>
                    <div className='userCredentialsContainer'>
                        <p className='authdata'>{userNickname}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;