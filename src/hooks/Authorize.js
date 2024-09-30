import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { env } from '../utilities/function';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(<Loading message='Please wait, logging you in...' />);
    const [user, setUser] = useState({});
    const [manualInput, setManualInput] = useState(false); // New state to toggle manual input form
    const [manualUser, setManualUser] = useState({ id: '', name: '', email: '' }); // Store manually entered data

    const authorize = async (loggedIn, cb) => {
        if (loggedIn) {
            setContent(children);
        } else {
            const redirectTo =
                env('AUTHENTICATION_CLIENT') +
                '/login?redirectto=' +
                encodeURIComponent(window.location.href);
            setContent(
                <Loading
                    message='Please wait, redirecting you to Clikkle Accounts'
                    redirectTo={redirectTo}
                />
            );
        }
        if (typeof cb === 'function') cb(setUser);
    };

    const handleManualSubmit = () => {
        localStorage.setItem('user', JSON.stringify(manualUser));
        authorize(true, (setUser) => setUser(manualUser));
    };

    useEffect(() => {
        (async () => {
            try {
                const queryParameters = new URLSearchParams(window.location.search);
                const userId = queryParameters.get("userId");

                if (userId) {
                    var formData = new FormData();
                    formData.append("id", userId);

                    const response = await fetch(
                        "https://accounts.clikkle.com:5000/api/auth/get_user_profile",
                        {
                            method: "POST",
                            body: formData
                        }
                    );

                    if (response.ok) {
                        const responseData = await response.json();
                        const { user } = responseData;
                        localStorage.setItem("user", JSON.stringify(user));
                        authorize(true, (setUser) => setUser(user));
                    } else {
                        console.log('User not found, switching to manual input');
                        setManualInput(true); // Enable manual input if API fails
                    }
                } else if (localStorage.getItem("user")) {
                    let user = JSON.parse(localStorage.getItem("user"));
                    authorize(true, (setUser) => setUser(user));
                } else {
                    setManualInput(true); // Enable manual input if no user is found
                }
            } catch (err) {
                console.log(err);
                authorize(false);
                setManualInput(true); // Enable manual input if error occurs
            }
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider value={{ authorize, setUser, user, setContent }}>
            {manualInput ? (
                <div>
                    <h2>Manual User Entry</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleManualSubmit(); }}>
                        <label>
                            User ID:
                            <input
                                type="text"
                                value={manualUser.id}
                                onChange={(e) => setManualUser({ ...manualUser, id: e.target.value })}
                            />
                        </label>
                        <br />
                        <label>
                            Name:
                            <input
                                type="text"
                                value={manualUser.name}
                                onChange={(e) => setManualUser({ ...manualUser, name: e.target.value })}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                value={manualUser.email}
                                onChange={(e) => setManualUser({ ...manualUser, email: e.target.value })}
                            />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                content
            )}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext).authorize;
const useUser = () => useContext(authorizeContext)?.user;
const useSetUser = () => useContext(authorizeContext).setUser;
const useSetContent = () => useContext(authorizeContext).setContent;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser, useSetContent };
