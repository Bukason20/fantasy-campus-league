import React, { createContext } from 'react'
import { useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
   

   return(
      <AuthContext.Provider value={{

      }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   const context = useContext(AuthContext)
   if (!context) {
      throw new Error('useAuth must be used within an AuthProvider')
   }
}

export default AuthProvider