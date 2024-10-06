import React, { createContext, useState } from 'react';

export const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
  const [selectedOrganization, setSelectedOrganization] = useState('Clikkle Technologies');

  return (
    <OrganizationContext.Provider value={{ selectedOrganization, setSelectedOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};
