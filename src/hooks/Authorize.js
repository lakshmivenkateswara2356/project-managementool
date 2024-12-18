import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { env } from '../utilities/function';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(
        <Loading message="Please wait, logging you in..." />
    );
    const [user, setUser] = useState(null); // Initialize user as null

    const showNotAuthorized = () => {
        setContent(
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2>You are not authorized to view this page.</h2>
                <p>Please log in to continue.</p>
            </div>
        );
    };

    const authorize = async (loggedIn, cb) => {
        if (loggedIn) {
            setContent(children); // Render the children if logged in
        } else {
            showNotAuthorized(); // Show "Not Authorized" message if not logged in
        }
        if (typeof cb === 'function') cb(setUser);
    };

    useEffect(() => {
        const fetchUserProfile = async (userId) => {
            const formData = new FormData();
            formData.append('id', userId);

            try {
                const response = await fetch(
                    'https://accounts.clikkle.com:5000/api/auth/get_user_profile',
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                if (response.ok) {
                    console.log('User found...');
                    const { user } = await response.json();
                    console.log(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    authorize(true, (setUser) => setUser(user));
                } else {
                    console.warn('User not found, showing not authorized message...');
                    showNotAuthorized();
                }
            } catch (err) {
                console.error('Error fetching user profile:', err);
                showNotAuthorized();
            }
        };

        (async () => {
            const queryParameters = new URLSearchParams(window.location.search);
            const userId = queryParameters.get('userId');

            if (userId) {
                console.log('User ID found in query:', userId);
                await fetchUserProfile(userId);
            } else if (localStorage.getItem('user')) {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                console.log('User found in localStorage:', storedUser);
                authorize(true, (setUser) => setUser(storedUser));
            } else {
                console.log('No userId or stored user, showing not authorized message...');
                showNotAuthorized();
            }
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider value={{ authorize, setUser, user, setContent }}>
            {content}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext).authorize;
const useUser = () => useContext(authorizeContext)?.user;
const useSetUser = () => useContext(authorizeContext).setUser;
const useSetContent = () => useContext(authorizeContext).setContent;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser, useSetContent };
