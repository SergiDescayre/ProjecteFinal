import React from 'react'
import Login from '../pages/Login'

const MainLayout = () => {
    const isLogin = true
    
    return(
       <>
 
       <div className='dark:bg-slate-600'>
     
        {isLogin ? <Login/> : <h1>Hello</h1>}
       </div>
       </>
        )
 
    


}
export default MainLayout
