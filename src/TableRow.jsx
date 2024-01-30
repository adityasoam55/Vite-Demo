import React from 'react';

function TableRow({number, index}) {
    return(
        <>
        <div className='text-white text-xl'>{number} x {index} = {number * index}</div>
        </>
    );
}

export default TableRow;