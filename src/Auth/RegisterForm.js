import React, { useState } from 'react'
import '../App.css'
import FormInput from './FormInput';
import useFormValidation from './Validation';
import { usePostApi } from './useApiData';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        address: '',
        gender: '',
        country: '',
        publicAddress: '',
        phoneNumber: '',
    });
    const [formErrors, setFormErrors] = useState({})
    const { validateForm } = useFormValidation(formData, setFormErrors)
    const { postData, data } = usePostApi()
    console.log(data, "data==SASA")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const submitHandle = (e) => {
        e.preventDefault()

        if (validateForm()) {
            console.log("submit ")
            postData(formData)
            // setFormData({
            //     username: '', email: '', address: '', gender: '',
            //     country: '', publicAddress: '', phoneNumber: ''
            // })
        }
    }
    return (
        <div>
            <FormInput formErrors={formErrors} formData={formData} handleChange={handleChange}
                submitHandle={submitHandle} />
        </div>
    );
}

export default RegisterForm