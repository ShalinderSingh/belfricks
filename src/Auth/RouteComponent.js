import React from 'react'
import { Route, Routes } from 'react-router'
import RegisterForm from './RegisterForm'
import VerifyUser from './VerifyUser'
import UserStatus from './UserStatus'

const RouteComponent = () => {
    return (
        <Routes>
            <Route exact path='/' element={<RegisterForm />} />
            <Route path='/checkUser' element={<VerifyUser />} />
            <Route path='/userStatus' element={<UserStatus />} />
        </Routes>
    )
}

export default RouteComponent