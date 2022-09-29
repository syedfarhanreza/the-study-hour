import React from 'react';

const List = ({list}) => {
    return (
        <div>
             <h4>List summary</h4>
                <p>Selected Activities: {list.length}</p>
        </div>
    );
};

export default List;