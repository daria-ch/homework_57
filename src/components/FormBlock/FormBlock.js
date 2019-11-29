import React from 'react';
import './FormBlock.css';

const FormBlock = props => {
    return (
        <form className='form'>
            <input type="text" required placeholder='Item name' className='item' autoComplete='off'
                   onChange={props.getName}/>
            <label><input type="number" required placeholder='Cost' className='cost' autoComplete='off'
                          onChange={props.getCost}/>KGS</label>
            <button onClick={props.add}>Add</button>
        </form>
    );
};

export default FormBlock;