import React from 'react';


const List = ({items, renderItem}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item, index)}</li>
            ))};
        </ul>
    );
};

export default List;