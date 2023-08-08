import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePostApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const postData = async (formData) => {
        console.log(formData, "FORMDATA")
        // axios.post("http://172.16.14.199:4000/bellfrix/users/add-user", formData)
        //     .then((res) => console.log(res))
        setLoading(true);
        try {
            const response = await axios.post('http://172.16.14.199:4000/bellfrix/users/add-user', formData);
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    console.log(data, ':::::::::')

    return { data, loading, error, postData };
};



