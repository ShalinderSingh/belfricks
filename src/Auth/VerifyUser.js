import React from 'react'
import './verifyUser.css';
import { BsFillBagCheckFill } from "react-icons/bs";
import { userTable } from './userTable';
const VerifyUser = () => {

    return (
        <div className="table-container">
            <table>
                <tr>
                    <th>UserName</th>
                    <th>Type</th>
                    <th>PublicAddress</th>
                    <th>MobileNo</th>
                    <th>Gender</th>
                    <th>EmailId</th>
                    <th>Country</th>
                    <th>isVerified</th>
                    <th>Action</th>

                </tr>
                {userTable.map((item, index) => (
                    <tr key={index}>
                        <td>{item.UserName}</td>
                        <td>{item.Type}</td>
                        <td>{item.PublicAddress}</td>
                        <td>{item.MobileNo}</td>
                        <td>{item.Gender}</td>
                        <td>{item.EmailId}</td>
                        <td>{item.Country}</td>
                        <td>{item.isVerified}</td>
                        <td><button>verify</button>
                            <button>unverify</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default VerifyUser