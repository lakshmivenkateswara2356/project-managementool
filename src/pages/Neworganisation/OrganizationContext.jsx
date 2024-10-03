// OrganizationContext.js
import React, { createContext, useState } from 'react';

export const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
    const [organizations, setOrganizations] = useState([]);

    const addOrganization = (name) => {
        setOrganizations((prevOrgs) => [...prevOrgs, name]);
    };

    return (
        <OrganizationContext.Provider value={{ organizations, addOrganization }}>
            {children}
        </OrganizationContext.Provider>
    );
};
