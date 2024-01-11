import React, { useEffect } from 'react'
const Resume = () => {
    useEffect(() => {
        window.location.href = '/cv.pdf'
    }, [])

    return (
        <>
            <p>Redirecting...</p>
        </>
    )
}

export default Resume