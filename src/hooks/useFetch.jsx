import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const proxy = process.env.REACT_APP_PROXY;

const useFetch = ({ launch = true, onSuccess = () => {} }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const fetch = useCallback(() => {
        setLoading(true);

        axios({
            method: 'GET',
            url: proxy
        })
            .then((response) => {
                setData(response.data);
                onSuccess(response.data);
            })
            .catch((error) => {
                setErrors(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // eslint-disable-line

    useEffect(() => {
        if (launch) {
            fetch();
        }
    }, [launch, fetch]);

    return [data, loading, errors];
};

export { useFetch };
