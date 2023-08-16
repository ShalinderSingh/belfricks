import React, { useEffect, useState } from 'react'
import '../App.css'
import FormInput from './FormInput';
import useFormValidation from './Validation';
import { usePostApi } from '../ApiDataComponent/useApiData';
import { FcOk } from 'react-icons/fc';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        address: '',
        gender: '',
        country: '',
        public_address: '',
        phone_no: '',
    });
    const [formErrors, setFormErrors] = useState({})
    const [icons, setIcons] = useState({ username: '' })
    const { validateForm } = useFormValidation(formData, setFormErrors, setIcons)
    const { postData } = usePostApi()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
        setIcons({ ...icons, [name]: value.trim() !== '' ? <FcOk /> : null, })
    }

    const submitHandle = (e) => {
        e.preventDefault()

        if (validateForm()) {
            postData(formData)
            setFormData({
                username: '', email: '', address: '', gender: '',
                country: '', public_address: '', phone_no: ''
            })
        }
    }
    return (
        <div>
            <FormInput formErrors={formErrors} formData={formData} handleChange={handleChange}
                icons={icons} submitHandle={submitHandle} />
        </div>
    );
}

export default RegisterForm