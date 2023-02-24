import React from 'react';
import {Pagination} from 'react-bootstrap';


const PaginationComponent = (props) => {
    let items = []
    let pageCount = Math.ceil( props.totalCount / 12 )
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === props.activePage} onClick={() => props.getFlowers(number)}>
                {number}
            </Pagination.Item>
        )
    }

    return (
        <Pagination>{items}</Pagination>
    )
}

export default PaginationComponent;