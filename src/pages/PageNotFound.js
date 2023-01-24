import React from "react";
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <>
            <p>Are you lost 🔍 ?</p>
            <Link to='/'>Go Home</Link>
        </>
    )
};
