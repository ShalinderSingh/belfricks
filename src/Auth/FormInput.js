import React from 'react'
import CountryData from './CountryData'
import { usePostApi } from '../ApiDataComponent/useApiData'
import { useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const FormInput = ({ formErrors, submitHandle, formData, handleChange, icons }) => {
    const navigate = useNavigate()
    const { loading, error } = usePostApi()
    return (
        <>
            <div className="register-container">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <>
                        <button className='clickButton' onClick={() => navigate('/userStatus')}>Check User</button>
                        <h2>Register Form</h2>
                        <form onSubmit={submitHandle}>
                            <div className='input-container'>
                                <label>Username:</label>
                                <input type="text" name="username" value={formData.username} onChange={handleChange} maxlength='10' />
                                {formErrors.username && <span>{formErrors.username}</span>}
                                <div className="icon-container">
                                    {icons.username && icons.username}
                                </div>
                            </div>
                            <div className='input-container'>
                                <label>Email:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                <div className="icon-container"> {icons.email}</div>
                                {formErrors.email && <span>{formErrors.email}</span>}
                            </div>
                            <div className='input-container'>
                                <label>Address:</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} maxlength="50" />
                                <div className="icon-container"> {icons.address}</div>
                                {formErrors.address && <span>{formErrors.address}</span>}
                            </div>
                            <div>
                                <label>Gender:</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </select>
                                {formErrors.gender && <span>{formErrors.gender}</span>}
                            </div>
                            <div>
                                <label>Country: </label>
                                <CountryData formData={formData} handleChange={handleChange} />

                                {formErrors.country && <span>{formErrors.country}</span>}
                            </div>
                            <div className='input-container'>
                                <label>PublicAddress: </label>
                                <input type="text" name="public_address" value={formData.public_address} onChange={handleChange} maxlength='50' />
                                <div className="icon-container">{icons.public_address}</div>
                                {formErrors.public_address && <span>{formErrors.public_address}</span>}
                            </div>
                            <div className='input-container' >
                                <label >PhoneNumber: </label>
                                <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} maxlength='10    ' />
                                <div className="icon-container"> {icons.phone_no}</div>

                                {formErrors.phone_no && <span>{formErrors.phone_no}</span>}
                            </div>
                            <button className='button' type="submit">Register</button>
                        </form>

                        <Link className='linkAdmin' to='/checkUser'>Admin Verified detail</Link>
                    </>
                )}

            </div>
            <ToastContainer />

        </>

    )
}

export default FormInput