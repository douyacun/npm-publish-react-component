import React from 'react';
import './index.css';

function Demo ({name}) {
    return (
        <div>
            <h1>Hello, <span className="name">{name}</span></h1>
        </div>
    )
}

export default Demo