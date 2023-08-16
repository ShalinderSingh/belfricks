import React, { useEffect, useState } from 'react'
import './verifyUser.css';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useGetApi } from "../ApiDataComponent/useGetApi"

const VerifyUser = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { getData, getApi, totalPages, loading, error, setStatus, getApiId, STdata } = useGetApi(currentPage)

    useEffect(() => {
        getApi()
    }, [currentPage, STdata])

    const handlePageChange = (page) => {
        setCurrentPage(page);
        getApi();

    };
    const clickHandler = async (id) => {
        console.log(id, 'ididididid')
        await getApiId(id)
        await setStatus(true)

    };

    const falseStatus = async (id) => {
        await getApiId(id)
        await setStatus(false)

    }


    return (
        <div className="table-container">

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>Type</th>
                                <th>PublicAddress</th>
                                <th>MobileNo</th>
                                <th>Gender</th>
                                <th>EmailId</th>
                                <th>Country</th>
                                <th>Verified</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {getData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.user_type}</td>
                                    <td>{item.public_address}</td>
                                    <td>{item.phone_no}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                    <td>{item.country}</td>
                                    <td>{item.is_verified === 1 ? 'true' : 'false'}</td>

                                    <td>
                                        {!item.is_verified && (
                                            <button onClick={() => clickHandler(item.public_address)} className='checkBox'><BsFillCheckCircleFill /></button>
                                        )}
                                        <button onClick={() => falseStatus(item.public_address)} className='crossBox'><RxCross2 /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={index + 1 === currentPage ? 'activePage' : ''}
                                onClick={() => handlePageChange(index + 1)}
                            >{index + 1}
                            </button>
                        ))}
                    </div>
                </>

            )}
        </div>
    )
}

export default VerifyUser