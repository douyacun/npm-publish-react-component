import React, { useState, useEffect } from 'react';
import './index.css';

function Demo({ name }) {
    const [duration, setDuration] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setDuration((duration) => {
                return duration + 1
            })
        }, 1000)
    }, [])
    return (
        <div>
            <h1>Hello, <span className="name">{name}</span> {duration}</h1>
        </div>
    )
}

export default Demo