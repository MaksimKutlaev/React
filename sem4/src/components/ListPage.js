import React from 'react';
import { Link } from 'react-router-dom';

function ListPage ({pages}) {
    return (
        <ul>
            {pages.map(page => <li key={page.id}><Link to={`/pages/${page.id}`}>{page.title}</Link></li>)}
        </ul>
    );
}

export default ListPage;