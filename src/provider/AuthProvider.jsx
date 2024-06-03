import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut,  updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);





  const signUp = (email, password) => {

   return createUserWithEmailAndPassword(auth, email, password)

  }

  const updateProfileinfo = (name, photo) =>{
    return  updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  const signIN = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email , password)
  }

  

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user from auth", currentUser);
      
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);


const sharedInfo = {
  user,
  setUser,
  loading,
signUp,
updateProfileinfo,
signIN,
logOut

}



  return (
   <AuthContext.Provider value={sharedInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;