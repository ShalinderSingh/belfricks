import React, { useState } from 'react'
import './UserStatus.css'
import { useGetApi } from '../ApiDataComponent/useGetApi'
const UserStatus = () => {
    const { getApiId, userStatus } = useGetApi()
    const [inputData, setInputData] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        getApiId(inputData)
    }

    return (
        <div className="user-status">
            <h2>User status check Verified (true / false)</h2>
            <div className="search-bar">
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button onClick={handleSearch}>search</button>
            </div>
            {userStatus.username && (
                <div className="user-details">
                    <ul>
                        <li> <strong>username :</strong>  {userStatus.username}</li>
                        <li><strong>user_type :</strong> {userStatus.user_type}</li>
                        <li><strong>public_address :</strong> {userStatus.public_address}</li>
                        <li><strong>phone_no :</strong> {userStatus.phone_no}</li>
                        <li><strong>gender :</strong> {userStatus.gender} </li>
                        <li><strong>email :</strong> {userStatus.email}</li>
                        <li><strong>country :</strong> {userStatus.country}</li>
                        <li><strong>is_verified :</strong> {userStatus.is_verified === 1 ? 'true' : 'false'}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserStatus