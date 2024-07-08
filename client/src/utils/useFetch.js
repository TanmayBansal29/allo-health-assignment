import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const data = await fetch(url)
        const result = await data.json();
        setData(result)
    }
    useEffect(() => {
        fetchData();
    }, []);
    return data;
}

export default useFetch