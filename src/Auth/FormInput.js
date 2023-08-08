import React from 'react'
import CountryData from './CountryData'
import { usePostApi } from './useApiData'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const FormInput = ({ formErrors, submitHandle, formData, handleChange }) => {
    const navigate = useNavigate()
    const { data, loading, error } = usePostApi()
    console.log(data, "@@@@@@@@@@@@@@@@")
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="register-container">
                <h2>Register Form</h2>
                <button onClick={() => navigate('/checkUser')}>Check User</button>

                <form onSubmit={submitHandle}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} maxlength='15' />
                        {formErrors.username && <span>{formErrors.username}</span>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {formErrors.email && <span>{formErrors.email}</span>}
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} maxlength="50" />
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
                    <div>
                        <label>PublicAddress: </label>
                        <input type="text" name="publicAddress" value={formData.publicAddress} onChange={handleChange} maxlength='50' />
                        {formErrors.publicAddress && <span>{formErrors.publicAddress}</span>}
                    </div>
                    <div >
                        <label>PhoneNumber: </label>
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} maxlength='10    ' />

                        {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
                    </div>
                    <button type="submit">Register</button>
                </form>

            </div>
        </>
    )
}

export default FormInput