import { useState, useEffect } from 'react';

interface DataType {
    id: number;
    Code: string;
}

const useFetch = (url: string) => {
    const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/${url}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [url]);

    return { data, loading, error };
};

export default useFetch;