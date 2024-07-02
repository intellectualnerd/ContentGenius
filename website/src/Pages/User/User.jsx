import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const App = () => {
    const [user, setUser] = useState(null);
    console.log("hiiiiiiiiii", user)
    useEffect(() => {
        // Fetch user data if necessary or check cookies
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

    return (
        <div>
            <h1>Welcome</h1>
            {user ? (
                <div>
                    <p>Name: {user.displayName}</p>
                    <p>ID: {user.uid}</p>
                </div>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
};

export default App;

