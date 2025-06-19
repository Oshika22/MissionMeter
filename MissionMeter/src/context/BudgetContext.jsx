import React, { createContext, useContext, useState } from 'react';

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [missionData, setMissionData] = useState(null);

  return (
    <BudgetContext.Provider value={{ missionData, setMissionData }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
