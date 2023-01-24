import React, { useEffect } from 'react'
const Qr = () => {
    useEffect(() => {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("q") || 'dQw4w9WgXcQ'
        window.location.href = `https://www.youtube.com/watch?v=${query}`
    }, [])

    return (
        <>
            <p>Redirecting...</p>
        </>
    )
}

export default Qr