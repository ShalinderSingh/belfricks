import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const usePostApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post('http://172.16.14.199:4000/belfrics/users/add-user', formData);
            setData(response);
            toast.success('Registration successful!', {
                position: 'top-center',
                autoClose: 3000, // Close after 3 seconds
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };


    return { data, loading, error, postData };
};



