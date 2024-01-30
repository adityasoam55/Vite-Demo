import React from 'react';

function NoMatching({ children }){
return (
    <div className='text-white bg-red-500 text-center m-1'>{children}</div>
);
}

export default NoMatching;