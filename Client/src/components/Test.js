import React, { useEffect, useState } from 'react'
import Axios from "axios";

function Test() {
    const [data, setData] = useState("");

    const getData = async () => {
        const response = await Axios.get("http://localhost:4000/register");
        setData(response.data);
    }

    useEffect(() => {
        getData()
    }, []);

    return (
    <div>{data}</div>
  )
}

export default Test