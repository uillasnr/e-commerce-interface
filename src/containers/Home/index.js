import React, { useEffect } from "react";
import api from "../../services/api";


function Home() {

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')

            console.log(response)
        }
        loadCategories()
    }, [])

    return (
        <h1>uillas</h1>
    )
}
export default Home
