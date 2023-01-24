import React, { useEffect } from 'react'
const Resume = () => {
    useEffect(() => {
        window.location.href = 'https://registry.jsonresume.org/baptistedftn'
    }, [])

    return (
        <>
            <p>Redirecting...</p>
        </>
    )
}

export default Resume