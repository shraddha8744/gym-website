import { createContext, useState, useEffect } from "react";

// Create the context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState(false); // Default is logged out
  const [selectLanguage, setSelectlanguage] = useState("English");

  // Sync state with localStorage
  useEffect(() => {
    const storedState = localStorage.getItem("isLoggedIn");
    if (storedState === "true") {
      setState(true);
    }
  }, []); // Run only once on component mount

  // Function to log in the user
  const login = () => {
    setState(true);
    localStorage.setItem("isLoggedIn", "true"); // Persist the login state
  };

  // Function to log out the user
  const logout = () => {
    setState(false);
    localStorage.removeItem("isLoggedIn"); // Remove the login state
  };

  return (
    <MyContext.Provider
      value={{ state, login, logout, selectLanguage, setSelectlanguage }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
