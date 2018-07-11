import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'

const Page404 = () => {
    return (
        <div className="page-404">
            <h1>This is not the web page you are looking for</h1>
            <section className = "error-container">
                <span><span>4</span></span >
                <span>0</span>
                <span><span>4</span></span>
            </section>
            <div className="link-container">
                <Link to="/" className="more-link">Home page</Link>
            </div>
        </div>
    )
};

export default Page404
