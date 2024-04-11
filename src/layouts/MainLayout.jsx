import React from 'react'
import Login from '../pages/Login'

const MainLayout = () => {
    const isLogin = ""
    
    return(
       <>
        {!isLogin ? <Login/> : <h1>Hello</h1>}
       </>
        )
 
    


}
export default MainLayout
