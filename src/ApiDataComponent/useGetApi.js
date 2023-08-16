import axios from 'axios';
import { useEffect, useState } from 'react'

export const useGetApi = (currentPage) => {
    const [getData, setGetData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState('')
    const [STdata, setsSTData] = useState('')
    const [status, setStatus] = useState()
    const [userStatus, setUserStatus] = useState('')

    const getApi = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`http://172.16.14.199:4000/belfrics/admin?page=${currentPage}&limit=10`)
            setGetData(res.data.message.data.rows)
            const totalCount = res.data.message.data.count
            const itemsPerPage = 10;
            const calpage = Math.ceil(totalCount / itemsPerPage);
            setTotalPages(calpage)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    const getApiId = async (idx) => {

        try {
            const res = await axios.get(`http://172.16.14.199:4000/belfrics/admin/${idx}`)
            setUserStatus(res?.data?.message?.data)
            if (res && res?.data?.message?.data?.id) {
                const data = {
                    id: res?.data?.message?.data?.id,
                    public_address: res?.data?.message?.data?.public_address,
                    status: status
                }

                const statusRes = await axios.put('http://172.16.14.199:4000/belfrics/kyc/status/', data)
                console.log(statusRes, "IDID++")
                setsSTData(statusRes)

            }
        } catch (err) { console.log(err, 'err') }

    }

    return { loading, error, getData, getApi, totalPages, getApiId, setStatus, STdata, userStatus }
}

