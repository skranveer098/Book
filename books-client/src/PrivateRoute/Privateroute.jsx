import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'flowbite-react'

const Privateroute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='text-center'>
                    <Spinner aria-label="Center-aligned spinner example" />

        </div>
    }

    if(user){
        return children;
    }

  return (
    <div>
      <Navigate to="/login" state={{from: location}} replace></Navigate>
    </div>
  )
}

export default Privateroute
