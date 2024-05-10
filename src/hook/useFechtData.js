/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useFechtData = (url) => {

    
    const [data, setData] = useState({
        dataFecht: null,
        error: null,
        isLoading: true,
    });

    const { dataFecht, error, isLoading } = data;

    const fecht = async(url, method, bodyData = null) =>{
        if(!url) return
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setData({
                dataFecht: data,
                isLoading: false,
                error: null
            })

        } catch (error) {
            setData({
                dataFecht: null,
                isLoading: false,
                error: error
            })
        }
    }

    useEffect(() => {
      fecht()
    }, [])
    
    return ({ 
        dataFecht,
        error,
        isLoading
    })
}