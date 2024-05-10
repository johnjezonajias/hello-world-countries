'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

type Country = {
    name: {
        common: string
    },
    cca3: string
}

type FetchParams = {
    url: string
}

export const useFetchApi = ( params: FetchParams ) => {
    const { url } = params;
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<any[]>(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading };
}
