import React, { useState } from 'react';
import TableRow from './TableRow';


function Table() {
  const [num, UpdateNum] = useState(2);
  const [upto, setUpto] = useState(10);

  function NextTable(event) {
    let newNum = +event.target.value;

    UpdateNum(newNum)                             //Tells react something has changed
  }

  let rows = [];
  for (let i = 1; i <=upto; i++) {
    rows.push(<TableRow number={num} index={i}/>)
    
  }

  function UpdateUpto(event) {
    let newUpto = +event.target.value;

    setUpto(newUpto)                             //Tells react something has changed
  }

  return (
    <div className='p-2'>
      <div className='p-10'>
      {/* {num > 20 && <div className='border border-green-900 mb-1'>Nice job, {num} tk poch gya</div> } */}
        <input onChange={NextTable} className='border border-gray-700 rounded-md' value={num} />
        <input onChange={UpdateUpto} className='border border-gray-700 rounded-md' value={upto} />

        {/* <TableRow number={num} index={1} />
        <TableRow number={num} index={2} />
        <TableRow number={num} index={3} />
        <TableRow number={num} index={4} />
        <TableRow number={num} index={5} /> */}
        
        {rows}
      </div>

    </div>
  );
}

export default Table;