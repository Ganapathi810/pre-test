// // src/auth/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   // simulate loading user from localStorage/session
// //   useEffect(() => {
// //     const savedUser = localStorage.getItem("user");
// //     if (savedUser) setUser(JSON.parse(savedUser));
// //   }, []);

// //   const login = (data) => {
// //     localStorage.setItem("user", JSON.stringify(data));
// //     setUser(data);
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
