import "./user.css";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';


const User = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = Cookies.get('user');
        if (userData) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
            } catch (error) {
                console.error('Error parsing user data from cookie', error);
            }
        } else {
            console.log('No user data found');
        }
    }, []);
    const [isCustomStyle, setIsCustomStyle] = useState(false);
    return (
        <>
            <div className="mydark">
                {user && <Sidebar img={user.photoURL} isCustomStyle={isCustomStyle} setIsCustomStyle={setIsCustomStyle} name={user.displayName} />}
                <div className={`app-container ${isCustomStyle ? 'custom-style user-content' : 'user-content'}`}>
                    <Outlet isCustomStyle={isCustomStyle} setIsCustomStyle={setIsCustomStyle}/>
                </div>
            </div>
        </>
    );
};

export default User;
