import React from 'react'
import { Route, Routes } from 'react-router'
import RegisterForm from './RegisterForm'
import VerifyUser from './VerifyUser'

const RouteComponent = () => {
    return (
        <Routes>
            <Route exact path='/' element={<RegisterForm />} />
            <Route path='/checkUser' element={<VerifyUser />} />
        </Routes>
    )
}

export default RouteComponent