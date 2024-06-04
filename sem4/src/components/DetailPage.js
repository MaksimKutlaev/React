import React from 'react';
import { Link, useParams } from 'react-router-dom';

function DetailPage({pages}) {
    const {id} = useParams();
    const page = pages.find(page => page.id === parseInt(id));
    
    return (
        <div>
            <h1>{page.title}</h1>
            <p>{page.text}</p>
            <a><Link to="/">На главную</Link></a>
        </div>
    );
}

export default DetailPage;